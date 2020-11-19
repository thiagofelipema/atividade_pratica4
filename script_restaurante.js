function calculaPreco(){
   var valor_quilo = parseFloat(document.getElementById('preco_quilo').value)
   var consumo_gr = parseFloat(document.getElementById('consumo').value)
   var consumo_kg = consumo_gr/1000
   var preco_do_prato = (consumo_kg*valor_quilo).toFixed(2)

   document.getElementById('resposta_preco').innerHTML = "Valor a pagar R$: " + preco_do_prato
}

    var verpreco = document.getElementById('calcular_preco')
    verpreco.addEventListener('click', calculaPreco)