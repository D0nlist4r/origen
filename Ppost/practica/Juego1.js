var op1 = "tigera";
var op2 = "papel";
var op3 = "piedra";

function resultado(user,comp){
     if (user != comp){
         if(user===op1 && comp===op2){
             console.log("usuario Gano con "+op1);
         }
         else if(user===op2 && comp===op3){
            console.log("usuario Gano con "+op2);
         }
         else if(user===op3 && comp===op1){
            console.log("usuario Gano con "+op3);
         }
         else{
             console.log("gano comp"); 
         }
     }else{
         console.log("Empate");
     }
 }
