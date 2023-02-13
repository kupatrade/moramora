import { useRef, useState, useEffect } from "react"

export const useObserverElement = <T extends HTMLElement>() => {
    const ref = useRef<T>(null)
    const [isInView, setIsInView] = useState<boolean>(false);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsInView(true)
            } else {
                setIsInView(false)
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