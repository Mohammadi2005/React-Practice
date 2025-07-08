import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [text, setText] = useState('');
    const [light, setLight] = useState(false);



    return (
        <div className={light ? 'light' : 'dark'} >
            <br/>
            <input type="text" placeholder="Enter text" onChange={e => setText(e.target.value)}/>
            <h1>length : {text.length}</h1><br/>
            {text && <h1>text : {text}</h1>}
            <button onClick={() => setLight(!light)}>{light ? 'Dark' : 'Light'}</button>
        </div>
    );
}

export default App;
