import { useState } from 'react';
import { Eye, EyeOff, Settings } from 'lucide-react';
import '../App.css';
import { PasswordStrength } from './PasswordStrength';
import { CopyPassword } from './CopyPassword';

const generateRandomPassword = (length = 8, includeLower = true, includeUpper = true, includeNumbers = true, includeSymbols = false) => {
  const lowerChars = "abcdefghijklmnopqrstuvwxyz"
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numberChars = "0123456789"
  const symbolChars = "!@#$%^&*()_+=-`~[]\\{}|;\':,./<>?"

  let allowedChars = ""
  if (includeLower) allowedChars += lowerChars
  if (includeUpper) allowedChars += upperChars
  if (includeNumbers) allowedChars += numberChars
  if (includeSymbols) allowedChars += symbolChars

  if (!allowedChars) return ""

  let password = ""
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length)
    password += allowedChars[randomIndex]
  }

  return password
}

export function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showAdvancedPanel, setShowAdvancedPanel] = useState(false)
  const [passwordLength, setPasswordLength] = useState(8)
  const [includeLower, setIncludeLower] = useState(true)
  const [includeUpper, setIncludeUpper] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const handleGeneratePassword = () => {
    setPassword(
      generateRandomPassword(
        showAdvancedPanel ? passwordLength : 8,
        showAdvancedPanel ? includeLower : true,
        showAdvancedPanel ? includeUpper : true,
        showAdvancedPanel ? includeNumbers : true,
        showAdvancedPanel ? includeSymbols : false
      )
    )
  }

  return (
    <div className="Items">
      <div className="Input_Container">
        <input type={showPassword ? "text" : "password"} value={password} readOnly placeholder="Contraseña generada"/>
        <div className="Button_Container">
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          <CopyPassword password={password}/>
          <button onClick={() => setShowAdvancedPanel(!showAdvancedPanel)}>
          <Settings size={20} />
        </button>
        </div>
      </div>

      <div className="Generator">
        <button onClick={handleGeneratePassword}>Generar Contraseña {showAdvancedPanel ? "con Opciones" : ""}</button>
      </div>

      {showAdvancedPanel && (
        <div className="Advanced">
          <h3>Configuración Avanzada</h3>
          <div className="Container_Fila">
            <label>Largo:</label>
            <input
              type="number"
              value={passwordLength}
              onChange={(e) => setPasswordLength(parseInt(e.target.value, 10) || 0)}
              min="1"
            />
          </div>
          <div className="Container_Fila">
            <label>Incluir minúsculas:</label>
            <input
              type="checkbox"
              checked={includeLower}
              onChange={(e) => setIncludeLower(e.target.checked)}
            />
          </div>
          <div className="Container_Fila">
            <label>Incluir mayúsculas:</label>
            <input
              type="checkbox"
              checked={includeUpper}
              onChange={(e) => setIncludeUpper(e.target.checked)}
            />
          </div>
          <div className="Container_Fila">
            <label>Incluir números:</label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
          </div>
          <div className="Container_Fila">
            <label>Incluir símbolos:</label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          </div>
        </div>
      )}

      {password && <PasswordStrength password={password} />}
    </div>
  );
}