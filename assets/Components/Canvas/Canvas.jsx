import React, {useRef, useEffect} from 'react';
import drawGrid from './grid';
import useMap from "../map";
import draw from "./map";
import {ANIMATION_PLAYING} from "../animation";

const Canvas = ({state, settings}) => {
    const canvasRef = useRef();
    const frameRef = useRef();
    const [map, actions] = useMap(canvasRef);

    useEffect(() => {
        drawGrid(
            canvasRef.current,
            settings.d
        );
    }, []);

    useEffect(() => {
        actions.scale(settings.d);
    }, [settings]);

    useEffect(() => {
        drawGrid(
            canvasRef.current,
            settings.d
        )
    }, [settings.d])

    useEffect(() => {
        draw(map, canvasRef.current, settings.d);

        if (ANIMATION_PLAYING === state) {
            frameRef.current = requestAnimationFrame(() => {
                handleUpdate();
            });
        }

        return () => {
            cancelAnimationFrame(frameRef.current);
            frameRef.current = null;
        }
    }, [state, map]);

    const handleUpdate = () => {
        actions.update();

        if (ANIMATION_PLAYING === state) {
            frameRef.current = requestAnimationFrame(handleUpdate);
        }
    }

    const handleSet = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const size = Math.floor(canvasRef.current.width / settings.d);

        actions.set(
            Math.floor((e.clientX - rect.left) / size),
            Math.floor((e.clientY - rect.top) / size)
        );
    }

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
