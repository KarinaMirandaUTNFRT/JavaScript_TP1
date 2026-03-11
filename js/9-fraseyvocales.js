const frase = prompt('Ingresa una frase:').toLowerCase();
const pantalla = document.getElementById('pantalla')

pantalla.innerHTML=`vocales de la palabra ${frase}:`

console.log(frase.length)
console.log(frase.toLowerCase())
console.log(frase.toUpperCase())

if (frase.charAt(0)==='a' ||frase.charAt(0)==='e' ||frase.charAt(0)==='i' ||frase.charAt(0)==='o' ||frase.charAt(0)==='u' ){
pantalla.innerHTML += frase.charAt(0)
}
if (frase.charAt(1)==='a' ||frase.charAt(1)==='e' ||frase.charAt(1)==='i' ||frase.charAt(1)==='o' ||frase.charAt(1)==='u' ){
pantalla.innerHTML += frase.charAt(1)
}
if (frase.charAt(2)==='a' ||frase.charAt(2)==='e' ||frase.charAt(2)==='i' ||frase.charAt(2)==='o' ||frase.charAt(2)==='u' ){
pantalla.innerHTML += frase.charAt(2)
}
if (frase.charAt(3)==='a' ||frase.charAt(3)==='e' ||frase.charAt(3)==='i' ||frase.charAt(3)==='o' ||frase.charAt(3)==='u' ){
pantalla.innerHTML += frase.charAt(3)
}
