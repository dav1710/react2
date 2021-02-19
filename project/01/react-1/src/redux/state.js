import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
    }

}

window.store = store;

export default store;