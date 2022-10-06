export enum PostReducerActionType {
  ADD_CATEGORY = "ADD_CATEGORY",
  REMOVE_CATEGORY = "REMOVE_CATEGORY",
  SET_QUERY = "SET_QUERY",
}

/**
 * Action which gets sent when
 * the user enables or disables a filter
 */
export interface PostReducerAction {
  type: PostReducerActionType;
  value: string;
}
