import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor() {
    super()

    this.state = {
      text: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: '',
    })
  }

  handleChange = event => {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} onChange={this.handleChange} />
          <input type={'submit'}/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
