import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {

        const list = props.list  || []
        return list.map(dia => (
            <tr key={dia._id}>
                <td>{dia.description}</td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(dia)}>
                    </IconButton>
                </td>
            </tr>
        ))
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}