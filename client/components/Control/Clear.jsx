import React, {useContext} from 'react';
import Button from "../Input/Button";
import classNames from "classnames";
import {ANIMATION_PLAYING, ANIMATION_STOPPED} from "../animation";
import {Context} from "../Map/Provider";

const Clear = ({animationState}) => {
    const {actions: {clear}} = useContext(Context);

    const btnClass = classNames({
        'font-depixel btn btn-sm': true,
        'btn-dark': ANIMATION_STOPPED === animationState,
        'btn-secondary': ANIMATION_PLAYING === animationState
    });

    return (
        <Button handleClick={clear} className={btnClass} disabled={ANIMATION_PLAYING === animationState}>
            {(props) => (
                'Clear'
            )}
        </Button>
    )
}

export default Clear;
