import { Car } from "./models/Car.js"
import { House } from "./models/House.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { generateId } from "./utils/generateId.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  cars = loadState('cars', [Car])

  // cars = [

  //   new Car({
  //     make: "BMW",
  //     model: "335i",
  //     year: 1973,
  //     imgUrl: "https://bringatrailer.com/wp-content/uploads/2020/05/2011_bmw_335_15901301926d884f6124Photo-May-03-1-45-59-PM.jpg?fit=940%2C627",
  //     price: 50000,
  //     isNew: true,
  //     description: "Mint",
  //     color: "silver"
  //   }),
  //   new Car(
  //     {
  //       make: "Mazda",
  //       model: "Miata",
  //       year: 1997,
  //       imgUrl: "https://bringatrailer.com/wp-content/uploads/2022/06/1997_mazda_mx-5-miata_img_1612-5-84972.jpg?fit=940%2C626",
  //       price: 8000,
  //       isNew: false,
  //       description: "Perfect for cruisin' down the coast",
  //       color: "black"
  //     }
  //   ),
  //   new Car(
  //     {
  //       make: "Muscle",
  //       model: "Car",
  //       year: 2043,
  //       imgUrl: "https://media.tenor.com/EgMfjYtMD3oAAAAC/car-jump.gif",
  //       price: 900000,
  //       isNew: false,
  //       description: "Getcha one of these bad boys",
  //       color: "red"
  //     }
  //   )

  // ]



  // NOTE Used to load initial data
  init() {

  }

  houses = [
    new House(
      {
        id: generateId(),
        year: 1959,
        name: 'Old House',
        bedrooms: 8,
        bathrooms: 2,
        sqft: 700,
        price: 156000,
        description: 'very very old house, it stinks and looks like it stinks',
        imgUrl: 'https://images.unsplash.com/photo-1592658221410-0f5c3615e7fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      }),
    new House({
      id: generateId(),
      year: 1999,
      name: 'Newer House',
      bedrooms: 3,
      bathrooms: 1,
      sqft: 1700,
      price: 230000,
      description: 'Unlike the last house, this one does not stink and actually smells amazing. No pets allowed tho.',
      imgUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    }
    ),
    new House({
      id: generateId(),
      year: 1889,
      name: 'Shak',
      bedrooms: 1,
      bathrooms: 0,
      sqft: 300,
      price: 300,
      description: 'Ugly stinky shak',
      imgUrl: 'https://media.istockphoto.com/id/538509975/photo/ruined-shed.jpg?s=612x612&w=0&k=20&c=795nNk41Bptp9OBADrv7ZrowKrFWqntT1SmKRISr7ps=',
    }
    )]

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
