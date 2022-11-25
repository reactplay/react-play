export type User = {
    name: {
        first: string;
        last: string;
    }
};
export type AvatarProps = {
    first: string;
    last: string;
}

export type State = {
    users: User[],
    error?: any,
    fetching: boolean
};
export type ActionType = 'request' | 'success' | 'failure';
export type ActionReturnType<T> = {
    type: ActionType,
    payload: T
}
export type ActionSuccessReturnType = ActionReturnType<User[]>;


export type ActionRequestReturnType = ActionReturnType<undefined>;


export type ActionFailureReturnType = ActionReturnType<any>;


export type ActionsReturnType =
    | ActionRequestReturnType
    | ActionSuccessReturnType
    | ActionFailureReturnType;

export type Arguments = {
    url: string,
    options?: any
}