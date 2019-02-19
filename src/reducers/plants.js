export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PLANTS_SUCCESS":
      return action.plants;
    case "CREATE_PLANT_SUCCESS":
      return state.concat(action.plant);
    default:
      return state;
    }
}
