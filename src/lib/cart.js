export default class Cart {
  itens = [];
  getTotal() {
    return this.itens.reduce((acc, current) => {
      acc = (current.product.price * current.quantity) + acc;
      return acc;
    }, 0);

  }
  add(item) {
    const ownThisItem = this.itens.find((i) => i.product.id === item.product.id);

    if (!ownThisItem) {
      this.itens.push(item);
    } else {
      const newArray = this.itens.map(i => {
        if (i.product.id === item.product.id) {
          i.quantity = (i.quantity + item.quantity);
        }
        return i;
      });

      this.itens = newArray;
    }



  }
  remove(idToRemove) {
    const newArray = this.itens.filter(i => i.product.id !== idToRemove);
    this.itens = newArray;
  }
};
