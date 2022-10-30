import React from 'react';
import styles from './popup-msg.module.css'
export default function PopUp(props) {
    return (
        <div
        className={`${styles.pop_up} ${styles[props.class]}`}
        style={{
            position: "absolute",
            top: props.y,
            left: props.x,
        }}>
            <div className={styles.msg}>{props.msg}</div>
        </div>
    );
}