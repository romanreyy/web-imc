import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import NavBar from '../Components/NaBar';
import Question1Imc from './ListImc.js/Question1Imc';
import Question2Imc from './ListImc.js/Question2Imc';
import Question3Imc from './ListImc.js/Question3Imc';
import Question4Imc from './ListImc.js/Question4Imc';
import Question5Imc from './ListImc.js/Question5Imc';
import DropDownMenu from '../Components/dropDownMenu';
import Question1Calories from './ListCalories.js/Question1Calories';
import Question2Calories from './ListCalories.js/Question2Calories';
import Question3Calories from './ListCalories.js/Question3Calories';
import Question4Calories from './ListCalories.js/Question4Calories';


export default function App (){
    return (
        <div>
            <NavBar />
            <DropDownMenu />
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/question1Imc' element={<Question1Imc/>}/>
                <Route path='/question2Imc' element={<Question2Imc />} />
                <Route path='/question3Imc' element={<Question3Imc />} />
                <Route path='/question4Imc' element={<Question4Imc />} />
                <Route path='/question5Imc' element={<Question5Imc />} />
                <Route path='/question1Calories' element={<Question1Calories />} />
                <Route path='/question2Calories' element={<Question2Calories />} />
                <Route path='/question3Calories' element={<Question3Calories />} />
                <Route path='/question4Calories' element={<Question4Calories />} />
            </Routes>
        </div>
    );
}


