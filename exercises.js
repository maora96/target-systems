let fs = require("fs");
// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

console.log("Resposta da primeira questão:");
const INDICE = 13;
let soma = 0;
let k = 0;

while (k < INDICE) {
  k++;
  soma += k;
}

console.log(soma);

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
console.log("Resposta da segunda questão:");
const isFibonacci = (num) => {
  const fibonacciSeries = [];
  let n1 = 0;
  let n2 = 1;

  for (let i = 1; i <= num; i++) {
    fibonacciSeries.push(n1);
    let nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  const isInFibonaciSeries = fibonacciSeries.find((item) => item === num);
  if (isInFibonaciSeries) {
    return `Número ${num} pertence à sequência de Fibonacci.`;
  }

  return `Número ${num} pertence à sequência de Fibonacci.`;
};

console.log(isFibonacci(21));
console.log(isFibonacci(14));

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
console.log("Resposta da terceira questão:");

const profits = JSON.parse(fs.readFileSync("profits.json", "utf8"));
const calculateProfits = () => {
  const profitsWithoutWeekends = profits.filter((item) => item.valor !== 0.0);

  const profitsWithoutWeekendsValues = profitsWithoutWeekends.map(
    (item) => item.valor
  );

  const worstDay = Math.min(...profitsWithoutWeekendsValues);
  const bestDay = Math.max(...profitsWithoutWeekendsValues);

  let total = 0;
  for (let i = 0; i < profitsWithoutWeekendsValues.length; i++) {
    total += profitsWithoutWeekendsValues[i];
  }
  let avg = total / profitsWithoutWeekendsValues.length;

  const betterThanAverageDays = [];

  for (let i = 0; i <= profitsWithoutWeekendsValues.length; i++) {
    if (profitsWithoutWeekendsValues[i] > avg)
      betterThanAverageDays.push(profitsWithoutWeekendsValues[i]);
  }

  return `O menor valor de faturamento ocorrido no mês é R$${worstDay.toFixed(
    2
  )}. O maior é R$${bestDay.toFixed(
    2
  )}. O número de dias em que o valor de faturamento diário foi superior à média mensal é ${
    betterThanAverageDays.length
  }. Essa média é R$${avg.toFixed(2)}.`;
};

console.log(calculateProfits());

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
console.log("Resposta da quarta questão:");
const calculateStateContribution = () => {
  const SP = 67836.43;
  const RJ = 36678.66;
  const MG = 29229.88;
  const ES = 27165.48;
  const others = 19849.53;

  const totalProfit = SP + RJ + MG + ES + others;

  const SPpercentage = (SP / totalProfit) * 100;
  const RJpercentage = (RJ / totalProfit) * 100;
  const MGpercentage = (MG / totalProfit) * 100;
  const ESpercentage = (ES / totalProfit) * 100;
  const OthersPercentage = (others / totalProfit) * 100;

  return `SP corresponde a ${SPpercentage.toFixed(
    2
  )}%, RJ a ${RJpercentage.toFixed(2)}%, MG a ${MGpercentage.toFixed(
    2
  )}%, ES a ${ESpercentage.toFixed(
    2
  )}% e os outros estados a ${OthersPercentage.toFixed(
    2
  )}%. Total faturamento é ${totalProfit}`;
};

console.log(calculateStateContribution());

// 5) Escreva um programa que inverta os caracteres de um string.
console.log("Resposta da quinta questão:");
const reverseString = (string) => {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
};

console.log(reverseString("hello world"));
