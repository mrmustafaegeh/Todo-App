import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useTodoStore = create((set)=>{
    todos: [],
    addToDoos: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    deleteTodo: (todo) => set((state) => ({ todos: state.todos.filter((val) => val !== todo) })),   
    completeTodo: (todo) => set((state) => ({ todos: state.todos.map((val) => val === todo ? {...val, complete: !val.complete} : val) })),  
})