import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { User } from '../types';

type State = {
    users: User[],
    error?: any,
    fetching: boolean
};
type ActionType = 'request' | 'success' | 'failure';
type ActionReturnType<T> = {
    type: ActionType,
    payload: T
}
type ActionSuccessReturnType = ActionReturnType<User[]>;
const fetchUserSuccess = (users: User[]): ActionSuccessReturnType => ({
    type: 'success',
    payload: users
});

type ActionRequestReturnType = ActionReturnType<undefined>;
const fetchUserRequest = (): ActionRequestReturnType => ({
    type: 'request',
    payload: undefined
});

type ActionFailureReturnType = ActionReturnType<any>;
const fetchUserFailure = (error: any): ActionFailureReturnType => ({
    type: 'failure',
    payload: error
});

type ActionsReturnType =
    | ActionRequestReturnType
    | ActionSuccessReturnType
    | ActionFailureReturnType;

const initialState: State = {
    users: [],
    error: undefined,
    fetching: false
};

function reducer(state: State, action: ActionsReturnType): State {
    switch (action.type) {
        case 'request':
            return {
                ...state,
                fetching: true
            }
        case 'success':
            const users = action.payload as User[];
            return {
                ...state,
                users,
                fetching: false
            }
        case 'failure':
            const error = action.payload;
            return {
                ...state,
                fetching: false,
                error
            }
        default:
            return state;
    }
};

type Arguments = {
    url: string,
    options?: any
}
export function useFetchUser({ url, options }: Arguments) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (!url || url === '') return;
        async function fetchUser() {
            dispatch(fetchUserRequest());

            try {
                const response = await axios.get(url, options);
                const { results } = response.data;
                dispatch(fetchUserSuccess(results));
            } catch (error) {
                dispatch(fetchUserFailure(error));
            }
        }

        fetchUser();
    }, [url, options])

    return state;
}
