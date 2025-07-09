import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useEffect, useState} from "react";

function App() {
    // "https://jsonplaceholder.typicode.com/users"

    const [users, setUsers] = useState([]);

    function getUsers() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
                console.log(response.data[0].name);
                // console.log(users[0].name);
            })
    }

    function DeleteUser(id) {
        const newUsers = users.filter(user => user.id !== id)
        setUsers(newUsers);
    }

    return (
        <div className="App" >
            <button onClick={getUsers}>get Data</button>
            <ShowUsers users={users} DeleteUser={DeleteUser}/>
        </div>
    );
}

function ShowUsers(props) {
    return (
        <div>
            {props.users.map((user) => {
                return (
                    <div key={`div-${user.id}`}>
                        {user.name && <h2 key={`name-${user.id}`}>{user.id} _ {user.name}</h2>}
                        {user.name && <button key={`btn-${user.id}`} onClick={() => props.DeleteUser(user.id)}>Delete {user.name}</button>}
                    </div>
                )
            })}
        </div>
    )
}


export default App;
