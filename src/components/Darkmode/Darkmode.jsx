import React, { useState, useEffect } from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import"./Darkmode.css"

function Darkmode() {
     
    const [mode, setMode] = useState("darkmode")
    function toggle() {
        if (mode === "darkmode") {
            setMode("lightmode")
        } else {
            setMode("darkmode")
        }
    }

    useEffect(() => {
        document.body.className=mode
    },[mode])
  return (
    <button className='darkmodebtn'
      onClick={() => {
        toggle();
      }}
    >
      <MdOutlineWbSunny />
    </button>
  );
 }

export default Darkmode;
