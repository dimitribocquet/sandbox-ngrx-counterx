import { State } from './app.state';

const initialState: State = {
    count: 0,
    title: 'Super compteur',
}

export function reducer(state = initialState, action) {
    console.log('in reducer', action);

    switch (action.type) {
        case 'INCREMENT':
            const newState = {
                ...state,
                count: state.count + action.payload
            }
            console.log('newState', newState);
            return newState;
        break;

        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.payload
            }
        break;

        default:
            return state;
    }
}