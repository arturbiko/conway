import React, {useEffect, useRef} from 'react';
import Canvas from "../Canvas";
import useGrid from "../grid";
import {gridStyle, tokenStyle} from "../styles";

const Grid = ({dimensions}) => {
    const canvasRef = useRef();

    const style = tokenStyle();

    const draw = useGrid(gridStyle())

    useEffect(() => {
        draw(
            canvasRef.current,
            dimensions
        );
    }, []);

    useEffect(() => {
        draw(
            canvasRef.current,
            dimensions
        )
    }, [dimensions]);

    return (
        <Canvas ref={canvasRef} />
    );
}

export default Grid;
