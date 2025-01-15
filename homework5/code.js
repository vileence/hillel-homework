const products = [
    {
      name: "Смартфон",
      price: 25000,
      stock: 10,
      category: "Электроника",
      rating: 4.7,
      isOnSale: false,
    },
    {
      name: "Ноутбук",
      price: 55000,
      stock: 5,
      category: "Электроника",
      rating: 4.5,
      isOnSale: true,
    },
    {
      name: "Наушники",
      price: 3000,
      stock: 25,
      category: "Аксессуары",
      rating: 4.2,
      isOnSale: false,
    },
    {
      name: "Клавиатура",
      price: 1500,
      stock: 15,
      category: "Периферия",
      rating: 3.9,
      isOnSale: true,
    },
    {
      name: "Монитор",
      price: 12000,
      stock: 8,
      category: "Электроника",
      rating: 4.8,
      isOnSale: false,
    },
  ];
  
  
  products.forEach(function(product) {
    console.log(`У нас є ${product.name}.`);
  });
  
 
  products.forEach(function(product) {
    console.log(`У продукта ${product.name} рейтінг ${product.rating}.`);
  });
  
  
  products.forEach(function(product) {
    console.log(`В наявності є ${product.stock} одиниць ${product.name}.`);
  });
  