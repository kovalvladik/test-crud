import React from 'react';

export const UserTable = props => (
    <table>
        <thead>
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
                            // onClick={() => props.setModalActive({...props.modalActive, refactor: true})}
                            onClick={() => {
                                props.editRow(user)
                            }}
                            className=""
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => props.delUser(user.id)}
                            className=""
                        >
                            Delete
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
        {/*<ModalPage setActive={setModalActive} active={modalActive.delete}>*/}
        {/*<p className='text-form'>*/}
        {/*    Удаление пользователя*/}
        {/*</p>*/}
        {/*<div className='button-container'>*/}
        {/*    <button className='button-not-delete'*/}
        {/*            onClick={() => setModalActive({...modalActive, delete: false})}>*/}
        {/*        Отменить*/}
        {/*    </button>*/}
        {/*    <button className='button-delete' onClick={() => handleDelete(modalActive.id)}>*/}
        {/*        Удалить*/}
        {/*    </button>*/}
        {/*</div>*/}


    {/*</ModalPage>*/}
    </table>
)