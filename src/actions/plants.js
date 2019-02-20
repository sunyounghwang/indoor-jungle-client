export const fetchPlantsSuccess = plants => ({
  type: "FETCH_PLANTS_SUCCESS", plants
});

export const createPlantSuccess = plant => ({
  type: "CREATE_PLANT_SUCCESS", plant
});

export const destroyPlantSuccess = id => ({
  type: "DESTROY_PLANT_SUCCESS", id
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

export const destroyPlant = id => {
  const data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  return dispatch => {
    fetch(`http://localhost:3001/api/plants/${id}`, data)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(destroyPlantSuccess(data.id)))
      .catch(error => console.log('There was an error: ' + error.message));
  };
}
