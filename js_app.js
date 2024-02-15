fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const PRODUCTSElement = document.getElementById("PRODUCTS");
    data.forEach(roduct => {
      const productItem = document.createElement("div");