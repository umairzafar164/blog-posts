import { combineReducers } from "redux";
import PostsReducer from "./PostsReducer";
import UsersReducer from "./UserReducer";

export default combineReducers(
    { posts: PostsReducer,
    users: UsersReducer }
    );
