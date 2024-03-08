

//Switch
function pedir() {
   var valor = prompt("Digite um valor de 1 a 4");

   switch(Number(valor)) {
    case 1:
        alert("Voce escolheu 1 = Suco");
        break;
    case 2:
        alert("Voce escolheu 2 = Agua gelada");
        break;
    case 3:
        alert("Voce escolheu 3 = Sorvete");
        break;
    case 4:
        alert("Voce escolheu 4 = Chamar garçom");
        break;
        default:
            alert("Escolha uma opção entre 1 a 4");
   }
   
}