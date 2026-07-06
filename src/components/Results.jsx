import UsefulPhraseCard from "./UsefulPhraseCard";

function Results({ tripData }) {
    return (
        <>
            <div className="mt-6 rounded-lg border p-4 mb-6">
                <h2>Your CultureCue Guide</h2>
                <p>Country: {tripData.country}</p>
                <p>Language: {tripData.language}</p>
                <p>Level: {tripData.level}</p>
                <p>Purpose: {tripData.purpose}</p>
            </div>
            <UsefulPhraseCard phrase="Hallo!" translation = "Hello!" ></UsefulPhraseCard>
        </>
    )
}
export default Results;