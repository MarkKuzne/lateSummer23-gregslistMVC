export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get CardTemplate() {
    return /*html*/ `
        <div class="col-12 col-md-6 d-flex flex-row justify-content-center">
<div class="card" style="width: 28rem;">
  <img class="card-img-top h-50" src='${this.imgUrl}' alt="Card image cap">
  <div class="card-body">
    <div class="d-flex flex-row justify-content-center p-0 m-0 house-title-container">
    <h5 class="card-title px-2">${this.name}</h5>
    <h5 class="card-title px-2">${this.sqft} Square Feet</h5>
    </div>
    <div class="d-flex flex-row justify-content-center p-0 m-0 house-bed-bath-container">
    <h5 class="card-title px-2">${this.bedrooms} Bedrooms</h5>
    <h5 class="card-title px-2">${this.bathrooms} Bathrooms</h5>
    </div>
    <h5 class="card-title">Cost: $${this.price}</h5>
    <p class="card-text">${this.description}</p>
    <a href="#" class="btn btn-primary">Buy me pls</a>
  </div>
</div>
</div>`
  }
}