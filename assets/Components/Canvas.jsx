import React, {forwardRef, useRef, useImperativeHandle} from 'react';

const Canvas = (props, ref) => {
    const canvasRef = useRef();
    useImperativeHandle(ref, () => ({
        init: () => {
        },
        update: () => {
        },
        clear: () => {
        }
    }));

    return (
        <canvas
            ref={canvasRef}
            width={600}
            height={600}
        />
    )
}

export default forwardRef(Canvas);
