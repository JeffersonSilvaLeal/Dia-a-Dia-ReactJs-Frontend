import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import DiaForm from './diaForm'
import DiaList from './diaList'

export default class Dia extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <DiaForm />
                <DiaList />
            </div>
        )
    }
}