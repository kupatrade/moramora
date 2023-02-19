import { useRef, useState, useEffect } from "react"


export const useObserverElement = <T extends HTMLElement>(desabledRevers = false, defValue = false) => {
    const ref = useRef<T>(null)
    const [isInView, setIsInView] = useState<boolean>(defValue);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsInView(true)
            } else {
                if (!desabledRevers) {
                    setIsInView(false)
                }
            }
        }, {});

        if (ref.current === null) {
            return
        }
        observer.observe(ref.current);

        return () => {
            if (ref.current !== null) {
                observer.unobserve(ref.current)
            }
        };
    }, []);
    return ({ ref, isInView })
}