import React from 'react';
import {ANIMATION_PLAYING, ANIMATION_STOPPED} from "./animation";

const Control = ({values, setSettings, start, stop, state}) => (
    <>
        <div className="form-group" title={values.d}>
            <label htmlFor="dimensions">Dimensions</label>
            <input
                type="range"
                id="dimensions"
                className="form-control-range"
                value={values.d}
                step={10}
                min={10}
                max={60}
                disabled={ANIMATION_PLAYING === state}
                onChange={(e) => setSettings("d", parseInt(e.target.value))}
            />
        </div>
        <button className={ANIMATION_STOPPED === state ? 'btn btn-success' : 'btn btn-secondary'} onClick={() => {
            switch (state) {
                case ANIMATION_PLAYING:
                    stop();
                    break;
                case ANIMATION_STOPPED:
                    start();
                    break;
                default:
                    break;
            }
        }}>
            {ANIMATION_STOPPED === state ? 'Start' : 'Stop'}
        </button>
    </>
);

export default Control;
