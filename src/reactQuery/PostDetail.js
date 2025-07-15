import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const PostDetail = () => {
    const {data, isLoading, error, isError, refetch} = useQuery({
        queryKey: "cat",
        queryFn: () => {
            return axios.get("https://catfact.ninja/fact").then((res) => res.data)
        },
    })

    if (isLoading)
        return <div>Loading...</div>;

    if (isError)
        return <div>Something went wrong. {error.message}</div>;

    return (
        <div className="App">
            {data.fact && <p><b>fact about cat :</b> {data.fact}</p>}
            {data.length && <p><b>length :</b> {data.length}</p>}
            <button onClick={refetch}>Refetch</button>
        </div>
    )
}

