export type User = {
  name: {
    first: string;
    last: string;
  };
};
export type AvatarProps = {
  first: string;
  last: string;
};

export type State = {
  users: User[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  fetching: boolean;
};
export type ActionType = 'request' | 'success' | 'failure';
export type ActionReturnType<T> = {
  type: ActionType;
  payload: T;
};
export type ActionSuccessReturnType = ActionReturnType<User[]>;

export type ActionRequestReturnType = ActionReturnType<undefined>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionFailureReturnType = ActionReturnType<any>;

export type ActionsReturnType =
  | ActionRequestReturnType
  | ActionSuccessReturnType
  | ActionFailureReturnType;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Arguments = {
  url: string;
  options?: any;
};
