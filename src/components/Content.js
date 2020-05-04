import React, { Component } from "react";
import '../index.scss';
import { ADD_ONS } from '../constants';
import { priceCalculator, updateAddonsCost } from '../helpers';

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      totalAddonsCost: 0,
      totalPriceOfCar: priceCalculator(0)
    }
  }

  componentDidMount() {
    ADD_ONS.map(addon => {
      const blah = addon.name;
      this.setState({
        [blah]: false
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const totalAddonsCost = updateAddonsCost(this.state);

    if (prevState.totalAddonsCost !== totalAddonsCost) {
      const totalPriceOfCar = priceCalculator(this.state.totalAddonsCost);
      this.setState({
        totalAddonsCost,
        totalPriceOfCar
      })
    }
  }

  toggleAddon({ target: { name, checked } }) {
    this.setState({
      [name]: checked,
    })
  }

  formatPrice(price) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  }

  render() {
    return (
      <section className='section'>
        <h1 className='header'>Pricing Calculator</h1>
        <img src="/images/BRZ.jpg" alt="Car" className='image' />

        <form className='form'>
          {ADD_ONS.map((addon) => {
            return (
              <label key={addon.name} className={
                `checkboxContainer ${this.state[addon.name] === true && 'highlight'}`}>
                <input
                  name={addon.name}
                  type='checkbox'
                  className='checkbox'
                  onChange={(e) => this.toggleAddon(e)}
                />
                <div className='labelContainer'>
                  <span className='label'>{addon.name}</span>
                  <span className='label price'>{this.formatPrice(addon.price)}</span>
                </div>
              </label>
            )
          })}
        </form>

        <span className='container'>
          <h3>Total Addons Cost</h3>
          {this.state !== null && this.state.totalAddonsCost > 8000 &&
            <h4 className='discount'>Discount Applied!</h4>}
          <h3 className='price'>
            {this.state !== null && `${this.formatPrice(this.state.totalAddonsCost)}`}
          </h3>
        </span>

        <span className='container'>
          <h3>Total Cost</h3>
          <h3 className='price'>
            {this.state !== null && `${this.formatPrice(this.state.totalPriceOfCar)}`}
          </h3>
        </span>
      </section>
    )
  }
}