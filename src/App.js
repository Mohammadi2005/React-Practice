import './App.css';
import {useState} from "react";


function App() {

    const [name, setName] = useState('');
    const [showName, setShowName] = useState(false);

    return (
        <div className="App" >
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => setShowName(!showName)}>{!showName ? "show" : "hidden"}</button>
            {showName && <h1>name : {name}</h1>}
        </div>
    );
}



export default App;
