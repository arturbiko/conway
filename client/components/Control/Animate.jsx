import React from 'react';
import Button from "../Input/Button";
import {ANIMATION_PLAYING, ANIMATION_STOPPED} from "../animation";
import classNames from "classnames";

const Animate = ({startAnimation, stopAnimation, animationState}) => {
    const btnClass = classNames({
        'font-depixel btn btn-sm': true,
        'btn-success': ANIMATION_STOPPED === animationState,
        'btn-danger': ANIMATION_PLAYING === animationState
    });

    const animateAction = () => {
        switch (animationState) {
            case ANIMATION_PLAYING:
                stopAnimation();
                break;
            case ANIMATION_STOPPED:
                startAnimation();
                break;
            default:
                break;
        }
    }

    return (
        <Button className={btnClass} handleClick={animateAction}>
            {(props) => (
                ANIMATION_STOPPED === animationState
                    ? 'Start'
                    : 'Stop'
            )}
        </Button>
    )
}

export default Animate;
