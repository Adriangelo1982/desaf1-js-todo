import { useState } from 'react';
import { Trash, Pen, FloppyDisk, Clipboard } from 'phosphor-react';
import  styles from './TaskList.module.css'

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask
}) {
  const tasksQuantity = tasks.length;
  const completeTasks = tasks.filter((task) => task.done).length;
  return (
    <div className={styles.tasksArea}>
      <section className={styles.taskQuantity}>
        <div className={styles.taskQuantCreate}>
          <strong>Tarefas criadas</strong>
          <span className={styles.taskCounterCreate}>{tasksQuantity}</span>
        </div>
        <div className={styles.taskCompleted}>
          <strong>Concluidas</strong>
          <span className={styles.taskCounterCompleted}>{completeTasks} de {tasksQuantity}</span>
        </div>
      </section>

      <ul className={styles.newTask}>
        {tasks.map(task => (
          <li key={task.id}>
            <Task
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask} 
              />
          </li>
        ))}
      </ul>
      {tasks.length <= 0 && (
        <section className={styles.empty}>
          <Clipboard className={styles.clipBoard} size={56} />
          <div>
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </section>
      )}
    </div>
  );
  
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
            });
          }} />
        <button className={styles.saved} onClick={() => setIsEditing(false)}>
          <FloppyDisk size={24} />
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button className={styles.edit} onClick={() => setIsEditing(true)}>
          <Pen size={24} />
        </button>
      </>
    );
  }
  return (
    <label className={styles.content}>
      <input
        type="checkBox"
        checked={task.done}
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
      {taskContent}
      <button className={styles.delete} onClick={() => onDelete(task.id)}>
      <Trash size={24}/>
      </button>
    </label>
  );
}