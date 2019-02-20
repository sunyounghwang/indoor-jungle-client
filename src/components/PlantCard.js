import React from 'react';
import Card from 'react-bootstrap/Card';

const PlantCard = ({ plant, destroyPlant }) => {
  const { id, img_url, name, type_of, location } = plant;

  const handleClick = e => {
    e.preventDefault();
    destroyPlant(id);
  }

  return (
    <Card className="plant-card">
      <Card.Img variant="top" src={img_url}  />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="text-muted">{type_of}</Card.Subtitle>
        <Card.Text className="m-2">{location}</Card.Text>
        <Card.Link href="#" onClick={handleClick}>Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default PlantCard;
