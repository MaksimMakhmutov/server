import { createStore } from './createStore';
import { gameReducer } from './reducer';

export const store = createStore(gameReducer);
