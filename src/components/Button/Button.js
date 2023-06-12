import React from 'react';
import styles from './Button.module.scss';

const Button = ({children,clickFn}) => {
    return (
        <button className={styles.btn}
        onClick={clickFn}
        >
            {children}
        </button>
    );
};

export default Button;