import './App.css';
import {createContext, useContext, useState} from 'react'

const ThemeContext = createContext()


function App() {

    const [themeColor, setThemeColor] = useState("#326533")

    return (
        <div className="App"  style={{width: '100%', height: '100%'}}>
            <ThemeContext.Provider value={{themeColor, setThemeColor}}>
                <MyPage/>
            </ThemeContext.Provider>
        </div>
    );
}

function MyPage() {
    const {themeColor, setThemeColor} = useContext(ThemeContext)
    return (
        <div className="App" style={{backgroundColor: themeColor, padding: "20px", height: '549px'}}>
            <h1>my page</h1>
            <p>you can written your favorite color code in box </p>
            <input onChange={(e) => setThemeColor(`#${e.target.value}`)} />
        </div>
    )
}

export default App;
