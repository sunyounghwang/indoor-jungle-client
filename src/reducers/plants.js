export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PLANTS_SUCCESS":
      return action.plants;
    default:
      return state;
    }
}
