import s from './Sidebar.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";
import React from "react";







const Sidebar = (props) => {

    let friendsElements = props.friends.map( friends => <FriendsItem name={friends.name} id={friends.id}/>);
    return(
        <div className={s.sidebar}>
           {friendsElements}
        </div>
    )
}

export default Sidebar;