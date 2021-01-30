function discountPrices1 (prices, discount) {
    var discounted = [];
    var finalPrice = 0;

    for(var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100; 
        discounted.push(finalPrice); 
    }

    console.log(i);
    console.log(discountedPrice);
    console.log(finalPrice);

    return discounted;
}

function discountPrices2 (prices, discount) {
    let discounted = [];
    let finalPrice = 0;

    for(let i = 0; i < prices.length; i++) {
        let discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100; 
        discounted.push(finalPrice); 
    }

    console.log(i);
    console.log(discountedPrice);
    console.log(finalPrice);

    return discounted;
}

function discountPrices3 (prices, discount) {
    const discounted = [];
    let finalPrice = 0;

    for(var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100; 
        discounted.push(finalPrice); 
    }

    console.log(i);
    console.log(discountedPrice);
    console.log(finalPrice);

    return discounted;
}

// console.log(discountPrices1([100, 200, 300], .5));

// console.log(discountPrices2([100, 200, 300], .5));

console.log(discountPrices3([100, 200, 300], .5));