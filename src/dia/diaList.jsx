import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {

        const list = props.list || []
        return list.map(dia => (
            <tr key={dia._id}>
                <td className={dia.done ? 'markedAsDone' : ''}>{dia.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={dia.done}
                        onClick={() => props.handleMarkAsDone(dia)}>
                    </IconButton>

                    <IconButton style='warning' icon='undo' hide={!dia.done}
                        onClick={() => props.handleMarkAsPending(dia)}>
                    </IconButton>

                    <IconButton style='danger' icon='trash-o' hide={!dia.done}
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
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}