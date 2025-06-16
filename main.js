
function calcularINSS(valorSalario){
    let valorINSS = 0.00
    if (valorSalario <= 1320) {
        valorINSS = valorSalario * 0.075;
    } else if (valorSalario <= 2571.29) {
        valorINSS = 1320 * 0.075
        valorINSS = valorINSS + (valorSalario - 1320) * 0.09;
    } else if (valorSalario <= 3856.94) {
        valorINSS = 1320 * 0.075
        valorINSS = valorINSS + 2751 * 0.09
        valorINSS = valorINSS + (valorSalario - 2571.29) * 0.12;
    } else {
        valorINSS = 1320 * 0.075
        valorINSS = valorINSS + 2751 * 0.09
        valorINSS = valorINSS + 3856.94 * 0.12
        valorINSS = valorINSS + (valorSalario - 3856.95) * 0.14;
    };
    return valorINSS;
}


function calcularIRPF(salarioBase){
    
      let aliquota = 0, deducao = 0;
      if (salarioBase <= 2112.00) {
        aliquota = 0;
        deducao = 0;
      } else if (salarioBase <= 2826.65) {
        aliquota = 0.075;
        deducao = 158.40;
      } else if (salarioBase <= 3751.06) {
        aliquota = 0.15;
        deducao = 370.40;
      } else if (salarioBase <= 4664.68) {
        aliquota = 0.225;
        deducao = 651.73;
      } else {
        aliquota = 0.275;
        deducao = 884.96;
      }
      return salarioBase * aliquota - deducao;
}


 document.getElementById('btnCalc').addEventListener('click', () => {
      const valorHora = parseFloat(document.getElementById('valorHora').value) || 0;
      const qtdHora = parseFloat(document.getElementById('qtdHora').value) || 0;
      const valeSel = document.getElementById('valeTransporte').value;
      const outras = parseFloat(document.getElementById('outrasDeducoes').value) || 0;

      const salarioBruto = valorHora * qtdHora;
      const descontoINSS = calcularINSS(salarioBruto);
      const baseIRPF = salarioBruto - descontoINSS;
      const descontoIRPF = calcularIRPF(baseIRPF);
      const descontoVT = valeSel === 'S' ? salarioBruto * 0.06 : 0;
      const descontoOutros = outras;
      const salarioLiquido = salarioBruto - descontoINSS - descontoIRPF - descontoVT - descontoOutros;

      document.getElementById('salarioBruto').textContent = `Salário Bruto: R$ ${salarioBruto.toFixed(2)}`;
      document.getElementById('descontoINSS').textContent = `Desconto INSS: - R$ ${descontoINSS.toFixed(2)}`;
      document.getElementById('descontoIRPF').textContent = `Desconto IRPF: - R$ ${descontoIRPF.toFixed(2)}`;
      document.getElementById('descontoVT').textContent = `Desconto Vale-Transporte: - R$ ${descontoVT.toFixed(2)}`;
      document.getElementById('descontoOutros').textContent = `Outras Deduções: - R$ ${descontoOutros.toFixed(2)}`;
      document.getElementById('salarioLiquido').textContent = `Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`;
    });

