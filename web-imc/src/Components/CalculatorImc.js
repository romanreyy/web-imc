import React, { useState} from "react";

export default function CalculatorImc () {
    $("input:checkbox").on('click', function() {
        var $box = $(this);
        if ($box.is(":checked")) {
          var group = "input:checkbox[name='" + $box.attr("name") + "']";
          $(group).prop("checked", false);
          $box.prop("checked", true);
        } else {
          $box.prop("checked", false);
        }
      });
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
      }; /*https://assets.yazio.com/frontend/images/icons.svg#icon-male 
      https://assets.yazio.com/frontend/images/icons.svg#icon-female 
      */ 
    return (
    <section>
    <div className="calculator"> 
            <div className="titleCalculator">
                <h1>¡CALCULE SU IMC AHORA!</h1>
            </div>
        <div className="calculatorDivAgeGender">
            <h2 className="titleSections">¿Cuál es su género?</h2>
            <div>
                <div>
                    <img className="MaleImg" src="https://assets.yazio.com/frontend/images/icons.svg#icon-male"/>
                </div>
                <div>
                    <img className="FamaleImg"  src="https://assets.yazio.com/frontend/images/icons.svg#icon-female"/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" class="radio" value="1" name="fooby[1][]"/>
                        Hombre
                    </label>
                    <label>
                        <input type="checkbox" class="radio" value="1" name="fooby[1][]" />
                        Mujer
                    </label>
                </div>
            </div>
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
        <div>
            {result && (
                <div>
                    <h1 className="result">Tu resultado</h1>
                    <div className="imc">
                        <div>
                            <div className="results">
                                Tu imc personal
                            </div>
                            <div className="results">
                                {result}
                            </div>
                        </div>
                        <div>
                            <div className="results">
                                Tu peso actual
                            </div>
                            <div className="results">
                                {weight} Kg
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
 /*
  const refIMC = useRef(null);
  const refPeso = useRef(null); 
  // Referencia a los divs de resultados

  2)    // Muestra los resultados
    setMostrarResultados(true);

    3) / Desplaza hacia abajo hasta los resultados
    if (refIMC.current && refPeso.current) {
      refIMC.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


 */ 

  /** */