import React, {useState, useEffect} from 'react';
import CloseIcon from "./icons/CloseIcon";

export const EditUser = props => {
    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [props]
    )

    const handleChange = event => {
        const {name, value} = event.target
        setUser({...user, [name]: value})
    }


    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                props.updateUser(user.id, user)
                props.setModalActive(false)
            }}
        >
            <button className='icon-button' onClick={() => props.setModalActive(false)}>
                <CloseIcon/>
            </button>
            <label>Фамилия</label>
            <input type="text" name="secondName" value={user.secondName} onChange={handleChange}/>
            <label>Имя</label>
            <input type="text" name="primaryName" value={user.primaryName} onChange={handleChange}/>
            <label>Отчество</label>
            <input type="text" name="thirdName" value={user.thirdName} onChange={handleChange}/>
            <label>E-mail</label>
            <input type="email" name="email" value={user.email} onChange={handleChange}/>
            <label>Логин</label>
            <input type="text" name="login" value={user.login} onChange={handleChange}/>
            <button>Сохранить</button>
            {/*<button onClick={() => props.setEdit(false)} className="button muted-button">*/}
            {/*    Cancel*/}
            {/*</button>*/}
        </form>
    )
}