export default function Calculator () {
    return (
        <div className="calculator">
            <h1>CALCULAR IMC</h1>
            <p>Para un calculo correcto necesitamos algo de informacion basica sobre ti.</p>
            <div className="gender">
                <h2>¿Cuál es tu genero?</h2>
                <button className="manCalculator"> Hombre </button>
                <button className="womanCalculator"> Mujer</button>
            </div> 
            <div className="age">
                <h2>¿Cuántos años tienes? </h2>
                <input  className="insertAge" type="number" placeholder="21" maxlenght="3" /> 
                <label for="insertAge">
                    <span>años</span>
                </label>
            </div>
            <div className="weight">
                <h2>¿Cual es su estatura?</h2>
                <input className="insertWeight" type="number" placeholder="170" maxlenght="3"/>
                <label for="insertWeight">
                    <span>cm</span>
                </label>
            </div>
            <div className="height">
            <h2>¿Cual es su peso?</h2>
                <input className="insertHeight" type="number" placeholder="70" maxlenght="3"/>
                <label for="insertHeight">
                    <span>kg</span>
                </label>
                
            </div> 
            <button className="buttonCalculate">
                Calcular IMC
            </button>
        </div>
    );
}