var op1 = "tigera";
var op2 = "papel";
var op3 = "piedra";

function resultado(user,comp) {
 switch(true){
  case user === comp:
      console.log("Empate");
      break;
  case user===op1 && comp===op2:
      console.log("Gano usuaro");
      break;
  case user===op2 && comp===op3:
      console.log("Gano usuario");
      break;
  case user===op3 && comp===op1:
      console.log("Gano usuario");
      break;
  default:
        console.log("Perdiste");   
        break; 
 }
}