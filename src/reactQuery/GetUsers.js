import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const GetUsers = () => {
    const {data, isLoading,error, isError} = new useQuery({
        queryKey: "users",
        queryFn: () => {
            return axios.get("https://jsonplaceholder.typicode.com/users").then((response) => response.data)
        }
    })

    if (isLoading)
        return <div>Loading...</div>;

    if (isError)
        return <div>{error.message}</div>

    return (
        <div>
            {data?.map((user) => {
                return (
                    <p key={user.id}> Name : <b style={{color: "#911555"}}>{user.name}</b> - UserName : <b style={{color: "#911555"}}>{user.username}</b> - Email : <b style={{color: "#911555"}}>{user.email}</b></p>
                )
            })}

        </div>
    )
}