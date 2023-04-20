import {useEffect, useState} from "react";
import {Task} from "../../data/init-data";

export const useTask = (isLoggedIn: boolean) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(false);

    useEffect(() => {
        console.log("123")
        if (isLoggedIn) {
            setLoading(true);
            fetchData();
        }
    }, [isLoggedIn]);

    const fetchData = async () => {
        const backendUrl = "http://localhost:9000/api/v1";
        let response = null;

        try {
            response = await fetch(`${backendUrl}/task`);
        } catch (e: any) {
            setError(e.message);
            setTasks([]);
        }

        setLoading(false);
        if (response && response.ok) {
            const tasks = await response.json();
            setTasks(tasks);
        }
    };

    return {error, loading, tasks};
}