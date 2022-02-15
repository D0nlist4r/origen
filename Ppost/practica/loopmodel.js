function Auto(modelo,anno,marca) {
    this.modelo = Modelo;
    this.marca = Marca;
    this.anno = Anno;
}
var Autos = [];

for (let i = 0; i < 5; i++) {
    var Modelo = prompt("Coloque el modelo del auto nuevo");
    var Marca = prompt("Colo que la marca del auto nuevo");
    var Anno = prompt("Coloque el año de creacin del auto");
  Auto.pushs(new Auto(Modelo,Marca,Anno));  
}