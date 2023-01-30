import React from 'react'
import { ITarefa } from '../../types/tarefas'
import Item from './item'
import style from './lista.module.scss'

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({ tarefas, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Meus estudos </h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                    selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}
