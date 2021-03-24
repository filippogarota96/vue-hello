// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue (
  {
    el:'#title',
    data: {
      text: "Hello World!",
      image: "img/landscape.jpg"
    },
    methods: {
      imgAppear: function() {
        if (this.image == 'img/landscape.jpg') {
          this.image = "img/landscape-2.jpg";
        } else {
          this.image = "img/landscape.jpg";
        }
      }
    }
  }
);
