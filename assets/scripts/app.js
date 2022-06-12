const productList = {
  products: [
    {
      title: 'A Pillow',
      imageUrl: 'https://contents.mediadecathlon.com/p1749048/f0b275c3207e208e12771a5c385d3ff8/p1749048.jpg?format=auto&quality=70&f=1024x0',
      price: 19.99,
      description: 'A soft pillow!',
    },
    {
      title: 'A Pillow',
      imageUrl: 'https://marvel-b1-cdn.bc0a.com/f00000000083977/www.coit.com/sites/default/files/styles/original/public/media/2018-10/cofee-stain-card-large.jpg?itok=I1QoE5H4',
      price: 89.99,
      description: 'A which you might like - or not',
    },
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
