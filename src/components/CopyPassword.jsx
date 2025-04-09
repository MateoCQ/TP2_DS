import { useState } from "react"
import { PasswordInput } from "./PasswordInput"
import "../App.css"
import { Copy } from "lucide-react"

export function CopyPassword({password}){
    const [showNotification, setShowNotification] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(password)
        setShowNotification(true)

        setTimeout(() => {
            setShowNotification(false)
        }, 3000)
    }

    return(
        <div>
            <button onClick={handleCopy} disabled={!password}>
                <Copy size={20} />
            </button>

            {showNotification && (
                <div className="Notification">
                    <p>
                        ¡Contraseña copiada al portapapeles!
                    </p>
                </div>
            )}
        </div>
    )
}