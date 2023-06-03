import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import categoryReducer from "./reducers/categoryReducer";
import { authReducer } from "./reducers/authReducer";




const rootReducer = combineReducers({
    auth : authReducer,
    category : categoryReducer,
 
})

const initialState = {}

const middleware = [thunk];



const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;