import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { HouseSerivce } from "../services/HousesService.js";
import { generateId } from "../utils/generateId.js";

function _drawHouses() {
    let houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.CardTemplate)
    console.log(content)
    setHTML('houses', content)
}

export class HousesController {
    constructor() {
        console.log('Houses Controller')
        _drawHouses()
    }

    createHouse() {
        window.event.preventDefault
        const formEvent = window.event.target
        const formData = {
            id: generateId(),
            name: formEvent.houseName.value,
            year: formEvent.houseYear.value,
            bedrooms: formEvent.houseBedrooms.value,
            bathrooms: formEvent.houseBathrooms.value,
            sqft: formEvent.houseSqft.value,
            price: formEvent.housePrice.value,
            desc: formEvent.houseDescription.value,
            imgUrl: formEvent.houseImgUrl.value
        }
        console.log(formData)
        formEvent.reset()
        HouseSerivce.createHouse(formData)
    }
}