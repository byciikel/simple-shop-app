import { decorate, action, observable } from 'mobx'
import _ from 'lodash'

class Store {
  products = []

  setProduct(product) {
    this.products = product
  }

  async fetchProduct() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const productData = await fetch(url)
    const products = await productData.json()
    const chunkProducts = _.chunk(products, 9)
    this.setProduct(chunkProducts)
  }

  cart = []

  setCart(action, product) {
    switch (action) {
      case 'increment':
        this.cart = [...this.cart, product]
        break
      case 'decrement':
        let indexOfCart = _.findIndex(this.cart, { 'id': product.id })
        _.pullAt(this.cart, [indexOfCart])
        this.cart = [...this.cart]
        break
      case 'reset':
        this.cart = product
        break
      default: break
    }
  }
}

decorate(Store, {
  products: observable,
  listProduct: observable,
  cart: observable,
  setCart: action
})

const newStore = new Store()

export default newStore
