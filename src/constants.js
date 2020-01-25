const BASE_PRICE = 24999;
const ADD_ONS = [
  {
    "name": "AWD Drivetrain",
    "price": 2500
  },
  {
    "name": "GPS Navigation",
    "price": 2000
  },
  {
    "name": "Winter Tire Package",
    "price": 2000
  },
  {
    "name": "Sport Package",
    "price": 3500
  },
  {
    "name": "Live Traffic Updates",
    "price": 1500
  },
  {
    "name": "Roadside Assistance",
    "price": 2500
  },
]

const CUTOFF_FEES = 8000;
const DISCOUNT_PERCENT_APPLIED = 0.5;
const ADMIN_FEES_BASE_COST = 1200;
const ADMIN_FEES_PERCENTAGE = 1.02;
const SALES_TAX_PERCENTAGE = 1.13;

module.exports = {
  BASE_PRICE,
  ADD_ONS,
  CUTOFF_FEES,
  DISCOUNT_PERCENT_APPLIED,
  ADMIN_FEES_BASE_COST,
  ADMIN_FEES_PERCENTAGE,
  SALES_TAX_PERCENTAGE
}