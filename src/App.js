import './App.css';
import {useState} from "react";
import axios from "axios";


function App() {

    const [users, setUsers] = useState([]);
    const [names, setNames] = useState([]);

    function getUsers() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
                console.log(response.data);
                response.data.forEach(user => {
                    console.log(user.name);
                })
            })
    }

    function Delete(id){
        let newUsers = users.filter((user) => user.id !== id)
        setUsers(newUsers);
    }

    return (
        <div className="App" >
            <button onClick={getUsers} >Get Started</button>
            <ShowName users={users} Delete={Delete} />
        </div>
    );
}

function ShowName(props) {
    return (
        <div className="App">
            {props.users.map((user) => {
                return (
                    <div key={`div-${user.id}`}>
                        <h3>{user.id} - {user.name}</h3>
                        <button onClick={() => props.Delete(user.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default App;
