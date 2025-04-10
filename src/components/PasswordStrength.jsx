import { PasswordInput } from "./PasswordInput"
import "../App.css"
import { useEffect } from "react"
import { useState } from "react"

export function PasswordStrength({password}){
    const [strength, setStrength] = useState("")

    useEffect(()=>{
        if(!password){
            setStrength("")
            return
        }

        const length = password.length
        const hasUpperCase = /[A-Z]/.test(password)
        const hasLowerCase = /[a-z]/.test(password)
        const hasNumbers = /[0-9]/.test(password)
        const hasSymbols = /[^a-zA-Z0-9\s]/.test(password)

        let strengthLevel = 0
        if(length >= 8) strengthLevel++
        if(hasLowerCase && hasUpperCase) strengthLevel++
        if(hasNumbers) strengthLevel++
        if(hasSymbols) strengthLevel++

        switch (strengthLevel){
            case 0:
            case 1:
                setStrength("Poco Segura")
                break
            case 2: 
                setStrength("Segura")
                break
            case 3:
            case 4:
                setStrength("Muy Segura")
                break
            default:
                setStrength("")
        }
    },[password])

    let strengthClass = ""
    if(strength === "Poco Segura"){
        strengthClass = "poco-segura"
    }else if(strength === "Segura"){
        strengthClass = "segura"
    }else if(strength === "Muy Segura"){
        strengthClass = "muy-segura"
    }

    return(
        <div className={`password-strength ${strengthClass}`}>
            {strength && `Contraseña: ${strength}`}
        </div>
    )
}   