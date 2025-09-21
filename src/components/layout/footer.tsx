export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto py-6 px-4 md:px-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Vijayaragavan. All rights reserved.</p>
      </div>
    </footer>
  );
}
