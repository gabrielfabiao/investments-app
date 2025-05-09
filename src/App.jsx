import { useState } from "react"
import Header from "./components/Header"
import InputsBox from "./components/InputsBox"
import Results from "./components/Results"


function App() {

  const [userInputs, setUserInputs] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

  const inputIsValid = userInputs.duration >= 1

  function handleChange(inputIdentifier, newValue) {
        setUserInputs(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        })
    }

  return (
    <>
    <Header/>
    <InputsBox userInputs={userInputs} onChange={handleChange} />
    {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}
    {inputIsValid && <Results input={userInputs} />}
    </>
    )
}

export default App
