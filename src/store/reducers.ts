import * as fromActions from './actions';
import * as fromStore from './index';

export const initialTodosState = {
  loaded: false,
  loading: false,
  todos: [{label: 'Eat Pizza', complete: false}]
};

export function reducer(state = initialTodosState, action) {
  console.log(state);
  switch (action.type) {
    case fromStore.ADD_TODO: {
      const todo = action.payload;
      // console.log(':::', todo);
      const todos = [...state.todos, todo];
      return { ...state, todos };
    }
  }
  return state;
}
