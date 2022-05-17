var cantidad="";
 var cont=0;
 var sumatoria = 0;
 var suma=false;
  var restar=false;
  var multiplicar=false;
  var dividir=false;
  var raiz_cuadrada=false;
  var exponent=false;
  var modu=false;
  var punto=false;
//   var igual=false;
  var eliminar=false;

function mostrar_numero(numero) {
    document.getElementById("display").value=cantidad+numero;
    cantidad=document.getElementById("display").value;

}

 function sumar(){   
   cont=cont+parseInt(cantidad);
   document.getElementById("display").value=cont;
    cantidad="";
     suma=true;
 }
 function resta(){
     cont=cont+parseFloat(cantidad);
     document.getElementById("display").value=cont;
     cantidad="";
     restar=true;
 }
 function multiplicacion(){
     cont=cont+parseFloat(cantidad);
     document.getElementById("display").value=cont;
     cantidad="";
     multiplicar=true;
 }
 function division(){
     cont=cont+parseFloat(cantidad);
     document.getElementById("display").value=cont;
     cantidad="";
     dividir=true;
 }
 function raiz(){
     cont=cont+parseFloat(cantidad);
     document.getElementById("display").value=cont;
     cantidad="";
     raiz_cuadrada=true;
 }
 function exponente(){
     cont=cont+parseFloat(cantidad);
     document.getElementById("display").value=cont;
     cantidad="";
     exponenciacion=true;
 }
 function mod(){
     cont=cont+parseFloat(cantidad);
     document.getElementById("display").value=cont;
     cantidad="";
     porcentaje=true;
 }
function igual(){     
     if(suma==true){
         document.getElementById("display").value=cont+parseFloat(cantidad);
        }if(restar==true){
                 document.getElementById("display").value=cont-parseFloat(cantidad);
             }if(multiplicar==true){
                     document.getElementById("display").value=cont*parseFloat(cantidad);
          if(dividir=true){
              document.getElementById("display").value=cont/parseFloat(cantidad);
      }if(raiz_cuadrada==true){
          document.getElementById("display").value=cont=Math.sqrt(parseFloat(cantidad));
}}}

