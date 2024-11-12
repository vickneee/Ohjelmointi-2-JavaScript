function muokkaa(lista) {
  for (var i = 0; i < lista.length; i++) {
    lista[i] = lista[i] + '!';
  }
  return lista;
}

const targetId = document.getElementById('targetId');
let nimet = ['Matti', 'Teppo', 'Liisa'];
console.log(muokkaa(nimet)); // ["Matti!", "Teppo!", "Liisa!"]

targerId.textContent = muokkaa(nimet);
