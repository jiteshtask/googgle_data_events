import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import { reducer } from './reducers/index';

const date_midddleware= applyMiddleware(ReduxThunk)(createStore);
export const date_store= date_midddleware(reducer);