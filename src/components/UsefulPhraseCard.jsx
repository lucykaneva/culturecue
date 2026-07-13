import { Volume2 } from 'lucide-react';
function UsefulPhraseCard({phrase, translation, current, total, onBack, onNext, onListen, isFirst, isLast}) {
    return (
        <>
            <div className="max-w-lg min-h-[320px] space-y-7 border-gray-200 shadow-sm rounded-3xl border p-8">
                <h2 className = "text-4xl font-semibold">{phrase}</h2>
                <h4 className = "text-lg text-gray-500">{translation}</h4>
                <button onClick = {onListen} className = " hover:bg-[#313315] transition-colors duration-200 flex h-10 w-36 items-center justify-center gap-2 rounded-lg bg-[#41431B] text-white"> 
                    <Volume2 size={18}></Volume2>
                    Listen 
                </button>
                <div className = "flex gap-6">
                    <button onClick = {onBack} disabled = {isFirst} className = "hover:bg-[#AEB784] hover:text-white transition-colors duration-200 flex h-10 w-28 items-center justify-center rounded-lg text-[#41431B] bg-white border border-[#AEB784] disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:hover:bg-gray-100 disabled:hover:text-gray-400"> ← Back </button>
                    <button onClick = {onNext} disabled = {isLast} className = "hover:bg-[#AEB784] hover:text-white transition-colors duration-200 flex h-10 w-28 items-center justify-center rounded-lg text-[#41431B] bg-white border border-[#AEB784] disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:hover:bg-gray-100 disabled:hover:text-gray-400"> Next →</button>
                </div>
                <div className="text-sm text-gray-500">
                    Phrase {current} of {total}
                </div>
            </div>
        </>
    )
}
export default UsefulPhraseCard;