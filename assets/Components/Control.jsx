import React from 'react';

const Control = ({values, start}) => (
    <>
        <div className="form-group">
            <label htmlFor="speed">Interval (in ms)</label>
            <input type="text" className="form-control" name="speed" value={values.s} />
        </div>
        <div className="form-group">
            <label htmlFor="dimensions">Dimensions</label>
            <input type="text" className="form-control" name="dimensions" value={values.d} />
        </div>
        <button className="btn btn-success" onClick={() => {
            start();
        }}>
            Start Simulation
        </button>
    </>
);

export default Control;
