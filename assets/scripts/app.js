class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  products: [
    new Product('A Pillow', 'https://contents.mediadecathlon.com/p1749048/f0b275c3207e208e12771a5c385d3ff8/p1749048.jpg?format=auto&quality=70&f=1024x0', 19.99, 'A soft pillow!'),
    new Product(
      'A Carpet',
      'https://marvel-b1-cdn.bc0a.com/f00000000083977/www.coit.com/sites/default/files/styles/original/public/media/2018-10/cofee-stain-card-large.jpg?itok=I1QoE5H4',
      89.99,
      'A which you might like - or not'
    ),
  ],

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
