import TaskList from "../component/TaskList";
import {Task} from "../data/init-data";
import {useEffect, useState} from "react";
import './Tasks.css';
import {useSelector} from "react-redux";
import {RootState} from "../features/store";
import {useQuery} from "react-query";
import {useTask} from "../features/task/hook";
import TaskForm from "../component/TaskForm";

const Tasks = () => {

    const fetchData = async () => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const response = await fetch(`${backendUrl}/task`);
        return (await response.json()) as Array<Task>;
    };

    const {isLoading, data, isError, error} = useQuery({queryKey: ['tasks'], queryFn: fetchData});

    if (isLoading) {
        return <div className="alert alert-danger">loading</div>
    }
    return <div className="tasks">
        {isError && <div className="alert alert-danger">{JSON.stringify(error)}</div>}
        {data && <TaskList tasks={data}/>}
        <TaskForm></TaskForm>
    </div>
};

export default Tasks;