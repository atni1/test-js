const model = 'Air jordan 1 low'

function getPrice(model) {
    switch (model) {
        case 'Air jordan 1 low': return 11990 
        case 'Air jordan 1 high bread': return 33000
        case 'Air jordan 1 high david': return 9790
        case 'Air jordan 1 high travis': return 15790
        case 'Air jordan 5': return 17990
        case 'Yeezy 700 v3': return 27000
        case 'Air jordan 3': return 9978
        case 'Air force 1': return 9790
        case 'Dlilard 1': return 2870
        case 'Dlilard 2': return 4670
        case 'Dlilard 3': return 6150
        case 'Kobe 11': return 7190
        case 'EQT': return 10990
        case 'iniki': return 4790
        case 'Dunk': return 4590
        case 'NMD r2': return 4590
        case 'Solder': return 7990
        case 'KD 8': return 10990
        case 'LeBron 12': return 11990
        case 'Vans': return 6780
        case 'TNF': return 15790
        case 'Duckboot force': return 6990
        case 'Timberland': return 11790
        case 'Kyri': return 10790
        case 'presto': return 4790
        default: return null
    }  
}

function getPriceByCount(model, count = 1) {
    const price = getPrice(model)

    if (price == null) return null

    return price * count
}

console.log(getPriceByCount(model) + getPriceByCount('Air jordan 1 high bread') + getPriceByCount('Air jordan 1 high david') +  getPriceByCount('Air jordan 1 high travis') +  getPriceByCount('Air jordan 5') +  getPriceByCount('Yeezy 700 v3') + getPriceByCount('Air jordan 3') + getPriceByCount('Air force 1') + getPriceByCount('Dlilard 1') + getPriceByCount('Dlilard 2', 3) + getPriceByCount('Dlilard 3') + getPriceByCount('Kobe 11') + getPriceByCount('EQT') + getPriceByCount('iniki') + getPriceByCount('Dunk') + getPriceByCount('NMD r2') + getPriceByCount('Solder') + getPriceByCount('KD 8') + getPriceByCount('LeBron 12', 2) + getPriceByCount('Vans') + getPriceByCount('TNF') + getPriceByCount('Duckboot force') + getPriceByCount('Timberland') + getPriceByCount('Kyri') + getPriceByCount('Kyri'))
