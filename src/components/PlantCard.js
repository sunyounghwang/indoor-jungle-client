import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const PlantCard = ({ plant, destroyPlant }) => {
  const { id, img_url, name, type_of, location } = plant;

  let src = img_url;
  if (!img_url) src = "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60";

  const handleClick = e => {
    e.preventDefault();
    destroyPlant(id);
  };

  return (
    <Card className="plant-card">
      <Card.Img variant="top" src={src}  />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="text-muted">{type_of}</Card.Subtitle>
        <Card.Text className="m-2">{location}</Card.Text>
        <Link className="card-link" to={`/plants/${id}/edit`}>Edit</Link>
        <Card.Link href="#" onClick={handleClick}>Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default PlantCard;
