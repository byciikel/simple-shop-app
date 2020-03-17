import { decorate, action, observable } from 'mobx'

class Store {
  products = []

  setProduct(product) {
    this.products = product
  }
  
  async fetchProduct() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const productData = await fetch(url)
    const products = await productData.json()
    this.setProduct(products)
  }
}

decorate(Store, {
  products: observable,
  setProduct: action
})

const newStore = new Store()

export default newStore
