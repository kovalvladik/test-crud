import React, {useEffect, useState} from 'react';
import CloseIcon from "./icons/CloseIcon";

export const AddUser = props => {
    const initFormState = {id: null, secondName: '', primaryName: '', thirdName: '', email: '', login: ''}
    const [user, setUser] = useState(initFormState)

    const handleChange = event => {
        const {name, value} = event.target
        setUser({...user, [name]: value})
    }

    const add = () => {
        props.addUser(user)
        setUser(initFormState)
        props.setModalActive({...props.modalActive, add: false})
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                // props.addUser(user)
                // setUser(initFormState)
                props.setModalActive({...props.modalActive, add: false})
            }}
        >
            <button className='icon-button' onClick={() => props.setModalActive(false)}>
                <CloseIcon/>
            </button>
            <label>Фамилия</label>
            <input type="text" name="secondName" required value={user.secondName} onChange={handleChange}/>
            <label>Имя</label>
            <input type="text" name="primaryName" value={user.primaryName}
                   required onChange={handleChange}/>
            <label>Отчество</label>
            <input type="text" name="thirdName" value={user.thirdName}
                   required onChange={handleChange}/>
            <label>E-mail</label>
            <input type="email" name="email" value={user.email}
                   required onChange={handleChange}/>
            <label>Логин</label>
            <input type="text" name="login" value={user.login}
                   required onChange={handleChange}/>
            <button disabled={user.secondName === ''
            || user.primaryName === ''
            || user.thirdName === '' ||
            user.email === '' ||
            user.login === '' ? true : false} onClick={(e) => add(e)}>Add new user
            </button>

        </form>
    )
}