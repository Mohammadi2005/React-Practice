import './App.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {GetUsers} from "./reactQuery/GetUsers";

const client = new QueryClient({
    defaultOptions: {
        queries: {refetchOnWindowFocus: false}
    }
});

function App() {



    return (
        <div className="App">
            <QueryClientProvider client={client}>
                <GetUsers />
            </QueryClientProvider>
        </div>
    );
}



export default App;
