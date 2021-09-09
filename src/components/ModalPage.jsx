import React from 'react';
import '../style/ModalPage.css';

const ModalPage = ({active, setActive, children, title}) => {
    console.log(active)

    return (
        <div className={active ? 'modal active' : 'modal'}>
            <div className={active ? 'modal__content active' : 'modal__content'}>
                < div className='modal_header'>
                    <div className='modal__title'>{title}</div>
                </div>
                <div className='modal__children'>
                    {children}
                </div>
            </div>
        </div>

    )


}
export default ModalPage;