import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import DiaForm from './diaForm'
import DiaList from './diaList'

export default class Dia extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e) {
        this.setState({...this.setState, description: e.target.value })
    }

    handleAdd() {
        console.log(this.state.description)
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <DiaForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <DiaList />
            </div>
        )
    }
}