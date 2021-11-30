import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  constructor() {
    super()

    this.state = {
      editMode: false,
      editModeText: '',
    }
  }

  handleChange = event => {
    this.setState({
      editModeText: event.target.value,
    })
  }

  handleClickConfirm = event => {
    this.setState({
      editMode: false,
      editModeText: '',
    })
    this.props.updateRestaurant(this.props.restaurant.id, this.state.editModeText)
  }

  handleClickEdit = event => {
    this.setState({
      editMode: true,
      editModeText: this.props.restaurant.text,
    })
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {this.state.editMode
            ? <input value={this.state.editModeText} onChange={this.handleChange}/>
            : restaurant.text}
          {this.state.editMode
            ? <button onClick={this.handleClickConfirm}>✓</button>
            : null}
          {!this.state.editMode
            ? <button onClick={this.handleClickEdit}>...</button>
            : null}
          <button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>

          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
