export default function Question2Imc () {
    return (
        <div className="Questions">
            <h1>Correcciones al índice por edad y sexo</h1>

            <p className="Answer">
            Hay que destacar que no se pueden aplicar los mismos valores de IMC en niños y adolescentes debido a su constante aumento de estatura y desarrollo corporal, por lo que se obtiene un IMC respecto a su edad y sexo. <hr />
            Por ello, primero se deberá contar con la fecha de nacimiento y de medición para obtener la edad calculada y así ser más precisos al categorizar a este grupo de edad. <hr />
            Después se calculará el IMC con la misma fórmula que para el adulto, y después de calcularse el IMC para este grupo de edad, el valor del IMC se comparará en tablas de crecimiento del CDC para el IMC por edad tanto para niños y niñas respectivamente para obtener la categoría del percentil. Dichos percentiles son una medida de dispersión que se utiliza con más frecuencia para evaluar el tamaño y los patrones de crecimiento de cada niño en los Estados Unidos, debido a que son menos susceptibles a presentar valores extremos y por lo tanto errores en los rangos de valores. <hr /> 
            El percentil indica la posición relativa del número del IMC del niño entre niños del mismo sexo y edad. Las tablas de crecimiento muestran las categorías del nivel de peso que se usan con niños y adolescentes (bajo peso, peso saludable, sobrepeso y obeso).    
            </p>

        </div>
    );
}