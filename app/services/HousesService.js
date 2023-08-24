import { AppState } from "../AppState.js";
import { House } from "../models/House.js";

class HouseService {
    createHouse(formData) {
        let newHouse = new House(formData)
        AppState.newHouse.push(newHouse)
        AppState.emit('houses')
    }
}

export const HouseSerivce = new HouseService()