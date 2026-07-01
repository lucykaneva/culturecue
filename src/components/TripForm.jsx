import { useState } from "react"
function TripForm() {
  const [countries, setCountries] = useState(["Germany", "France", "Norway"])
  const [languages, setLanguages] = useState([])
  const [selectedCountry, setSelectedCountry] = useState("")
  const languageLevels = ["A1", "A2", "B1", "B2", "C1", "C2"]
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("")
  function handleCountryChange(e){
    const value = e.target.value
    setSelectedCountry(value)
    setSelectedLanguage("");
    setSelectedLevel("");
    if (value =="Germany"){
        setLanguages(["German", "English"])
    }
    else{
        setLanguages(["French"])
    }
  }
  
  return (
    <>
    <div className = "flex flex-col gap-[6px]"> 
        <div className = "flex gap-[6px]">
            <label htmlFor="countries-select">Travel Country</label>
            <select name = "countries" id = "countries-select" value={selectedCountry} onChange={handleCountryChange}>
                <option value="">
                    Select a country
                </option>
                {
                    countries.map((country,index) => {
                        return <option key = {index} value={country}> {country} </option>
                    })
                }
            </select>
        </div>
        <div className="flex gap-[6px]">
            <label htmlFor="language-select">Languages</label>
            
            <select name = "languages" id = "language-select" value={selectedLanguage}  disabled={!selectedCountry} 
            onChange={(e)=> {
                    setSelectedLanguage(e.target.value);
                    setSelectedLevel("");
                }
            }>
                 <option value="">
                    Select a language
                </option>
                {
                    languages.map((language,index) => {
                        return <option key = {index} value={language}> {language} </option>
                    })
                }
            </select>
        </div>
        <div className="flex gap-[6px]">
            <label htmlFor="language-select">Language Level</label>
            
            <select name = "levels" id = "level-select" value={selectedLevel} disabled={!selectedLanguage} onChange={(e)=> {setSelectedLevel(e.target.value)}}>
                 <option value="">
                    Select a language level
                </option>
                {
                    languageLevels.map((level,index) => {
                        return <option key = {index} value={level}> {level} </option>
                    })
                }
            </select>
        </div>
        
        

    </div>
    
    </>
  )
}

export default TripForm