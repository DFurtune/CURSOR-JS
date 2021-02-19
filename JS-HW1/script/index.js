const priceToyota = 15.678;
const priceMazda = 123.965;
const priceLexus = 90.2345;

const maxPrice = Math.max(priceToyota, priceMazda, priceLexus);
console.log(`Максимальна ціна становить: ${maxPrice}`)
const minPrice = Math.min(priceToyota, priceMazda, priceLexus);
console.log(`Мінімальна ціна становить: ${minPrice}`)

const sumPrice = priceToyota + priceMazda + priceLexus
console.log(`Сума всіх товарів становить: ${sumPrice}`)

const floorPriceToyota = Math.floor(priceToyota)
const floorPriceMazda = Math.floor(priceMazda);
const floorPriceLexus = Math.floor(priceLexus);
const sumFloorPrice = floorPriceToyota + floorPriceMazda + floorPriceLexus;
console.log(`Сума всіх товарів з округленням в меньшу сторону становить: ${sumFloorPrice}`);


const sumRoundPrice = Math.round(sumPrice/100)*100
console.log(`Сума всіх товарів з округленням до сотень становить: ${sumRoundPrice}`)

if (sumFloorPrice % 2 === 0) {
    console.log(`Сума товарів парне число та становить: ${true}`);
}
else {
    console.log(`Сума товарів не парне число та становить: ${false}`)
}

const cashClient = 500
const oddMoney = cashClient - sumPrice
console.log(`Решта становить: ${oddMoney}`)

const averagePrice = sumPrice / 3;
const roundAveragePrice = Math.round(averagePrice/0.01)*0.01
console.log(`Середня ціна становить: ${roundAveragePrice}`);

const discont = (Math.random() * sumRoundPrice).toFixed(2)
console.log(`Знижка становить: ${discont}`)
const amountToPay = (sumRoundPrice - discont).toFixed(2);
console.log(`До оплати: ${amountToPay}`)
const netProfit = (sumRoundPrice / 2 - discont).toFixed(2);
console.log(`Чистий прибуток становить: ${netProfit}`)

