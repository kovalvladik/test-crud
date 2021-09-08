import React from 'react';
import '../style/ModalPage.css';

const ModalPage = ({active, setActive, children}) => {
    console.log(active)

    return (
        <div className={active ? 'modal active' : 'modal'}>
            <div className={active ? 'modal__content active' : 'modal__content'}>
                {children}
            </div>
        </div>

    )


}
export default ModalPage;