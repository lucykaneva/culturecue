import { useEffect, useState } from "react"
function TripForm() {
  const [countries, setCountries] = useState(["Germany", "France", "Norway"])
  const [languages, setLanguages] = useState([])
  const purposes = ["Concert", "Vacation", "Family", "Business", "Family Business"]
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedPurpose, setSelectedPurpose] = useState("")
  const countryLanguages = {
  Germany: ["German", "English"],
  France: ["French", "English"],
  Norway: ["Norwegian", "English"],
  Italy: ["Italian", "English"],
  Spain: ["Spanish", "English"],
};
  const languageLevels = ["A1", "A2", "B1", "B2", "C1", "C2"]
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("")
  useEffect(() => {
  async function fetchCountries() {
    try {
      const response = await fetch("https://api.restcountries.com/countries/v5", {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_REST_COUNTRIES_API_KEY}`,
        }
      });

      console.log("Status:", response.status);

      const text = await response.text();
      console.log("Raw response:", text);

      const parsed = JSON.parse(text);

    const countryNames = parsed.data.objects.map((country) => country.names.common).sort();
    setCountries(countryNames);
    } catch (error) {
      console.error("Failed to fetch countries:", error);
    }
  }

  fetchCountries();
}, []);
  function handleCountryChange(e){
    const value = e.target.value
    setSelectedCountry(value)
    setSelectedLanguage("");
    setSelectedPurpose("");
    setSelectedLevel("");
    setLanguages(countryLanguages[value] || ["English"]);
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
            
            <select name = "levels" id = "level-select" value={selectedLevel} disabled={!selectedLanguage} onChange={(e)=> {
                setSelectedLevel(e.target.value);
                }}>
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
        <div className="flex gap-[6px]">
            <label htmlFor="purpose-select">Trip Purpose</label>
            
            <select name = "purposes" id = "purpose-select" value={selectedPurpose} disabled={!selectedCountry} onChange={(e)=> {setSelectedPurpose(e.target.value)}}>
                 <option value="">
                    Select a trip purpose
                </option>
                {
                    purposes.map((purpose,index) => {
                        return <option key = {index} value={purpose}> {purpose} </option>
                    })
                }
            </select>
        </div>

        <button disabled={!selectedCountry || !selectedLanguage || !selectedLevel || !selectedPurpose}>
            Generate Guide
        </button>
        
        

    </div>
    
    </>
  )
}

export default TripForm