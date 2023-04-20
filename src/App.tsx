import './App.css'
import {Provider} from "react-redux";
import store from "./features/store";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Tasks from "./page/Tasks";
import Header from "./component/ui/Header";
import TaskDetail from "./page/TaskDetail";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={"/task"} element={<Tasks/>}/>
                        <Route path={"/task/:id"} element={<TaskDetail/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </QueryClientProvider>
    )
}

export default App
