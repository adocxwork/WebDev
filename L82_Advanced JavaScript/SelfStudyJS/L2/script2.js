let prices = [250,645,300,900,50];
console.log(prices);
for(let i=0; i<prices.length; i++){
    prices[i] = (prices[i]/100)*90;
}
console.log(prices);