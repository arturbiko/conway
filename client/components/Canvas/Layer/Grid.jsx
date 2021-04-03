import React, {useEffect, useRef, useContext} from 'react';
import Canvas from "../Canvas";
import useGrid from "../grid";
import {gridStyle} from "../styles";
import {Context} from "../../Map/Provider";

const Grid = ({dimensions}) => {
    const {actions} = useContext(Context);

    const canvasRef = useRef();
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
        );
    }, [dimensions]);

    useEffect(() => {
        actions.scale(dimensions);
    }, [dimensions]);

    return (
        <Canvas ref={canvasRef} />
    );
}

export default Grid;
