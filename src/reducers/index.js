import {
    combineReducers
} from "redux";
import userReducer from "./user";
import storeReducer from "./store"
import {
    createNavigationReducer
} from "react-navigation-redux-helpers";
import {AppNavigator} from "../containers/AppNavigator";


const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
    userState: userReducer,
    storeState: storeReducer,
    navState: navReducer
})

export default rootReducer;