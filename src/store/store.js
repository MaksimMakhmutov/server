import { createStore } from './createStore';
import { gameReducer } from './reducer';

const store = createStore(gameReducer);

export default store;
