import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "./styles/index.scss";

// REDUX
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getPosts } from "./actions/post_firebase.action";
import { getUsers } from "./actions/user.action";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getPosts());
store.dispatch(getUsers());

render(
  //Remove StrictMode for production
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
