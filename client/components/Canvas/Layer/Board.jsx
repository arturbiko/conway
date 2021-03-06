import React, {useContext, useEffect, useRef} from 'react';
import Canvas from "../Canvas";
import useDrawer from "../map";
import {tokenStyle} from "../styles";
import {ANIMATION_PLAYING} from "../../animation";
import {Context} from "../../Map/Provider";

const Board = ({animationState, frameRate, dimensions}) => {
    const {map, actions} = useContext(Context);

    const canvasRef = useRef();
    const frameRef = useRef();

    const draw = useDrawer(tokenStyle());

    useEffect(() => {
        actions.shuffle(dimensions);
    }, []);

    useEffect(() => {
        draw(map, canvasRef.current, dimensions);
    }, [map]);

    useEffect(() => {
        if (ANIMATION_PLAYING === animationState) {
            frameRef.current = requestAnimationFrame(time => handleUpdate(time, 0));
        }

        return () => {
            cancelAnimationFrame(frameRef.current);
            frameRef.current = null;
        }
    }, [animationState, map]);

    const handleSet = (e) => {
        if (ANIMATION_PLAYING === animationState) {
            return;
        }

        const rect = canvasRef.current.getBoundingClientRect();
        const size = Math.floor(canvasRef.current.width / dimensions);

        actions.set(
            Math.floor((e.clientX - rect.left) / size),
            Math.floor((e.clientY - rect.top) / size)
        );
    }

    const handleUpdate = (current, total) => {
        if (ANIMATION_PLAYING === animationState) {
            if (total > frameRate) {
                actions.update();
                draw(map, canvasRef.current, dimensions);
            }

            frameRef.current = requestAnimationFrame(time => {
                handleUpdate(
                    time,
                    total < frameRate
                        ? total + (time - current)
                        : 0
                );
            });
        }
    }

    return (
        <Canvas ref={canvasRef} handleOnClick={handleSet} />
    );
}

export default Board;
