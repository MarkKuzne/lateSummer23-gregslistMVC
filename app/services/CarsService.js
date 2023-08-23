import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { saveState } from "../utils/Store.js";

function _saveCars() {
    saveState('cars', AppState.cars)
}

class CarsService {
    deleteCar(carId) {
        let foundCar = AppState.cars.find(car => car.id == carId) // NOTE this will be an important step later....
        let filteredCarArr = AppState.cars.filter(car => car.id != carId) // NOTE filter out the car we want to remove
        AppState.cars = filteredCarArr // NOTE set the appstate to the returned array that filters out the car we want to remove
        _saveCars() //NOTE save the newly filtered appstate.cars array back to local storage
    }
    createCar(formData) {
        let newCar = new Car(formData) // NOTE pass the form object through the Car constructor
        AppState.cars.push(newCar) // NOTE insert the new Car into the AppState
        console.log(AppState.cars)
        AppState.emit('cars') //NOTE emits change from AppState.cars so that our listener can catch the change
        _saveCars() // NOTE save the AppState.cars array to localstorage...makes sure our new car persists on refresh
    }

}

export const carsService = new CarsService()