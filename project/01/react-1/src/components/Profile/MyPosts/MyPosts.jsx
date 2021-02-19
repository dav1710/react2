import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



const MyPosts = (props) => {
    let PostsElement = props.posts.map( p => <Post message={p.message} count={p.count}/> );
    let newPostElement = React.createRef();
    let addPost = () =>{
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
           <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          cols="60" rows="3" value={props.newPostText}></textarea> <br/>
                <button onClick={addPost} className={s.button}>Add Post</button>
            </div>
            <div className={s.posts}>
                {PostsElement}
            </div>
        </div>
    );
};

export default MyPosts;
