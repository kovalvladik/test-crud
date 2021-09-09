import React, {useEffect, useState} from 'react';
import CloseIcon from "./icons/CloseIcon";

export const AddUser = props => {
    const initFormState = {id: null, secondName: '', primaryName: '', thirdName: '', email: '', login: ''}
    const [user, setUser] = useState(initFormState)
    // const [errorSecondName, setErrorSecondName] = useState( '')
    // const [errorPrimaryName, setErrorPrimaryName] = useState( '')
    // const [errorThirdName, setErrorThirdName] = useState( '')
    // const [errorEmail, setErrorEmail] = useState( '')
    // const [errorLogin, setErrorLogin] = useState( '')
    // const [dirty, setDirty] = useState({
    //     secondName: false,
    //     primaryName: false,
    //     thirdName: false,
    //     email: false,
    //     login: false,
    //
    // })

    //
    // useEffect(()=>{
    //         if (errorLogin || errorPrimaryName || errorThirdName || errorEmail || errorSecondName){
    //             props.setAllError(false)
    //         }else {
    //             props.setAllError(true)
    //         }
    // },[errorSecondName,errorPrimaryName,errorThirdName,errorEmail,errorLogin])
    //
    // console.log(!props.allError)
    //
    // const validationName = (event) =>{
    //     const {name, value} = event.target
    //     setUser({...user, [name]: value})
    //     const  re = /^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/
    //     if (!re.test(String(value).toLowerCase()) ){
    //         setErrorPrimaryName(`Некорректное имя,только знаки A-Z, a-z и '-'`)
    //     } else {
    //         setErrorPrimaryName('')
    //     }
    //
    // }
    // const validationSecondName = (event) => {
    //     const {name, value} = event.target
    //     setUser({...user, [name]: value})
    //     const  re = /^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/
    //     if (!re.test(String(value).toLowerCase())){
    //         setErrorSecondName(`Некорректная фамилия,только знаки А-Я, а-я и'-'`)
    //     } else {
    //         setErrorSecondName('')
    //     }
    // }
    //
    // const validationThirdName = (event) => {
    //     const {name, value} = event.target
    //     setUser({...user, [name]: value})
    //     const  re = /^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/
    //     if (!re.test(String(value).toLowerCase())){
    //         setErrorThirdName(`Некорректное отчество,только знаки A-Z, a-z и '-'`)
    //     } else {
    //         setErrorThirdName('')
    //     }
    // }
    // const validationEmail = (event) => {
    //     const {name, value} = event.target
    //     setUser({...user, [name]: value})
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if(!re.test(String(value).toLowerCase())){
    //         setErrorEmail('Некорректный Email')
    //     } else {
    //         setErrorEmail(' ')
    //     }
    // }
    // const validationLogin = (event) => {
    //     const {name, value} = event.target
    //     setUser({...user, [name]: value})
    //     const re =  /^[a-zA-Z\-]+$/;;
    //     if(!re.test(String(value).toLowerCase())){
    //         setErrorLogin(`Некорректный логин,только знаки A-Z, a-z и '-'`)
    //     } else {
    //         setErrorLogin('')
    //     }
    // }

    const handleChange = event => {
        const {name, value} = event.target
        setUser({...user, [name]: value})
    }

    const add = () => {
        props.addUser(user)
        setUser(initFormState)
    }
    
    // const blurHandler = (e) => {
    //   switch (e.target.name){
    //       case 'email':
    //           setDirty({...dirty,email:true})
    //           break
    //       case 'secondName':
    //           setDirty({...dirty,secondName:true})
    //           break
    //       case 'primaryName':
    //           setDirty({...dirty,primaryName:true})
    //           break
    //       case 'thirdName':
    //           setDirty({...dirty,thirdName:true})
    //           break
    //       case 'login':
    //           setDirty({...dirty,login:true})
    //           break
    //   }
    // }

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
            <input type="text" name="secondName" required  value={user.secondName} onChange={handleChange}/>
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
            <button disabled={!props.allError} onClick={(e) => add(e)}>Add new user</button>

        </form>
    )
}