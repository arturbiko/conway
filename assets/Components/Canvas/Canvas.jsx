import React, {forwardRef, useRef, useImperativeHandle} from 'react';
import draw from './map';
import drawGrid from './grid';

const Canvas = ({settings, setToken}, ref) => {
    const canvasRef = useRef();
    useImperativeHandle(ref, () => ({
        init: () => {
            drawGrid(
                canvasRef.current,
                settings.d
            );
        },
        update: (map) => {
            draw(
                map,
                canvasRef.current,
                settings.d
            );
        }
    }));

    return (
        <canvas
            onClick={(e) => {
                const rect = canvasRef.current.getBoundingClientRect();
                const size = Math.floor(canvasRef.current.width / settings.d);

                setToken(
                    e.clientX > 0
                        ? Math.floor((e.clientX - rect.left) / size)
                        : 0,
                    e.clientY > 0
                        ? Math.floor((e.clientY - rect.top) / size)
                        : 0
                )
            }}
            ref={canvasRef}
            width={600}
            height={600}
        />
    )
}

export default forwardRef(Canvas);
