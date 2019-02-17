import React from 'react';
import Card from 'react-bootstrap/Card';

const Plant = ({ plant }) => {
  const { img_url, name, type_of, location } = plant;

  return (
    <Card className="plant-card">
      <Card.Img variant="top" src={img_url}  />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="text-muted">{type_of}</Card.Subtitle>
        <Card.Text className="m-2">{location}</Card.Text>
        <Card.Link href="#">View More</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Plant;
