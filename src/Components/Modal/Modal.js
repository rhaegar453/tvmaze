import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ modalId, children }) => (
    <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    </div>
);

Modal.propTypes = {
    modalId: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
};

export const ModalButton = ({ className, modalId, children, ...rest }) => (
    <button
        data-toggle="modal"
        data-target={`#${modalId}`}
        {...rest}
        className={className}
        type="button"
    >
        {children}
    </button>
);

ModalButton.propTypes = {
    className: PropTypes.string.isRequired,
    modalId: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
};

export default Modal;
