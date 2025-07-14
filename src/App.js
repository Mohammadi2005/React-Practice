import './App.css';
import {Person} from "./propTypes/Person";


function App() {

    return (
        <div className="App" >
            <Person name={"ali"} email={"ali@gmail.com"} age={20} isMarried={false} courses={["C", "C++"]} />
        </div>
    );
}

export default App;
