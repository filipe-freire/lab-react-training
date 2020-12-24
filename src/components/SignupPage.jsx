import React, { PureComponent } from 'react';

export class SignupPage extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: 'john@doe.com',
      password: 'password',
      nationality: 'en',
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const property = event.target.name;

    this.setState({
      [property]: value,
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="email-input">Email</label>
        <input
          id="email-input"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <br />
        <label htmlFor="password-input">Password</label>
        <input
          id="password-input"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <br />
        <label htmlFor="nationality-input">Nationality</label>
        <select
          id="nationality-input"
          type="text"
          name="nationality"
          defaultChecked="en"
        >
          <option selected value="en">
            English
          </option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <br />
        <p> </p>
        <p>Your email is {this.state.email}</p>
      </div>
    );
  }
}

export default SignupPage;
