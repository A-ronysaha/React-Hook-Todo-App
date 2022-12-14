import React from "react";
import Todoitem from "./Todoitem";

export default function Todolist(props) {
 // if (props.todoTask.length) 
    return (
      <div>
        <ul className="list-group list-group-flush mb-3 ">
          {props.todoTask.map((t) => (
            <Todoitem
              id={t.id}
              work={t.task}
              key={t.id}
              done={t.completed}
              remove={props.dltTodo}
              toggleForm={props.toggle}
              editForm={props.edit}
            />
          ))}
        </ul>
      </div>
    );
   // return null;
}
