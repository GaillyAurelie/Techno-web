"use server";
import {updateTag} from "next/cache";
import {cacheTag} from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const tasks_list: string[] = ["Apprendre l'async/await", "Ecouter les cours"];

export async function getTasks() {
    "use cache";
    cacheTag("tasks");
    return tasks_list;
}

export async function createTask(form: FormData) {
    const task = form.get("new_task")?.toString();
    if (task) {
        tasks_list.push(task);
    }
    updateTag("tasks");
}

export async function deleteTask(id: number) {  
    tasks_list.splice(id,1)
    updateTag("tasks");
    redirect((await headers()).get('referer') ?? '/')  
}