import React from 'react';

const Home = () => (
  <div className="home">
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Welcome to Indoor Jungle!</h1>
        <p className="lead">A web app for keeping track of your houseplants</p>
      </div>
    </div>
    <div>
      <h2>Start Your Jungle</h2>
      <p>
        Click the Plants link above to view your current collection<br />
        Then click Add a Plant and submit the form to add a new member to the family<br />
        Happy Planting!
      </p>

      <h3>Upcoming Features:</h3>
      <ul>
        <li>Edit plants</li>
        <li>Add notes</li>
        <li>Track chores</li>
        <li>Track age</li>
        <li>Archive past plants</li>
      </ul>
    </div>
  </div>
);

export default Home;
