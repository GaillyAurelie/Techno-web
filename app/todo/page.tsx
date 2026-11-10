import { createTask, getTasks, deleteTask } from "@/lib/tasks";

export default async function () {
  const tasks_list = await getTasks();
  return (
    <section>
      <h1 className="text-2xl text-purple-600">Mes tâches</h1>
      <ul className="list-disc list-inside">
        {tasks_list.map((task, id) => (
          <li key={id}>{task}</li>
        ))}
      </ul>

      <form action={createTask}>
        Tâche: <input name="new_task" />
        <button>Ajouter</button>
      </form>
      <ul>
        {tasks_list.map((task, id) => (
          <form action={deleteTask.bind(null, id)} key={id}>
            <li>{task}</li>
            <button>Retirer</button>
          </form>
        ))}
      </ul>
    </section>
  );
}
