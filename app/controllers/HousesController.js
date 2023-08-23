import { AppState } from "../AppState.js";

function _drawHouses() {
    let houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.CardTemplate)
    // console.log('drawing cars', content)
    setHTML('houses', content)
}

export class HousesController {
    constructor() {
        console.log('Houses Controller')
        let housesArr = AppState.houses
        console.log(housesArr)
        _drawHouses()
    }
}