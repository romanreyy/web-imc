import React, { Component } from 'react';
import CalculatorImc from '../Components/Calculator';

class ShowResultsImc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultImc: null,
    };
  }

  handleCalculteImc = (data) => {
    this.setState({ resultImc: data });
  };

  render() {
    return (
      <div>
        <h1>Calculadora de IMC</h1>
        {this.state.resultImc && (
          <div>
            <h2>Resultado del IMC:</h2>
            <p>Edad: {this.state.resultImc.age}</p>
            <p>Altura: {this.state.resultadoIMC.heightCm} cm</p>
            <p>Peso: {this.state.resultImc.weightKg} kg</p>
            <p>Género: {this.state.resultImc.gender}</p>
            <p>IMC: {this.state.resultImc.imc.toFixed(2)}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ShowResultsImc;