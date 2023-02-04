import { funSamplePrompts } from '../constants';

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() * funSamplePrompts.length);
    const randomPrompt = funSamplePrompts[randomIndex]

    // Prevent repeating prompts
    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}