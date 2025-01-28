async function todo() {
    const response = await axios('https://fakestoreapi.com/products/');


    const data = response.data;
    const productList = document.querySelector('.products-list');
  
    data.forEach(function (product) {
      productList.innerHTML += `
        <li class="product-item">
          <h3 class="product-name">${product.title}</h3>
          <img src="${product.image}" alt="." class="product-image">
          <p class="product-description">${product.description}</p>
          <span class="product-price">$${product.price}</span>
        </li>`;
    });
}
  
todo();





  
  