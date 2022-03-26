/**
 * Action which gets sent when
 * the user enables or disables a filter
 */
interface PostReducerAction {
  type: "ADD" | "REMOVE";
  value: string;
}

export default PostReducerAction;
