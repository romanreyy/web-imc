import { Link } from "react-router-dom"

export default function List () {
    return (
        <div className="List">
            <Link to='/question1'>
                <h3>¿Cómo calcular el IMC?</h3>
            </Link>

            <Link to='question2'>
                <h3>Correcciones al índice por edad y sexo</h3>
            </Link>

            <Link to='question3'>
                <h3>No diferencia entre masa muscular y masa grasa</h3>
            </Link>

            <Link to='question4'>
                <h3>Escala</h3>
            </Link>

            <Link to='question5'>
                <h3>Variación en relación con la salud</h3>
            </Link>

        </div>
    );
}
