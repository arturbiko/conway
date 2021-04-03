import React, {useState} from 'react';

const Button = ({handleClick, children, className, disabled}) => {
    const [clicked, setClicked] = useState(false);

    return (
        <button
            disabled={disabled}
            onMouseDown={(_) => {
                setClicked(true);
            }}
            onMouseUp={e => {
                setClicked(false);
                handleClick(e);
            }}
            className={className + " py-2"}
        >
            {children(clicked)}
        </button>
    );
}

export default Button;
