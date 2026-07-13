import UsefulPhraseCard from "./UsefulPhraseCard";
import { useEffect, useState } from "react"

function Results({ tripData }) {
    const phrases = [
        {
            original: "Hallo!",
            translation: "Hello!",
        },
        {
            original: "Danke!",
            translation: "Thank you!",
        },
        {
            original: "Entschuldigung.",
            translation: "Excuse me.",
        },
        {
            original: "Wo ist der Bahnhof?",
            translation: "Where is the train station?",
        },
    ];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const currentPhrase = phrases[currentPhraseIndex];
    return (
        <>
            <div className="mt-6 rounded-lg border p-4 mb-6">
                <h2>Your CultureCue Guide</h2>
                <p>Country: {tripData.country}</p>
                <p>Language: {tripData.language}</p>
                <p>Level: {tripData.level}</p>
                <p>Purpose: {tripData.purpose}</p>
            </div>
            <UsefulPhraseCard 
                phrase={currentPhrase.original} 
                translation={currentPhrase.translation} 
                current={currentPhraseIndex + 1}
                total={phrases.length}
                onBack={() => setCurrentPhraseIndex((index) => index - 1)}
                onNext={() => setCurrentPhraseIndex((index) => index + 1)}
                onListen={() => {
                    const utterance = new SpeechSynthesisUtterance(currentPhrase.original);
                    window.speechSynthesis.speak(utterance);
                }}
                isFirst={currentPhraseIndex === 0}
                isLast={currentPhraseIndex === phrases.length - 1} ></UsefulPhraseCard>
        </>
    )
}

export default Results;