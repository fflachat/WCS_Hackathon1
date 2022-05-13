import React from 'react'
import './Popup.css'

export default function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popupInner">
            <button className="close" onClick={() => props.setTrigger(false)}>X</button>
            { props.children }
        </div>
    </div>
  ) : "";
}