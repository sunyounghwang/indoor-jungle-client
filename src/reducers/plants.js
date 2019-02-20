export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PLANTS_SUCCESS":
      return action.plants;
    case "CREATE_PLANT_SUCCESS":
      return state.concat(action.plant);
    case "DESTROY_PLANT_SUCCESS":
      return state.filter(plant => plant.id !== action.id);
    default:
      return state;
    }
}
