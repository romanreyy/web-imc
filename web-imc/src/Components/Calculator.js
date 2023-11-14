import { Component } from "react";

class CalculatorImc extends Component {
    constructor(props) {
        super(props);
        this.state = {
          age: '',
          heightCm: '',
          weoghtKg: '',
          gender: '',
        };
      }

    calculateImc = () => {
        const { age, heightCm, weightKg, gender } = this.state;
        const heightMetros = heightCm / 100;
        const imc = weightKg / (heightMetros * heightMetros);
    }

    render () {
    return (
    <section>
    <div className="calculator"> 
            <div className="titleCalculator">
                <h1>¡CALCULE SU IMC AHORA!</h1>
            </div>
        <div className="calculatorDivAgeGender">
            <h2 className="titleSections">¿Cuál es su género?</h2>
            <select className="selectGen" value={this.state.gender} onChange={(e) => this.setState({ gender: e.target.value })}>
                <option>Seleccione su género</option>
                <option>Hombre</option>
                <option>Mujer</option>
            </select>
        </div> 
        <div className="calculatorDivAgeGender">
            <h2 className="titleSections">¿Cuántos años tienes? </h2>
            <input  className="insertAge" type='tel' data-decimals="false" placeholder="21" maxLength="3" pattern="[0-9]*" value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })}/> 
            <label for="insertAge">
                <span>Años</span>
            </label>
        </div>
        <div className="calculatorDivWeightHeight">
            <h2 className="titleSections">¿Cuanto mides?</h2>
            <input className="insertWeight" type="tel" data-decimals="false" placeholder="170" maxLength="3" pattern="[0-9]*" value={this.state.heightCm} onChange={(e) => this.setState({ heightCm: e.target.value })}/>
            <label for="insertWeight">
                <span>Cm</span>
            </label>
        </div>
        <div className="calculatorDivWeightHeight">
            <h2 className="titleSections">¿Cual es su peso?</h2>
            <input className="insertHeight" type="tel" data-decimals="false" placeholder="71" maxLength="3" pattern="[0-9]*" value={this.state.weightKg} onChange={(e) => this.setState({ weightKg: e.target.value })}/>
            <label for="insertHeight">
                <span>Kg</span>
            </label>    
        </div> 
            <button className="buttonCalculate" onClick={this.calculateImc}>
                Calcular IMC
            </button>
    </div>
    </section>
    );
    }
}

export default CalculatorImc;