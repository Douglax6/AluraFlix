var listaFilmes = [
  "https://jovemnerd.com.br/wp-content/uploads/2021/11/Homem-Aranha-04-760x951.jpg",
  "https://www.cafecomfilme.com.br/media/k2/items/cache/b7c39f581cd961362789931cba3ded61_XL.jpg?t=20200616_030530",
  "https://upload.wikimedia.org/wikipedia/pt/b/b9/MPW-35489.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
