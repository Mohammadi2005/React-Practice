import './App.css';
import {PostDetail} from "./reactQuery/PostDetail";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {

    const client = new QueryClient({
        defaultOptions: {
            queries: {refetchOnWindowFocus: false}
        }
    });

    return (
        <div className="App">
            <QueryClientProvider client={client}>
                <PostDetail />
            </QueryClientProvider>
        </div>
    );
}



export default App;
