var preco_arroz_T1, preco_arroz_T2, preco_feijao_branco, preco_feijao_preto, preco_linguica, pre_lentilha, resposta,total_compras;

preco_arroz_T1 = prompt("Insira o preço do KG do arroz Tipo 1: ");
preco_arroz_T2 = prompt("Insira o preço do KG do arroz Tipo 2: ");
preco_feijao_branco = prompt("Insira o preço do KG do feijão branco: ");
preco_feijao_preto = prompt ("Insira o preço do KG do feijão preto: ");
preco_linguica = prompt ("Insira o preço da linguiça defumada: ");
preco_lentilha = prompt("Insira o preço do KG da lentilha: ");
resposta = prompt("Tem arroz Tipo 1? \n Responda Spara SIM ou N para NÃO");

if (resposta == 'SIM'){
  preco_arroz_T1 = parseInt(preco_arroz_T1);
  preco_feijao_preto = parseInt(preco_feijao_preto);
  total_compras = preco_arroz_T1 + (preco_feijao_preto*2); 
  }
  else{
  resposta = prompt("Tem arroz tipo 2?\n Responda S para SIM ou N para NÃO");
  if(resposta == 'S'){
    preco_arroz_T2 = parseInt(preco_arroz_T1);
    preco_feijao_preto = parseInt(preco_feijao_preto);
    total_compras = preco_arroz_T1 + (preco_feijao_preto*2);
  }
  else{
  preco_linguica = parseInt(preco_linguica);
  preco_lentilha = parseInt(preco_lentilha);
  total_compras = (preco_lentilha*2) + preco_linguica;
  }
}

alert("O preço da sua compra foi R$" + total_compras);