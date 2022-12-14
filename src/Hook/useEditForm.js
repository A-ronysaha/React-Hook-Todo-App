import React from "react";
import useInput from "./useInput";

export default function EditForm({editTodo,editId,editTask,toggleDone}) {
  const [editValue, handleChange, reset] = useInput(editTask);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editTodo(editId,editValue);
          reset();
          toggleDone()
          
        }}
      >
        <textarea value={editValue} onChange={handleChange} />
        <button>
          {" "}
          <i className="fas fa-check" />
        </button>
      </form>
    </div>
  );
}
