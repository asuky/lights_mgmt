import { combineReducers } from 'redux';
import { button } from './button';

// 上で import しつつ個別 reducer を追加する
const rootReducer = combineReducers({
    button
});

export default rootReducer;
