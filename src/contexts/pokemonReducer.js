export const initialState = {
  pokemon: null,
  loading: false,
  error: null
};

export function pokemonReducer(state, action) {
  switch (action.type) {
    case "START":
      return { ...state, loading: true, error: null };

    case "SUCCESS":
      return { ...state, loading: false, pokemon: action.payload };

    case "ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}