const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            break;
        default:
            break;
    }
    return Object.assign({}, state, {newMessageBody: action.body})
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, body: text});

export default dialogsReducer;