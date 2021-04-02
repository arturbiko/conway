import React from 'react';
import Button from "../Input/Button";
import classNames from "classnames";
import {ANIMATION_PLAYING, ANIMATION_STOPPED} from "../animation";

const Clear = ({animationState, clearAction}) => {
    const btnClass = classNames({
        'font-depixel btn btn-sm': true,
        'btn-dark': ANIMATION_STOPPED === animationState,
        'btn-secondary': ANIMATION_PLAYING === animationState
    });

    return (
        <Button handleClick={clearAction} className={btnClass} disabled={ANIMATION_PLAYING === animationState}>
            {(props) => (
                'Clear'
            )}
        </Button>
    )
}

export default Clear;
