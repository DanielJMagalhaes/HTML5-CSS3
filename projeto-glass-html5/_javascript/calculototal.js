function calc_total() {
    var qtd = parseInt(document.getElementById('cqtd').value);
    tot = qtd * 1500;
    var atual = tot
    var val = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('ctot').value = val;
}
