import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";




const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrew" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Victor" id="5" />
        <DialogItem name="Valera" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="Hello" />
        <Message message="How are you?" />
      </div>
    </div>
  )
}

export default Dialogs;