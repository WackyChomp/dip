import FileSaver from 'file-saver';
import { funSamplePrompts } from '../constants';

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() * funSamplePrompts.length);
    const randomPrompt = funSamplePrompts[randomIndex]

    // Prevent repeating prompts
    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}


// Saves image
export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}