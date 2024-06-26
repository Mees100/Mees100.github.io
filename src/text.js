import React from "react";
import styles from "./text.module.css";
import { useState, useEffect } from "react";

function RenderSubtitle() {    
    let [currentIndex, setIndex] = useState(0);
    const text = 'HTML  CCS Design REACT  JavaScript Git GitHub  ';    
  
    useEffect(() => {      
      const id = setInterval(() => {        
        setIndex(current => current += 1);
        if (currentIndex === text.length) {
            clearInterval(id)
        };
      }, 100);
      return () => clearInterval(id);
    },[]);
  
    return <p className={styles.oneZin}>{text.substring(0,currentIndex)}</p>;
  }

  export default RenderSubtitle;