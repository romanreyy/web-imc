export default function Calculator () {
    return (
    <section>
    <div className="calculator">
            <div className="titleCalculator">
                <h1>CALCULAR IMC</h1>
            </div>
        <div className="calculatorDivAgeGender">
            <h2 className="titleSections">¿Cuál es tu genero?</h2>
            <select className="selectGen">
                <option>seleccione su genero</option>
                <option>Hombre</option>
                <option>Mujer</option>
            </select>
            {/* <div className="manCalculator">
                <img className="imgMan" src="https://static.vecteezy.com/system/resources/previews/002/606/124/non_2x/male-symbol-icon-free-vector.jpg"/>
                <div>Hombre</div>
            </div>
            <img className="imgWoman" src="https://media.istockphoto.com/id/1300219183/es/vector/icono-de-accesibilidad-para-el-ba%C3%B1o-de-mujeres.jpg?s=612x612&w=0&k=20&c=00muqxVD0v_fo2JfRKPcZeCoBBtqMe_XhdjexyJRotE="/> */}
        </div> 
        <div className="calculatorDivAgeGender">
            <h2 className="titleSections">¿Cuántos años tienes? </h2>
            <input  className="insertAge" type="tel" data-decimals="false" placeholder="21" maxlength="3" pattern="[0-9]*" /> 
            <label for="insertAge">
                <span>años</span>
            </label>
        </div>
        <div className="calculatorDivWeightHeight">
            <h2 className="titleSections">¿Cual es su estatura?</h2>
            <input className="insertWeight" type="tel" data-decimals="false" placeholder="170" maxlength="3" pattern="[0-9]*" />
            <label for="insertWeight">
                <span>cm</span>
            </label>
        </div>
        <div className="calculatorDivWeightHeight">
            <h2 className="titleSections">¿Cual es su peso?</h2>
            <input className="insertHeight" type="tel" data-decimals="false" placeholder="71" maxlength="3" pattern="[0-9]*" />
            <label for="insertHeight">
                <span>kg</span>
            </label>    
        </div> 
            <button className="buttonCalculate">
                Calcular IMC
            </button>
    </div>
    </section>
    );
}