const basket = [
    {
        brand: 'Air jordan',
        model: '1 low',
        price: 11990,
        qty: 1
    },
    {
        brand: 'Air jordan',
        model: '1 high bread',
        price: 33000,
        qty: 1
    },
    {
        brand: 'Air jordan',
        model: '1 high david',
        price: 9790,
        qty: 1
    },
    {
        brand: 'Air jordan',
        model: '1 high travis',
        price: 15790,
        qty: 1
    },
    {
        brand: 'Air jordan',
        model: '5',
        price: 17990,
        qty: 1
    },
    {
        brand: 'Adidas',
        model: 'Yeezy 700 v3',
        price: 27000,
        qty: 1
    },
    {
        brand: 'Air jordan',
        model: '3',
        price: 9978,
        qty: 1
    },
    {
        brand: 'Nike',
        model: 'Air force 1',
        price: 9790,
        qty: 1
    },
    {
        brand: 'Adidas',
        model: 'Dlilard 1',
        price: 2870,
        qty: 1
    },
    {
        brand: 'Adidas',
        model: 'Dlilard 2',
        price: 4670,
        qty: 3
    },
    {
        brand: 'Adidas',
        model: 'Dlilard 3',
        price: 6150,
        qty: 1
    },
    {
        brand: 'Nike',
        model: 'Kobe 11',
        price: 7190,
        qty: 1
    },
    {
        brand: 'Adidas',
        model: 'EQT',
        price: 10990,
        qty: 1
    },
    {
        brand: 'Adidas',
        model: 'iniki',
        price: 4790,
        qty: 1
    },
    {
        brand: 'Nike',
        model: 'Dunk',
        price: 4590,
        qty: 1
    },
    {
        brand: 'Adidas',
        model: 'NMD r2',
        price: 4590,
        qty: 1
    },
    {
        brand: 'Nike',
        model: 'Solder',
        price: 7990,
        qty: 1
    },
    {
        brand: 'Nike',
        model: 'KD 8',
        price: 10990,
        qty: 1
    },
    {
        brand: 'Nike',
        model: 'LeBron 12',
        price: 11990,
        qty: 2
    },
    {
        brand: 'Vans',
        model: 'SKi-8',
        price: 6780,
        qty: 1
    },
    {
        brand: 'TNF',
        model: 'Back-to berlrle',
        price: 15790,
        qty: 1
    },
    {
        brand: 'Nike',
        model: 'Duckboot force',
        price: 6990,
        qty: 1
    },
    {
        brand: 'Timberland',
        model: 'boot',
        price: 11790,
        qty: 1
    },
    {
        brand: 'Nike',
        model: 'Kyri',
        price: 10790,
        qty: 1
    },
    {
        brand: 'Nike',
        model: 'presto',
        price: 4790,
        qty: 1
    },
]

function getTolalPrice(basket) {
    let tolalBasketPrice = 0
    for (const prod of basket) {
        tolalBasketPrice += prod.price *= prod.qty
    }
    return tolalBasketPrice
}

console.log('Total spent on sneaker: ' + getTolalPrice(basket) + '₽')


