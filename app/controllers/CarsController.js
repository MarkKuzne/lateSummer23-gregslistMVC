import { AppState } from "../AppState.js"
import { carsService } from "../services/CarsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

// NOTE this is a private fn... industry/best practice is to name these functions with an '_' in front
// NOTE this is 'private' because it is declared OUTSIDE of the class... think of this as a background process
function _drawCars() {
    let cars = AppState.cars
    let content = ''
    cars.forEach(car => content += car.CardTemplate)
    // console.log('drawing cars', content)
    setHTML('cars', content)
}

export class CarsController {
    // NOTE if we want something to happen as soon as this controller mounts (page loads), put it here
    constructor() {
        console.log('hello from the cars controller')
        console.log('we got cars', AppState.cars)
        _drawCars()
        AppState.on('cars', _drawCars) //NOTE this is a 'listener' for AppState.cars --> if AppState.cars emits or changes, invoke _drawCars()
    }

    createCar() {
        window.event.preventDefault() // NOTE prevents the page from refreshing on submit
        const formEvent = window.event.target // NOTE grabs the entire form elem from the on submit
        console.log('form event', formEvent)

        // REVIEW this is the manual way of building a form data object
        // const formData = {
        //     // @ts-ignore
        //     make: formEvent.make.value, // NOTE grabs the form input w/ name "make"
        //     // @ts-ignore
        //     model: formEvent.model.value // NOTE grabs the form input w/ name "model"
        //     // year:
        //     // imgUrl:
        // }

        const formData = getFormData(formEvent) //NOTE this is our form data object 
        // NOTE we do this here bc this is part of handling the user input and is not manipulating data (appstate)
        if (formData.isNew == "on") {
            formData.isNew = true
        }
        console.log('form data obj', formData)

        formEvent.reset() // NOTE clears the form after submission

        carsService.createCar(formData)
    }

    async deleteCar(carId) {
        // NOTE we use await here to WAIT for the response before we run the next lines of code
        // NOTE we will be going over async/await in depth next week
        if (await Pop.confirm("Are you sure you want to remove this car?")) {
            console.log('deleting', carId)
            carsService.deleteCar(carId) //NOTE pass the id from the onclick to the service to perform business logic
        }
    }

}