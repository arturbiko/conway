import React from 'react';

const Canvas = React.forwardRef(({handleOnClick, backgroundColor}, ref) => (
    <canvas
        onClick={(e) => {
            if (handleOnClick) {
                handleOnClick(e);
            }
        }}
        ref={ref}
        width={600}
        height={600}
    />
));

export default Canvas;
