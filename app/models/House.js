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
  <img class="card-img-top" src='${this.imgUrl}' alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${this.name}</h5>
    <p class="card-text">${this.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>`
    }
}