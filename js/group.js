// JS dragon group added

/* Wired up Input Variables */
var inputLoanAmount = document.getElementById("amount").value;
var inputInterestRate = document.getElementById("interest").value;
var inputLoanTenure = document.getElementById("tenure").value;


function calcMonthlyPayment() {
    let monthly = inputInterestRate / 1200;
    let emi = inputLoanAmount * monthly * (Math.pow(1 + monthly, inputLoanTenure)) / (Math.pow(1 + monthly, inputLoanTenure) - 1);
    let tInterest = inputLoanAmount * (inputInterestRate / 100);
    let tPayment = inputLoanAmount + tInterest;
    document.getElementById("emi").innerHTML = `<h5>${emi}</h5>`;
    document.getElementById("tInterest").innerHTML = `<h5>${tInterest}</h5>`;
    document.getElementById("tPayment").innerHTML = `<h5>${tPayment}</h5>`;
    //alert('Hi');
} 