import { Timestamp } from "rxjs/internal/operators/timestamp";

export interface Project{
   // id: number,
    title: string,
    description: string,
    color_id : number
}

export interface CreatedProject{
    id: number,
    user_id: number,
    color_id: number,
    title: string,
    description: string,
    created_at: string,
    updated_at: string
}

export interface ThemeColor{
    id: number,
    name: string,
    class: string
}

export interface CreateProject{
    title: string,
    description?: string,
    color_id: number,
    user_id : number
}

export interface EditProject{
    id:number,
    title: string,
    description: string,
    color_id : number
}

export interface AllProjects{
     id: number,
     user_id : number,
     title: string,
     description: string,
     created_at: string,
     updated_at: string
}

export interface NewTask{
    title:string,
    description:string,
    progress_id:number,
    project_id: number,
    priority_id: number
}

export interface AllTasks{
    id: number,
    board_id : number,
    title: string,
    description: string,
    created_at: string,
    updated_at: string
}

export interface UpdateTask{
    id:number,
    title: string,
    description: string,
    progress_id: number,
    priority_id: number
}

export interface ProgressInfo{
   id:number,
   name:string,
   class:string
}

export interface PriorityInfo{
    id:number,
    name:string,
    class:string
 }