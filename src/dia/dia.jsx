import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import DiaForm from './diaForm'
import DiaList from './diaList'


const URL = 'http://localhost:3003/api/dias'

export default class Dia extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`).then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description 
        axios.post(URL, { description }).then(resp => this.refresh())
    }

    handleRemove(dia) {
        axios.delete(`${URL}/${dia._id}`).then(resp => this.refresh())
    }

    handleMarkAsDone(dia) {
        axios.put(`${URL}/${dia._id}`, {...dia, done: true}).then(resp => this.refresh())
    }

    handleMarkAsPending(dia) {
        axios.put(`${URL}/${dia._id}`,{...dia, done: false }).then(resp => this.refresh())
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <DiaForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <DiaList 
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove}/>
            </div>
        )
    }
}