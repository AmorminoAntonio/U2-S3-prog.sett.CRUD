const params = new URLSearchParams(window.location.search);
const id = params.get("prodId");
const URL = id
  ? "https://striveschool-api.herokuapp.com/api/product/" + id
  : "https://striveschool-api.herokuapp.com/api/product/";
const method = id ? "PUT" : "POST";


const handleSubmit = (e) => {
  e.preventDefault();

  const newProduct = {
    name: e.target.name.value,
    description: e.target.description.value,
    brand: e.target.brand.value,
    imageUrl: e.target.imageUrl.value,
    price: e.target.price.value
  };



  fetch(URL, {
    method,

    body: JSON.stringify(newProduct),

    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWZmMjhhZDEyOTAwMTU4NzZjNjciLCJpYXQiOjE3MzE2NjU5MDYsImV4cCI6MTczMjg3NTUwNn0.3NNkaHyHw4DvUC6CRZRkHQIt7LcsWIDU6cYHTD-7lko"
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })

    .then((product) => {
      console.log(product)
      
      if (id) {
        alert("risorsa modificata tramite id: " + product._id);
      } else {
        e.target.reset();
        alert("creata nuova risorsa tramite id: " + product._id);
      }
    })

    .catch((err) => console.log(err));
};

const handleDelete = () => {
  const hasConfirmed = confirm("sicuro di voler cancellare l'elemento?");

  if (hasConfirmed) {
    fetch(URL, {
      method: "DELETE"
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((deleteProduct) => {
        alert(
          "l'elemento con id " +
            deleteProduct._id +
            " è stata eliminata con successo"
        );
        window.location.assign("/");
      })

      .catch((err) => console.log(err));
  }
};


window.addEventListener("DOMContentLoaded", function () {
    
    const form = document.querySelector("form")
    form.onsubmit = handleSubmit;


    const submitBtn = document.getElementById("submitBtn");
    const deleteBtn = document.getElementById("deleteBtn");
    const subTitle = document.getElementById("subTitle");

    if (id) {
        subTitle.innerText = "- Modifica risorsa";
        submitBtn.className = "btn btn-success";
        submitBtn.innerText = "Modifica";

        deleteBtn.classList.remove("d-none");
        deleteBtn.onclick = handleDelete;

        fetch(URL, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWZmMjhhZDEyOTAwMTU4NzZjNjciLCJpYXQiOjE3MzE2NjU5MDYsImV4cCI6MTczMjg3NTUwNn0.3NNkaHyHw4DvUC6CRZRkHQIt7LcsWIDU6cYHTD-7lko"
          }
        })
        .then((res) => {
         
          if (res.ok) {
            return res.json();
          }
        })
        .then(product => {
            console.log(product);

            const { name, description, brand, imageUrl, price } = product;

            document.getElementById("name").value = name;
            document.getElementById("description").value = description;
            document.getElementById("brand").value = brand;
            document.getElementById("imageUrl").value = imageUrl;
            document.getElementById("price").value = price;
        });
    } else {

        subTitle.innerText = "- Crea Prodotto";
        submitBtn.className = "btn btn-primary"
    }

})