import './App.css';
import {useState} from "react";
import {createContext, useContext} from "react";

const MyContext = createContext()


function App() {

    const [count, setCount] = useState(0);

    return (
        <div className="App" >
            <MyContext.Provider value={{count, setCount}}>
                <Counter/>
            </MyContext.Provider>
        </div>
    );
}

function Counter() {
    const {count, setCount }= useContext(MyContext)
    return (
        <div className="Counter">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    )
}

export default App;
