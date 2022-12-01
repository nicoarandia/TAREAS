import React,{useState} from "react";
import Todo from "./todo";

//Importamos los estilos
import '../style/todoapp.css'

export default function TodoApp() {
    
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([]);

    //funcion cambiar valor
    function handleChange(e){
        const value = e.target.value
        setTitle(value)
    }
    //funcion agrega
    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title:title,
            completed:false,
        }
        setTodos([...todos,newTodo])

        setTitle('')
    }
    //funcion actualiza
    function handleUpdate(id,value){
        const temp = [...todos];
        const item = temp.find(item =>  item.id === id);
        item.title=value
        setTodos(temp)
    }
    //funcion elimina
    function handleDelete(id){
        const temp = todos.filter(item => item.id !== id);
        
        setTodos(temp)
    }

    return <div className="todoContainer">
                <form className="todoCreateForm" onSubmit={handleSubmit}>
                    <input onChange={handleChange} className="todoInput" value={title}/>
                    <input 
                    onClick={handleSubmit} 
                    type="submit" 
                    value="Create TODO" 
                    className="buttonCreate"/>
                </form>
                <div className="todoContainer">
                    {
                        todos.map(items => (
                            <Todo key={items.id} item={items} onUpdate={handleUpdate} onDelete={handleDelete}/>
                        ))
                    }
                </div>
            </div>
}