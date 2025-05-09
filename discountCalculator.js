function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger
    for (let i = 1; i < quantity; i++) {
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}

calculateDiscountedPrice(2,50)
console.log(calculateDiscountedPrice(2,50))
module.exports = calculateDiscountedPrice;
