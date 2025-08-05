export const initialStore = () => ({
  people: [],
  favorites: [],
  planets: []
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "SET_PEOPLE":
      return {
        ...store,
        people: action.payload
      };
    case "ADD_FAVORITE":
      // Prevent duplicates
      if (store.favorites.some(fav => fav.uid === action.payload.uid && fav.type === action.payload.type)) {
        return store;
      }
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };
    case "REMOVE_FAVORITE":
      return {
        ...store,
        favorites: store.favorites.filter(fav => !(fav.uid === action.payload.uid && fav.type === action.payload.type))
      };
    default:
      throw Error('Unknown action.');   throw Error('Unknown action.');
  } }




