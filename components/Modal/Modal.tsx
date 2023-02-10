import React from "react";
import { createPortal } from "react-dom"

interface ModalProps {
    children: React.ReactNode,
    el?: string
}

export const Modal = ({ children, el = 'div' }: ModalProps) => {
    const [container] = React.useState(() => {
        return document.createElement(el);
    });

    React.useEffect(() => {
        container.classList.add("root-portal")
        document.body.appendChild(container)
        document.body.style.overflow = "hidden"
        return () => {
            document.body.removeChild(container)
            document.body.style.overflow = "auto"
        }
    }, [])

    return createPortal(children, container)
}