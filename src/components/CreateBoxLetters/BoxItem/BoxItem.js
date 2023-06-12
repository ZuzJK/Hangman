import React from 'react';
import styles from './BoxItem.module.scss';

const BoxItem = ({letter = null, hidden = null, disabled = false}) => 
        <div 
            className={`${disabled?styles.boxDisabled:styles.boxActive}`}
            aria-hidden={disabled}>
            {!hidden&&letter}
        </div>;

export default BoxItem;