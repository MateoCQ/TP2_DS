import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import "../App.css"
import { PasswordStrength } from "./PasswordStrength"

export function PasswordInput(){
        const [password, setPassword] = useState("")
        const [showPassword, setShowPassword] = useState(false)

return(
    <div className="Input_Container">
        <input type={showPassword ? "text": "password"} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Ingrese una contraseña"/>
        
        <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>} 
        </button>

        <PasswordStrength password={password} />
    </div>
)
}
