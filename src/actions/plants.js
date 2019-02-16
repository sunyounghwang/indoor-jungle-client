export const fetchPlantsSuccess = plants => ({ type: "FETCH_PLANTS_SUCCESS", plants });

export const fetchPlants = () => {
  return dispatch => {
    fetch(`http://localhost:3001/api/plants`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(plants => dispatch(fetchPlantsSuccess(plants)))
      .catch(error => console.log('There was an error: ' + error.message));
  };
};
