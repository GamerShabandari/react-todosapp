import { ChangeEvent, useState } from "react"
import { Todo } from "./models/Todo";

interface IAddTodo{
    addTodo(todo:Todo):void;
}

export function AddTodos (props: IAddTodo){

    const[userInput, SetUserInput] = useState("");

    function handleChange(e: ChangeEvent<HTMLInputElement>){

        SetUserInput(e.target.value)

    }

    function handleClick(){

        let newTodo = new Todo(userInput);
        props.addTodo(newTodo)
        SetUserInput("")

    }

    return (<>

        <div>
            <input type="text" onChange={handleChange} value={userInput} />
            <button onClick={handleClick}>Spara</button>
        </div>

    </>)
}