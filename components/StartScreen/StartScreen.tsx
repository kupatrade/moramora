import { useEffect, useRef } from "react"

export const StartScreen = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {

        if (canvasRef.current) {
            const canvas = canvasRef.current
            const context = canvas.getContext('2d')
            if (context) {
                canvas.style['display'] = 'block'
                canvas.style['position'] = 'fixed'
                canvas.style['margin'] = '0'
                canvas.style['padding'] = '0'
                canvas.style['border'] = '0'
                canvas.style['outline'] = '0'
                canvas.style['left'] = '0'
                canvas.style['top'] = '0'
                canvas.style['width'] = '100%'
                canvas.style['height'] = '100%'
                canvas.style['zIndex'] = '-1'
            }
        }
    }, [])
    return (
        <canvas ref={canvasRef} id="start-screen" style={{ width: "100%", height: "100%" }}></canvas>
    )
}