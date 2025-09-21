'use server';

/**
 * @fileOverview This flow enhances contact icons with visual effects like glow and float.
 *
 * - enhanceContactIcons - Enhances contact icons with visual effects.
 * - EnhanceContactIconsInput - The input type for the enhanceContactIcons function.
 * - EnhanceContactIconsOutput - The return type for the enhanceContactIcons function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const EnhanceContactIconsInputSchema = z.object({
  iconType: z
    .string()
    .describe('The type of contact icon to enhance (e.g., LinkedIn, GitHub, Instagram).'),
  iconDataUri: z
    .string()
    .describe(
      "The contact icon as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type EnhanceContactIconsInput = z.infer<typeof EnhanceContactIconsInputSchema>;

const EnhanceContactIconsOutputSchema = z.object({
  enhancedIconDataUri: z
    .string()
    .describe(
      'The enhanced contact icon as a data URI with visual effects (glow, float).'
    ),
});
export type EnhanceContactIconsOutput = z.infer<typeof EnhanceContactIconsOutputSchema>;

export async function enhanceContactIcons(input: EnhanceContactIconsInput): Promise<EnhanceContactIconsOutput> {
  return enhanceContactIconsFlow(input);
}

const enhanceContactIconsPrompt = ai.definePrompt({
  name: 'enhanceContactIconsPrompt',
  input: {schema: EnhanceContactIconsInputSchema},
  output: {schema: EnhanceContactIconsOutputSchema},
  prompt: `You are an expert designer specializing in enhancing icons with visual effects.

  Given the type and the raw icon, generate an enhanced version of the icon with visual effects like glow and float to improve its visual appeal and user engagement.

  Type: {{{iconType}}}
  Original Icon: {{media url=iconDataUri}}

  Return the enhanced icon as a data URI.
  `,
});

const enhanceContactIconsFlow = ai.defineFlow(
  {
    name: 'enhanceContactIconsFlow',
    inputSchema: EnhanceContactIconsInputSchema,
    outputSchema: EnhanceContactIconsOutputSchema,
  },
  async input => {
    const {output} = await enhanceContactIconsPrompt(input);
    return output!;
  }
);
