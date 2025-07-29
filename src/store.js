export const initialStore = () => ({
  people: []
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "SET_PEOPLE":
      return {
        ...store,
        people: action.payload
      };
    case 'add_favorite':
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        )
      };
    default:
      throw Error('Unknown action.');
  }
}


