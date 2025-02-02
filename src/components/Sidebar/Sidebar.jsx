import React, { useContext, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import "./Sidebar.css"
import { dataContext } from '../../context/UserContext';

const Sidebar = () => {
const [extend, setExtend] = useState(false)
    const { sent, previousPrompt ,newChat} = useContext(dataContext)
    
    async function loadPrevPrompt(prompt) {
        sent(prompt)
    }
  return (
    <div className="sidebar">
          <GiHamburgerMenu id='ham'
              onClick={()=> {
              setExtend(prev=>!prev)
          }}/>

          <div className="newChat" onClick={() => {
              newChat()
      }}>
        <FaPlus />
              { extend?<p>New Chat</p>:""}
          </div>
          {previousPrompt.map((item, index) => {
              return(
                  <div className="recent" onClick={() => {
                      loadPrevPrompt(item)
               }}>
                 <FaRegMessage />
                   {extend ? <p>{ item.slice(0,10)+"..."}</p> : ""}
               </div>)
          })
          }

     
    </div>
  );
}

export default Sidebar; 
