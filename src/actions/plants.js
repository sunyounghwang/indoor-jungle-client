export const fetchPlantsSuccess = plants => ({
  type: "FETCH_PLANTS_SUCCESS", plants
});

export const createPlantSuccess = plant => ({
  type: "CREATE_PLANT_SUCCESS", plant
});

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

export const createPlant = plant => {
  const data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(plant)
  };

  return dispatch => {
    fetch(`http://localhost:3001/api/plants`, data)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(plant => dispatch(createPlantSuccess(plant)))
      .catch(error => console.log('There was an error: ' + error.message));
  };
};
