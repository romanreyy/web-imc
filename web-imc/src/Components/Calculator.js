export default function Calculator () {
    return (
    <section>
    <div className="calculator"> 
            <div className="titleCalculator">
                <h1>¡CALCULE SU IMC AHORA!</h1>
            </div>
        <div className="calculatorDivAgeGender">
            <h2 className="titleSections">¿Cuál es su género?</h2>
            <select className="selectGen">
                <option>Seleccione su género</option>
                <option>Hombre</option>
                <option>Mujer</option>
            </select>
        </div> 
        <div className="calculatorDivAgeGender">
            <h2 className="titleSections">¿Cuántos años tienes? </h2>
            <input  className="insertAge" type='tel' data-decimals="false" placeholder="21" maxlength="3" pattern="[0-9]*" /> 
            <label for="insertAge">
                <span>Años</span>
            </label>
        </div>
        <div className="calculatorDivWeightHeight">
            <h2 className="titleSections">¿Cuanto mides?</h2>
            <input className="insertWeight" type="tel" data-decimals="false" placeholder="170" maxlength="3" pattern="[0-9]*" required/>
            <label for="insertWeight">
                <span>CM</span>
            </label>
        </div>
        <div className="calculatorDivWeightHeight">
            <h2 className="titleSections">¿Cual es su peso?</h2>
            <input className="insertHeight" type="tel" data-decimals="false" placeholder="71" maxlength="3" pattern="[0-9]*" required/>
            <label for="insertHeight">
                <span>Kg</span>
            </label>    
        </div> 
            <button className="buttonCalculate">
                Calcular IMC
            </button>
    </div>
    </section>
    );
}