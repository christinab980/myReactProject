import React from 'react';

const Modal = ({action, message}) => {
    return (
        <>
        <div onClick={action}>{message}</div>
        </>
    )
}

export default Modal;