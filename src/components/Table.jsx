import React from 'react';
import DeleteIcon from "./icons/DeleteIcon";
import RenameIcons from "./icons/RenameIcon";
import '../style/Table.css'

export const UserTable = props => (
    <table className='table'>
        <thead className='table'>
        <tr>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>E-mail</th>
            <th>Логин</th>
            <th>{''}</th>
        </tr>
        </thead>
        <tbody>
        {props.users.length > 0 ? (
            props.users.map(user => (
                <tr key={user.id}>
                    <td>{user.secondName}</td>
                    <td>{user.primaryName}</td>
                    <td>{user.thirdName}</td>
                    <td>{user.email}</td>
                    <td>{user.login}</td>
                    <td>
                        <button
                            onClick={() => {
                                props.editRow(user)
                            }}
                            className="button-not-delete"
                        >
                           <RenameIcons/>
                        </button>
                        <button
                            onClick={() => props.delUser(user.id)}
                            className="button-not-delete"
                        >
                            <DeleteIcon/>

                        </button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={3}>No users</td>
            </tr>
        )}
        </tbody>
    </table>
)