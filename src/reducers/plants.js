export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PLANTS_SUCCESS":
      return action.plants;
    case "CREATE_PLANT_SUCCESS":
      return state.concat(action.plant);
    case "UPDATE_PLANT_SUCCESS":
      return state.map(plant => {
        if (plant.id === action.plant.id) {
          return Object.assign({}, plant, {
            name: action.plant.name,
            type_of: action.plant.type_of,
            location: action.plant.location,
            img_url: action.plant.img_url
          });
        }
        return plant;
      });
    case "DESTROY_PLANT_SUCCESS":
      return state.filter(plant => plant.id !== action.id);
    default:
      return state;
    }
}
