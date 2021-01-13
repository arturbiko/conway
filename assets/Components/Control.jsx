import React from 'react';

const Control = ({values, setSettings, start}) => (
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
                onChange={(e) => setSettings("d", e.target.value)}
            />
        </div>
        <button className="btn btn-success" onClick={() => {
            start();
        }}>
            Step
        </button>
    </>
);

export default Control;
