import React from "react";
import useToggle from "../Hook/useToggle";
import EditForm from "../Hook/useEditForm";

export default function Todoitem(props) {
  const [isEdditing, toggleForm] = useToggle(false);
  return (
    <div>
      <section>
        {isEdditing ? (
          <EditForm editTodo={props.editForm} editId={props.id} editTask={props.work} toggleDone={toggleForm} />
        ) : (
          <li
            className="list-group-item text-break"
            style={{ textDecoration: props.done ? "line-through" : null }}
          >
            <input className="position-absolute top-50 start-0"
              value={props.done}
              type="checkbox"
              onClick={() => {
                props.toggleForm(props.id);
              }}
            />
            {props.work}
            <i
              className="fas fa-solid fa-trash position-absolute top-50 end-0"
              onClick={() => {
                props.remove(props.id);
              }}
            />
            <i className="fas fa-edit position-absolute top-0 end-0" onClick={toggleForm}/>
          </li>
        )}
      </section>
    </div>
  );
}
