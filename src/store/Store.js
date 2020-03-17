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
}

decorate(Store, {
  products: observable,
  listProduct: observable,
})

const newStore = new Store()

export default newStore
