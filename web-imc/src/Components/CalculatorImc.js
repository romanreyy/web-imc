import React, { useState, useRef} from "react";

export default function CalculatorImc () {
    const resultsRef = useRef(null);
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [result, setResult] = useState(null);

    const calculateImc = () => {
        if (age && height && weight) {
          const heightInMeters = height / 100;
    
          const imc = (weight / (heightInMeters * heightInMeters)).toFixed(2);
          setResult(imc);
        } else {
          setResult(null);
        }
        if (resultsRef.current) {
            resultsRef.current.scrollIntoView({ behavior: 'smooth' });
          }
      };
    return (
    <section>
    <div className="calculator"> 
            <div className="titleCalculator">
                <h1>¡CALCULE SU IMC AHORA!</h1>
            </div>
        <div className="calculatorDivAgeGender">
            <h2 className="titleSections">¿Cuál es su género?</h2>
            <select className="selectGen" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option>Seleccione su género</option>
                <option>Hombre</option>
                <option>Mujer</option>
            </select>
        </div> 
        <div className="calculatorDivAgeGender">
            <h2 className="titleSections">¿Cuántos años tienes? </h2>
            <input  
            className="insertAge" 
            type='tel' 
            data-decimals="false" 
            placeholder="21" 
            maxLength="3" 
            pattern="[0-9]*" 
            value={age} onChange={(e) => setAge(e.target.value)} 
            onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
            }
            }}/> 
            <label for="insertAge">
                <span>Años</span>
            </label>
        </div>
        <div className="calculatorDivWeightHeight">
            <h2 className="titleSections">¿Cuanto mides?</h2>
            <input 
            className="insertWeight" 
            type="tel" 
            data-decimals="false" 
            placeholder="170" 
            maxLength="3" 
            pattern="[0-9]*" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)}
            onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <label for="insertWeight">
                <span>Cm</span>
            </label>
        </div>
        <div className="calculatorDivWeightHeight">
            <h2 className="titleSections">¿Cual es su peso?</h2>
            <input 
            className="insertHeight" 
            type="tel" 
            data-decimals="false" 
            placeholder="71" 
            maxLength="3" 
            pattern="[0-9]*" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)}
            onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <label for="insertHeight">
                <span>Kg</span>
            </label>    
        </div> 
            <button className="buttonCalculate" onClick={calculateImc}>
                Calcular IMC
            </button>
        <div ref={resultsRef}>
            {result && (
                <div>
                    <h1 className="result">Tu resultado</h1>
                    <div className="imc">
                        <div>
                            <div>
                                Tu imc personal
                            </div>
                            <div>
                                {result}
                            </div>
                        </div>
                        <div>
                            <div className="">
                                Tu peso actual
                            </div>
                            <div>
                                {weight}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
    </section>
    );
}
