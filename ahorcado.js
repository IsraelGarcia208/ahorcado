var palabras=[["programacion", "relacion con computacion"], ["ordenador", "Una máquina"], ["eucalipto", "Un árbol"], 
["plaza", "Espacio público"], ["tsunami", "fuerza natural"], ["fresa", "Una fruta"], 
["turista", "Un extranjero de visita"], ["gorila", "Un animal"], ["everest", "Un monte"], 
["relampago", "Antecede al trueno"], ["jirafa", "Un animal"], ["alemania", "Un país"], 
["uruguay", "Un país"], ["diseño", "Representación gráfica"], 
["novios", "relacion"], ["queso", "Hecho de leche"], 
["pastel", "De la pastelería"], ["universidad", "Lugar para estudiar con campus"], 
["carrera", "Competición"], ["estereo", "se escucha musica"]];
var palabra="";
var aleatoria;
var oculta=[];
var hueco=document.getElementById("palabra");
var cont=3;
var botones=document.getElementsByClassName('letra');
var botonInicio=document.getElementById("reset");

//funcione//
//escoger palabra al azar
function generaPalabra()
{
     aleatoria=(Math.random()*19).toFixed(0);
     palabra=palabras[aleatoria][0];
     console.log(palabra);
}
//pintar guiones
function pintarGuion(num){
     for(var i=0;i<num;i++){
          oculta[i]="__"
     }
     hueco.innerHTML=oculta.join("");
}
//generar el abecedario
function abc(a,z){
     document.getElementById("abc").innerHTML="";
     var i=a.charCodeAt(0),j=z.charCodeAt(0);
     var letra="";
     for(; i<=j; i++){
          document.getElementById("abcdario").innerHTML = "";
  var i = a.charCodeAt(0), j = z.charCodeAt(0);
  var letra = "";
  for( ; i<=j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
    if(i==110) {
      document.getElementById("abcdario").innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='"+letra+"'>Ñ</button>";
     }
}

// Chequear intento
function intento(letra) {
     document.getElementById(letra).disabled = true;
     if(palabra.indexOf(letra) != -1) {
       for(var i=0; i<palabra.length; i++) {
         if(palabra[i]==letra) oculta[i] = letra;
       }
       hueco.innerHTML = oculta.join("");
       document.getElementById("acierto").innerHTML = "Bien!";
       document.getElementById("acierto").className += "acierto verde";
     }else{
       cont--;
       document.getElementById("intentos").innerHTML = cont;
       document.getElementById("acierto").innerHTML = "Fallo!";
       document.getElementById("acierto").className += "acierto rojo";
       document.getElementById("image"+cont).className += "fade-in";
     }


     compruebaFin();
     setTimeout(function () { 
       document.getElementById("acierto").className = ""; 
     }, 800);
   }
   
   // Obtener pista
   function pista() {
     document.getElementById("hueco-pista").innerHTML = palabras[rand][1];
   }
   
   // Compruba si ha finalizado
   function compruebaFin() {
     if( oculta.indexOf("_") == -1 ) {
       document.getElementById("msg-final").innerHTML = "Felicidades !!";
       document.getElementById("msg-final").className += "zoom-in";
       document.getElementById("palabra").className += " encuadre";
       for (var i = 0; i < buttons.length; i++) {
         buttons[i].disabled = true;
       }
       document.getElementById("reset").innerHTML = "Empezar";
       btnInicio.onclick = function() { location.reload() };
     }else if( cont == 0 ) {
       document.getElementById("msg-final").innerHTML = "Game Over";
       document.getElementById("msg-final").className += "zoom-in";
       for (var i = 0; i < buttons.length; i++) {
         buttons[i].disabled = true;
       }
       document.getElementById("reset").innerHTML = "Empezar";
       btnInicio.onclick = function () { location.reload() };
     }
   }
   
   // Restablecer juego
   function inicio() {
     generaPalabra();
     pintarGuiones(palabra.length);
     generaABC("a","z");
     cont = 3;
     document.getElementById("intentos").innerHTML=cont;
   }
   
   // Iniciar
   window.onload = inicio();
   
