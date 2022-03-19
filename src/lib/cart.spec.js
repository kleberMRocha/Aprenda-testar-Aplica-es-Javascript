import Cart from './cart';

let cart;

let product = {
  id: 'P01',
  title: 'Adidas running shoes - men',
  price: 35388,
};

let product2 = {
  id: 'P02',
  title: 'Adidas running shoes - women',
  price: 41872,
};

beforeEach(() => cart = new Cart());

describe('cart.js', () => {

  it('should return 0 when getTotal() is executed in a newly created instance', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it('should multiply quantity and price and receive the total amount', () => {
    const item = {
      product,
      quantity: 2,
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(70776);
  });

  it('should ensure no more than on product exists at a time', () => {
    cart.add({
      product,
      quantity: 2,
    });

    cart.add({
      product,
      quantity: 1,
    });

    expect(cart.getTotal()).toEqual(106164);
  });

  it('should update total when a product gets included and then removed', () => {
    cart.add({
      product,
      quantity: 1,
    });

    cart.add({
      product: product2,
      quantity: 1,
    });

    cart.remove('P02');

    expect(cart.getTotal()).toEqual(35388);
  });
});


