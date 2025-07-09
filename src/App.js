import './App.css';
import {Cat} from './pages/cat'
import {Home} from './pages/home'
import {Dog} from './pages/dog'
import {Horse} from './pages/horse'
import {Error} from './pages/Error'
import {Route, Routes, Link, BrowserRouter as Router} from 'react-router-dom'



function App() {

    return (
        <div className="App" >
            <Router>
                <div style={{backgroundColor:'#f0c444' , fontSize: "40px", padding : "9px"}}>
                    <Link to="/">Home</Link><br/>
                    <Link to="/cat">Cat</Link><br/>
                    <Link to="/dog">Dog</Link><br/>
                    <Link to="/horse">Horse</Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cat" element={<Cat/>}/>
                    <Route path="/dog" element={<Dog/>}/>
                    <Route path="/horse" element={<Horse/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </Router>
        </div>
    );
}




export default App;
