import { useState } from 'react';
import { PlusCircle } from 'phosphor-react'
import styles from './AddTask.module.css'

//criação da Area de Texto para adicionar comentários ou tarefas
//criação do botão para adicinar comentários ou tarefas
export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <div className={styles.task}>
      <input className={styles.taskArea}
        placeholder="Adicionar uma nova tarefa"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className={styles.buttonToCreate} onClick={() => {
        setText('');
        onAddTask(text);
      }}>Criar
      <PlusCircle size={24} className={styles.plusCircle}/>
      </button>
    </div>
  )
}
