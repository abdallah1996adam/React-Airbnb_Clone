import React from 'react'
import './modal.scss'

export default function Modal ({ open, children, onClose }) {
    if(!open) return null;
    return (
        <div className="modal" onClick={onClose}>
            {children}
        </div>
    )
}