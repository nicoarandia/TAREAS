import { useState } from "react";

export default function Todo({item, onUpdate,onDelete}){

    const [isEdit, setIsEdit] = useState(false);

    //editar y agregar nueva tarea
    function FormEdit(){

        const [newValue, setNewValue] = useState(item.title);
    
        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValue(value)
        }

        function handleClickUpdateTodo(){
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return (
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input 
                type='text' 
                className="todoInput" 
                onChange={handleChange} 
                value={newValue} 
                placeholder="Ingrese actualizacion" />
                <button className="button" onClick={handleClickUpdateTodo}>Update</button>
            </form>
        )
    }
    //Elementos
    function TodoElement(){
        return(
            <div className='todoinfo'>
                <span className="todoTitle">{item.title}</span>
                    <button className="button" onClick={() => setIsEdit(true)}>Edit</button>
                    <button className="buttonDelete" onClick={(e) => onDelete(item.id) } >Delete</button>   
                </div>
        )
    }

    return(
        <div className="todo">
            {isEdit ? <FormEdit/> : <TodoElement/>} 
        </div>
    )  

}