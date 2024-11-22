const URL = "https://striveschool-api.herokuapp.com/api/product/";



const getProducts = () => {

    fetch(URL, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWZmMjhhZDEyOTAwMTU4NzZjNjciLCJpYXQiOjE3MzE2NjU5MDYsImV4cCI6MTczMjg3NTUwNn0.3NNkaHyHw4DvUC6CRZRkHQIt7LcsWIDU6cYHTD-7lko"
        }
    })
    .then(res => {
        console.log(res)
        if (res.ok) {
            return res.json();
        }
    })

    .then(products => {
        console.log(products);

        products.forEach(product => {

        const row = document.getElementById("rowCard");
        const col = document.createElement("div");
        col.className = "col border border-1 my-4";

            col.innerHTML = `
            <div class= "container">
            <img src="${product.imageUrl}" class="img-fluid mt-3 " id="imageUrl" alt="${product.description}"/>
              <h5 id="name" class="card-title">${product.name}</h5>
              <p id="brand" class="card-text">${product.brand}</p>
              <p id="price" class="card-text">${product.price}€</p>
               <a id="btnModifica" href="./back-office.html?prodId=${product._id}" class="btn btn-primary mb-3">Modifica</a>
              <a id="btnMoreInfo" href="./details.html?prodId=${product._id}" class="btn btn-secondary mb-3">More Info</a>
              </div> `;
    
            row.appendChild(col)
        });

      })
      .catch(err => console.log(err))
  };
    



window.addEventListener("DOMContentLoaded", () => {
    getProducts();
})



