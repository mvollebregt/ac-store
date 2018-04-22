// TODOS MODULE
export const ADD_TODO = '[Todos] ADD_TODO';

// [Todos] is om name clashes the voorkomen

export class AddTodo {
  readonly type = ADD_TODO;
  constructor(public payload: any) {}
}

