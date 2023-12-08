import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Modal from '../Modal/Modal';

const ErrorHandler = (props) => (
    <>
        {props.error && <Backdrop onClick={props.onHandle} />}
        {props.error && (
            <Modal
                title="An Error Occurred"
                onCancelModal={props.onHandle}
                onAcceptModal={props.onHandle}
                acceptEnabled
            >
                <p>{props.error.message}</p>
            </Modal>
        )}
    </>
);

export default ErrorHandler;
