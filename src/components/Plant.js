import React from 'react';

const Plant = ({ plant }) => {
  const { img_url, name, type_of, location } = plant;

  return (
    <div>
      {name}
    </div>
  );
}

export default Plant;
