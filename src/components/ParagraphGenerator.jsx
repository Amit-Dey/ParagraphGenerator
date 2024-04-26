import { useState } from 'react';
import './ParagraphGenerator.css';

function ParagraphGenerator() {
    const [wordCount, setWordCount] = useState(50); // Initial word count
    const [paragraph, setParagraph] = useState(''); // State to hold the generated paragraph

    // Function to generate random words
    const generateRandomWords = (numWords) => {
        const wordList = [
            'lorem',
            'ipsum',
            'dolor',
            'sit',
            'amet',
            'consectetur',
            'adipiscing',
            'elit',
            'sed',
            'do',
            'eiusmod',
            'tempor',
            'incididunt',
            'ut',
            'labore',
            'et',
            'dolore',
            'magna',
            'aliqua',
            'enim',
            'ad',
            'minim',
            'veniam',
            'quis',
            'nostrud',
            'exercitation',
            'ullamco',
            'laboris',
            'nisi',
            'aliquip',
            'ex',
            'ea',
            'commodo',
            'consequat',
            'duis',
            'aute',
            // Add more words to this list for a larger vocabulary
        ];

        let generatedWords = [];
        for (let i = 0; i < numWords; i++) {
            const randomIndex = Math.floor(Math.random() * wordList.length);
            generatedWords.push(wordList[randomIndex]);
        }
        return generatedWords.join(' ');
    };

    // Function to generate paragraph on button click
    const generateParagraph = () => {
        const newParagraph = generateRandomWords(wordCount);
        setParagraph(newParagraph);
    };

    return (
        <div className='container'>
            <label className='paraGenerator' htmlFor="wordCount">Para Generator</label>
            <span>Enter Number Of Words</span>
            <div className='inputGroup'>
                <input
                    type="number"
                    id="wordCount"
                    value={wordCount}
                    onChange={(e) => setWordCount(parseInt(e.target.value))}
                    min="10" // Minimum allowed word count
                />
                <button onClick={generateParagraph}>Generate</button>
            </div>
            {paragraph && <p>{paragraph}</p>}
            <div className='copy'
                onClick={() => {
                    navigator.clipboard.writeText(paragraph);
                }}

            >Copy</div>
        </div>
    );
}

export default ParagraphGenerator;
