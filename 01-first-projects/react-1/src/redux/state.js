let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 20},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11},
            ],
            newPostText: 'gymnasy55.github.io'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hey'},
                {id: 3, message: 'Bro'},
                {id: 4, message: 'Bro'},
                {id: 5, message: 'Bro'},
                {id: 6, message: 'Bro'}
            ],
            dialogs: [
                {id: 1, name: 'Ilya'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Sirgay'},
                {id: 4, name: 'Pasha'},
                {id: 5, name: 'Gleb'},
                {id: 6, name: 'Danya'}
            ]
        }
    },
    getState(){
      return this._state;
    },
    _callSubscriber() {
        console.log('State has been changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;