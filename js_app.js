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