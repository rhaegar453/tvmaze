import React from 'react';
import PropTypes from 'prop-types';
import { rest } from 'lodash';

const Modal = ({ modalId, title, children }) => (
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
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        {title}
                    </h5>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    </div>
);

Modal.propTypes = {};

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

export default Modal;
