const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
let store = {
    _state : {
        dialogsPage: {
            newMessageText: ['New Message'],
            dialogs : [
                {id: 1, name: 'David'},
                {id: 2, name: 'Hamayak'},
                {id: 3, name: 'Vardanik'},
                {id: 4, name: 'Hamazasp'},
                {id: 5, name: 'Anbrnasbos'}
            ],
            messages: [
                {id: 1, message: 'Hi bro'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Its Ok, thank you'},
                {id: 4, message: 'By By'},
            ],
        },
        profilePage: {
            newPostText: ['New Post'],
            posts:[
                {id: 1, message: 'Hi, how are you?', count: 15},
                {id: 2, message: 'It\'s my first post', count: 25}
            ]
        },
        sidebar: {
            friends :[
                {id: '1', name: 'David K'},
                {id: '2', name: 'Vrdo'},
                {id: '3', name: 'Kamo'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State Change');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                count: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state );
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state )
        } if (action.type === ADD_MESSAGE){
            let newMessage = {
                id:5,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE){
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text,})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE , newText: text});
window.store = store;

export default store;