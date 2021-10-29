function contar() {
  var ini = document.getElementById('txti')
  var fim = document.getElementById('txtf')
  var passo = document.getElementById('txtp')
 
 if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
   window.alert('[ERRO] Faltam dados, por favor verifique-os!')
 } else {
   res.innerHTML = `<strong>Contando:</strong>`
   var i = Number(ini.value)
   var f = Number(fim.value)
   var p = Number(passo.value)
 if (i < f) {
   //Contagem crescente
   for(var c = i; c <= f; c+= p){
     res.innerHTML += ` <strong>${c}</strong> \u{1f449}`
   }
 } else{
   // Contagem regressiva
   for(var c = i; c >= f; c -= p){
     res.innerHTML += ` <strong>${c}</strong> \u{1f449}`
   }
 }
 res.innerHTML += `\u{1F3C1}`
  }
}
