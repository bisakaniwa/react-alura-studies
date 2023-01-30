import React, { useEffect, useState } from 'react'
import Botao from '../botao'
import Relogio from './relogio'
import style from './cronometro.module.scss'
import { ITarefa } from '../../types/tarefas'
import { tempoParaSegundos } from '../../common/utils/date'

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado]
    );

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    };

    return (
        <article className={style.cronometro}>
            <label className={style.titulo}>
                Escolha um card e inicie o cronômetro:
            </label>
            <section className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </section>
            <Botao onClick={() => regressiva(tempo)}>
                Começar!
            </Botao>
        </article>
    )
}
