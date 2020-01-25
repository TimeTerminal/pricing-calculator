const {
  BASE_PRICE,
  ADD_ONS,
  CUTOFF_FEES,
  DISCOUNT_PERCENT_APPLIED,
  ADMIN_FEES_BASE_COST,
  ADMIN_FEES_PERCENTAGE,
  SALES_TAX_PERCENTAGE
} = require('./constants');

export function priceCalculator(totalAddonsCost) {
  let netPrice = BASE_PRICE;
  if (totalAddonsCost !== undefined) {
    netPrice += totalAddonsCost;
  }

  const costWithFees = ADMIN_FEES_BASE_COST + ADMIN_FEES_PERCENTAGE * netPrice;
  const priceWithTax = SALES_TAX_PERCENTAGE * costWithFees;

  return priceWithTax;
}

export function updateAddonsCost(checkedAddons) {
  const enabledAddons = Object.entries(checkedAddons).filter(addon => addon[1] === true
  );

  let totalAddonsCost = 0;
  ADD_ONS.map(addon => {
    if (enabledAddons.some(enabledAddon => enabledAddon[0] === addon.name)) {
      totalAddonsCost += addon.price;
    }
  })

  if (totalAddonsCost > CUTOFF_FEES) {
    totalAddonsCost = CUTOFF_FEES + (Math.abs(CUTOFF_FEES - totalAddonsCost) * DISCOUNT_PERCENT_APPLIED);
  }

  return totalAddonsCost;
}