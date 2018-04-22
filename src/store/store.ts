export class Store {

  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialStoreState = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initialStoreState, {});
  }

  get value() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reduce(this.state, action);
    this.subscribers.forEach(fn => fn(this.state));
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    fn(this.state);
  }

  private reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      // newState.todos = this.reducers.todos(state.todos, action)
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }

}
