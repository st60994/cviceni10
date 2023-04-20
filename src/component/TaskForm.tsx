import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";

const resolver = yupResolver(yup.object({
    "title": yup.string()
        .max(128, "Maximalne 128 znaku")
        .required("Toto pole je povinne")
}));

interface FormValues {
    title: string;
}

const TaskForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({resolver})

    const submitHandle = (data: FormValues) => {
        console.table(data);
    }

    return <>
        <h1>Novy task</h1>
        <form onSubmit={handleSubmit(submitHandle)}>
            <input {...register("title")}/>
            {errors.title && <p>{errors.title.message}</p>}

            <button type="submit">Odeslat</button>
        </form>
    </>
}

export default TaskForm;