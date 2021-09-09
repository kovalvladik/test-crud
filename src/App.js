import './App.css';
import React, {useState} from "react";
import {EditUser} from "./components/EditForm";
import {AddUser} from "./components/Form";
import {UserTable} from "./components/Table";
import ModalPage from "./components/ModalPage";

export const App = () => {

    const initUsers = [
        {
            id: Math.ceil(Math.random() * 100000),
            primaryName: 'Иван',
            secondName: ' Иванов',
            thirdName: 'Иванович',
            email: 'mail1@gmail.com',
            login: 'user1'
        },
        {
            id: Math.ceil(Math.random() * 100000),
            primaryName: 'Степан',
            secondName: ' Иванов',
            thirdName: 'Степанович',
            email: 'mail2@gmail.com',
            login: 'user2'
        },
        {
            id: Math.ceil(Math.random() * 100000),
            primaryName: 'Иван',
            secondName: ' Сидоров',
            thirdName: 'Алексанодрович',
            email: 'mail3@gmail.com',
            login: 'user3'
        },
        {
            id: Math.ceil(Math.random() * 100000),
            primaryName: 'Александр',
            secondName: ' Смирнов',
            thirdName: 'Иванович',
            email: 'mail4@gmail.com',
            login: 'user4'
        },
        {
            id: Math.ceil(Math.random() * 100000),
            primaryName: 'Владислав',
            secondName: ' Лозин',
            thirdName: 'Иванович',
            email: 'mail5@gmail.com',
            login: 'user5'
        },

    ]
    const initFormState = {id: null, secondName: '', primaryName: '', thirdName: '', email: '', login: ''}

    const [users, setUsers] = useState(initUsers)
    const [currentUser, setCurrentUser] = useState(initFormState)
    const [edit, setEdit] = useState(false)
    const [modalActive, setModalActive] = useState({
        add: false,
        delete: false,
        refactor: false,
        idEl: null,
    })
    const [allError, setAllError] = useState(true)

    const addUser = user => {
        user.id = users.length + 1
        setUsers([user, ...users])
    }
    const delUser = id => {
        setModalActive({...modalActive, delete: true, idEl: id})
        // setEdit(false)
        // setUsers(users.filter(user => user.id !== id))

    }
    const handleDelete = (id) => {
        // setEdit(false)
        setUsers(users.filter(user => user.id !== id))
        setModalActive({...modalActive, delete: false, idEl: null})
    }
    const updateUser = (id, updatedUser) => {
        setEdit(false)
        console.log(users.map(user => (user.id === id ? updatedUser : user)))
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }
    const editRow = user => {
        setModalActive({...modalActive, refactor: true})
        setEdit(true)
        setCurrentUser({
            id: user.id,
            secondName: user.secondName,
            primaryName: user.primaryName,
            thirdName: user.thirdName,
            email: user.email,
            login: user.login
        })
    }

    // onClick={() => props.setModalActive({...props.modalActive, refactor: true})}
    // // onClick={() => {
    // //     props.editRow(user)
    // // }}
    const ee = () => {
        setModalActive({...modalActive, add: true})
    }

    return (
        <>
            <div className='title'>
                Пользователи
                <button className='button-add' onClick={ee}>
                    + Добавить
                </button>
            </div>
            <UserTable users={users} editRow={editRow} delUser={delUser} setModalActive={setModalActive}
                       modalActive={modalActive}/>
            <ModalPage setActive={setModalActive} active={modalActive.refactor}>
                <EditUser edit={edit} setEdit={setEdit} currentUser={currentUser} updateUser={updateUser}
                          setModalActive={setModalActive}
                          modalActive={modalActive}
                />
            </ModalPage>
            <ModalPage setActive={setModalActive} active={modalActive.add}>
                <AddUser addUser={addUser} setModalActive={setModalActive} setAllError={setAllError} allError={allError}
                         modalActive={modalActive}/>
            </ModalPage>
            <ModalPage setActive={setModalActive} active={modalActive.delete}>
                <p className='text-form'>
                    Удаление пользователя
                </p>
                <div className='button-container'>
                    <button className='button-not-delete'
                            onClick={() => setModalActive({...modalActive, delete: false})}>
                        Отменить
                    </button>
                    <button className='button-delete' onClick={() => handleDelete(modalActive.idEl)}>
                        Удалить
                    </button>
                </div>
            </ModalPage>
        </>
    );
}