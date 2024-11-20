const URL = "https://striveschool-api.herokuapp.com/api/product/"


const getCardsProducts = () => {

    fetch(URL)
    .then(res => {
        console.log(res)
        if (res.ok) {
            return res.json();
        }
    })

    .then(cardProducts => {
        // otteniamo l'array come parametro appointments
        // qui dentro ci saremo nel momento esatto in cui avremo ricevuto il dato,
        // è il punto giusto per fare tutta la DOM Manipulation che serve
        const row = document.getElementById("rowCard");
        const col = document.createElement("col");
        col.id = "card"

        col.innerHTML = 







        row.appendChild(col)

      })
      .catch(error => console.log(error))
  };
    



window.addEventListener("DOMContentLoaded", () => {
    getCardsProducts();
})



