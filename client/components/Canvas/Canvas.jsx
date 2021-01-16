import React, {useRef, useEffect} from 'react';
import drawGrid from './grid';
import useMap from "../map";
import useDrawer from "./map";
import {ANIMATION_PLAYING} from "../animation";
import {tokenStyle} from "./styles";

const Canvas = ({state, dimensions, framerate}) => {
    const canvasRef = useRef();
    const frameRef = useRef();
    const [map, actions] = useMap(canvasRef);
    const draw = useDrawer(tokenStyle());

    useEffect(() => {
        drawGrid(
            canvasRef.current,
            dimensions
        );
    }, []);

    useEffect(() => {
        actions.scale(dimensions);
    }, [dimensions]);

    useEffect(() => {
        drawGrid(
            canvasRef.current,
            dimensions
        )
    }, [dimensions])

    useEffect(() => {
        draw(map, canvasRef.current, dimensions);

        if (ANIMATION_PLAYING === state) {
            frameRef.current = requestAnimationFrame(time => handleUpdate(time, time - time));
        }

        return () => {
            cancelAnimationFrame(frameRef.current);
            frameRef.current = null;
        }
    }, [state, map]);

    const handleUpdate = (current, total) => {
        if (ANIMATION_PLAYING === state) {
            if (total > framerate) {
                actions.update();
            }

            frameRef.current = requestAnimationFrame(time => {
                handleUpdate(
                    time,
                    total < framerate
                        ? total + (time - current)
                        : 0
                );
            });
        }
    }

    const handleSet = (e) => {
        if (ANIMATION_PLAYING === state) {
            return;
        }

        const rect = canvasRef.current.getBoundingClientRect();
        const size = Math.floor(canvasRef.current.width / dimensions);

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
