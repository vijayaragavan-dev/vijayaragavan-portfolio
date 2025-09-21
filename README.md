# PortfolioPro - A Next-Level Personal Portfolio

This is a professional, highly responsive, and stylish personal portfolio website for Vijayaragavan, built with Next.js and Firebase. The site is designed to be luxurious, minimal, futuristic, and rich in smooth, premium transitions and animations.

## ✨ Features

- **Professional & Stylish UI**: Aesthetically pleasing design with a focus on user experience.
- **Rich Animations**: Fluid and unique animations on every section and interaction.
- **Fully Responsive**: Adapts seamlessly to all screen sizes, from mobile to desktop.
- **Performance Optimized**: Fast loading times with optimized assets (Lighthouse 90+).
- **Firebase Integration**: Uses Firebase Firestore for contact form submissions.
- **Accessibility**: Built with semantic HTML, keyboard navigation, and `prefers-reduced-motion` support.

## 🌐 Sections

- **Home**: A fullscreen hero section with an animated text intro and glowing CTAs.
- **About**: A brief introduction with a rotating profile picture and animated timeline.
- **Projects**: A stunning showcase of projects with 3D tilt-on-hover animated cards.
- **Skills**: A grid of animated skill badges.
- **Contact**: A modern contact form, social media links with glowing icons, and a resume download button.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **Animations**: CSS Animations & Transitions
- **Database**: [Firebase Firestore](https://firebase.google.com/docs/firestore)
- **Hosting**: [Firebase Hosting](https://firebase.google.com/docs/hosting)

## 🔥 Firebase Setup

### 1. Create a Firebase Project

Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.

### 2. Configure Firebase in your app

- In your new Firebase project, go to Project Settings and add a new Web App.
- Copy the Firebase configuration object.
- Create a `.env.local` file in the root of your project and add your Firebase config keys:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

The file `src/lib/firebase.ts` is already set up to read these environment variables.

### 3. Set up Firestore

- In the Firebase Console, go to the "Firestore Database" section.
- Create a new database in Production mode.
- Set up Firestore security rules to allow writes to the `contacts` collection. For development, you can start with open rules, but make sure to secure them for production.

Example `firestore.rules`:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{documentId} {
      allow create: if true; // Allow anyone to submit the contact form
      allow read, write, delete: if false; // Secure other operations
    }
  }
}
```

## 🚀 Deployment

This app is ready to be deployed on Firebase Hosting.

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase in your project**:
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project.
   - When asked for your public directory, **do not use `public`**. Next.js builds to the `.next` directory. However, Firebase's App Hosting integration with Next.js handles this automatically. This project is configured with `apphosting.yaml` for a seamless deployment experience with Firebase App Hosting.

4. **Deploy**:
   ```bash
   firebase deploy
   ```

Your portfolio will be live!
