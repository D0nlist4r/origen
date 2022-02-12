var cripto = [
    {Nombre: "Bitcoin", precio : 4000},
    {Nombre: "Solana", precio : 10},
    {Nombre: "Polkadot", precio : 5},
    {Nombre: "Etherium", precio : 200}
];

var articuloCrypto = cripto.filter(function(criptos) {
    return critptos.precio <= 100
    
});
