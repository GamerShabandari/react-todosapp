import { useState } from "react";
import { AddTodos } from "./AddTodos";
import { Todo } from "./models/Todo";
import { PrintTodo } from "./PrintTodo";

export function Todos(){

    const [todosList, SetTodosList] = useState<Todo[]>([]);

    function toggleTodo(todoToToggle:Todo){

        todoToToggle.isDone = !todoToToggle.isDone;

        SetTodosList([...todosList]);

    }

    function save(newTodo:Todo){

        SetTodosList([...todosList, newTodo])

    }

    let todosHtml = todosList.map((todo:Todo, i:number)=>{

        return(<PrintTodo key={i} todo={todo} toggleTodo={toggleTodo}></PrintTodo>)

    });

    return(<>

    <header><h1>ToDodleDo</h1></header>
   
        <AddTodos addTodo={save}></AddTodos>
        {todosHtml}    
    </>);
};