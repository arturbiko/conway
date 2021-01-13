import React, {useRef, useEffect} from 'react';
import draw from './map';
import drawGrid from './grid';

const Canvas = ({map, settings, setToken}) => {
    const canvasRef = useRef();

    const handleSet = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const size = Math.floor(canvasRef.current.width / settings.d);

        setToken(
            Math.floor((e.clientX - rect.left) / size),
            Math.floor((e.clientY - rect.top) / size)
        )
    }

    useEffect(() => {
        drawGrid(
            canvasRef.current,
            settings.d
        );
    }, []);

    useEffect(() => {
        draw(
            map,
            canvasRef.current,
            settings.d
        );
    }, [map]);

    return (
        <canvas
            onClick={handleSet}
            ref={canvasRef}
            width={600}
            height={600}
        />
    )
}

export default Canvas;
