import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import "../App.css"
import { PasswordStrength } from "./PasswordStrength"
import { CopyPassword } from "./CopyPassword"

export function PasswordInput(){
        const [password, setPassword] = useState("")
        const [showPassword, setShowPassword] = useState(false)

return(
    <div className="Input_Container">
        <input type={showPassword ? "text": "password"} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Ingrese una contraseña"/>
        
        <div className="Button_Container">
            <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>} 
            </button>

            <CopyPassword password={password}/>
        </div>
        <PasswordStrength password={password} />
    </div>
)
}
