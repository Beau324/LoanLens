// JS dragon group added

/* Wired up Input Variables */
var inputLoanAmount = document.getElementById("amount").value;
var inputInterestRate = document.getElementById("interest").value;
var inputLoanTenure = document.getElementById("tenure").value;

// not working yet
function calcMonthlyPayment () {
    let monthly = inputInterestRate / 1200;
    let annual = inputInterestRate / 100;
    let emi = inputLoanAmount * monthly * (Math.pow(1 + monthly, inputLoanTenure)) / (Math.pow(1 + monthly, inputLoanTenure) - 1);
    let tInterest = inputLoanAmount * annual;
    let tPayment = tInterest + inputLoanAmount;
    document.getElementById("emi").innerHTML = `<h5>${emi}</h5>`;
    document.getElementById("tInterest").innerHTML = `<h5>${tInterest}</h5>`;
    document.getElementById("tPayment").innerHTML = `<h5>${tPayment}</h5>`;
    donutData.setData([{ "Principal": inputLoanAmount.value},{ "Interest": "2006"}]);
} 