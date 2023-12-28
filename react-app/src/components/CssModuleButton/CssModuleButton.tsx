import React from 'react'
import styles from './CssModuleButton.module.css'


const CssModuleButton = () => {
  return (
    <>
      <button className={styles.cuteBtn}>Im normal pink</button>
          
      <button className={[styles.cuteBtn, styles.borderThick].join(" ")}>Im thick pink</button>
    </>
  );
}

export default CssModuleButton