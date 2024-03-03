import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input className={styles.input} id={name} type={type} name={name} />
      <p className={styles.erro}>Erro</p>
    </div>
  );
};

export default Input;
