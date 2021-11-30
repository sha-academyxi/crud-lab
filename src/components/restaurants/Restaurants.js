import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          deleteRestaurant={this.props.deleteRestaurant}
          updateRestaurant={this.props.updateRestaurant}
          />)}
      </ul>
    );
  }
};

export default Restaurants;
