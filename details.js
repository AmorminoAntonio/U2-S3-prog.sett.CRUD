const params = new URLSearchParams(window.location.search);
const id = params.get("prodId");
const URL = "https://striveschool-api.herokuapp.com/api/product/" + id;

window.addEventListener("DOMContentLoaded", function () {
  fetch(URL, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWZmMjhhZDEyOTAwMTU4NzZjNjciLCJpYXQiOjE3MzE2NjU5MDYsImV4cCI6MTczMjg3NTUwNn0.3NNkaHyHw4DvUC6CRZRkHQIt7LcsWIDU6cYHTD-7lko"
    }
  })
    .then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("siamo spiacenti, però non siamo riusciti a reperire i dati richiesti.");
        
      }
    })

    .then((product) => {
      console.log(product);

      const row = document.getElementById("rowCard");
      const col = document.createElement("div");
      col.className = ("col col-4");
      
      col.innerHTML = `
      
      <img src="${product.imageUrl}" id="imageUrl" alt="${product.description}"/>
      <h5 id="name" class="card-title">${product.name}</h5>
      <p id="description" class="card-text">${product.description}</p>
      <p id="brand" class="card-text">${product.brand}</p>
      <p id="price" class="card-text">${product.price}€</p>
       `;
      
            row.appendChild(col)
    })

    .catch((err) => console.log(err));
});

