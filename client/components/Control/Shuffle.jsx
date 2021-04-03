import React, {useState, useEffect, useContext} from 'react';
import classNames from "classnames";
import icons from '../../assets/icons.svg';
import {ANIMATION_PLAYING, ANIMATION_STOPPED} from "../animation";
import Button from "../Input/Button";
import {Context} from "../Map/Provider";
import {getRandomNumber} from "../util";

const Label = ({active}) => {
    const [number, setNumber] = useState(getRandomNumber(1, 6));

    useEffect(() => {
        if (active) {
            setNumber(getRandomNumber(1, 6));
        }
    }, [active]);

    return (
        <div className="d-flex flex-row justify-content-between">
            <svg className="align-self-center">
                <use href={icons + "#dice-" + number} />
            </svg>
            &nbsp;
            <span className="align-self-center">
                Shuffle
            </span>
        </div>
    )
};

const Shuffle = ({animationState, dimensions}) => {
    const {actions: {shuffle}} = useContext(Context);

    const btnClass = classNames({
        'font-depixel btn btn-sm': true,
        'btn-orange': ANIMATION_STOPPED === animationState,
        'btn-secondary': ANIMATION_PLAYING === animationState
    });

    return (
        <Button className={btnClass} handleClick={_ => shuffle(dimensions)} disabled={ANIMATION_PLAYING === animationState}>
            {(clicked) => <Label active={clicked} />}
        </Button>
    )
}

export default Shuffle;
