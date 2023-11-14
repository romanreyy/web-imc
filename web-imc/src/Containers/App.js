import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import NavBar from '../Components/NaBar';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import DropDownMenu from '../Components/dropDownMenu';


export default function App (){
    return (
        <div>
            <NavBar />
            <DropDownMenu />
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/question1' element={<Question1/>}/>
                <Route path='/question2' element={<Question2 />} />
                <Route path='/question3' element={<Question3 />} />
                <Route path='/question4' element={<Question4 />} />
                <Route path='/question5' element={<Question5 />} />
            </Routes>
        </div>
    );
}


