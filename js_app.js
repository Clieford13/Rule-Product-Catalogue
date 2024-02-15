fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const ListingElement = document.getElementById("Listing");
    data.forEach(product => {
      const productItem = document.createElement("div");
      // Adding Bootstrap grid classes
      productItem.classList.add('col-md-4', 'mb-4'); 
      // Initialize click counter for each product
      let clickCount = 0; 
      productItem.innerHTML = `
           <div class="card">
           <div class="card-body">
               <h5 class="card-title">${product.Product_Name}</h5>
               <p class="card-text">${product.Product_Description}</p>
               <p class="card-text">Price: $${product.Product_Price}</p>
               <p class="card-text">Date Added: ${product.Product_Date_Added}</p>
               <p class="card-text">Expiration Date: ${product.Product_Expiration_Date}</p>
               <button class="btn btn-primary" id="addToCartBtn${product.Product_Name}" onclick="addToCart('${product.Product_Name}')">Add to Cart</button>
               <span id="clickCount${product.Product_Name}">0</span> Clicks
             </div>
           </div>
           `;
           ListingElement.appendChild(productItem);
         });
       })
       .catch(error => console.error('Error fetching data:', error));

       // Define addToCart function globally
       function addToCart(productName) {