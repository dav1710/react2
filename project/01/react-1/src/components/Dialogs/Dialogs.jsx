import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";

const Dialogs = (props) => {
    let DialogsElement = props.state.dialogs.map( d => <DialogsItem name={d.name} id={d.id}/> )
    let MessagesElements = props.state.messages.map( m => <Message message={m.message}/> )
    let newMessageElement = React.createRef();
    let addMessage = () =>{
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () =>{
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElement}
            </div>
            <div className={s.messages}>
                {MessagesElements}
                <div className={s.addMessage}>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} cols="60" rows="4"></textarea>
                    <button onClick={addMessage} className={s.button}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;