// JS dragon group added

/* Wired up Input Variables */


// not working yet
function calcMonthlyPayment() {
    var inputLoanAmount = parseInt(document.getElementById("amount").value);
    var inputInterestRate = parseFloat(document.getElementById("interest").value);
    var inputLoanTenure = parseInt(document.getElementById("tenure").value);

    let monthly = inputInterestRate / 1200;
    let annual = inputInterestRate / 100;
    let emi = inputLoanAmount * monthly * (Math.pow(1 + monthly, inputLoanTenure)) / (Math.pow(1 + monthly, inputLoanTenure) - 1);
    let tInterest = inputLoanAmount * annual;
    let tPayment = inputLoanAmount + tInterest;
    document.getElementById("emi").innerHTML = `<h5>${emi.toFixed(0)}</h5>`;
    document.getElementById("tInterest").innerHTML = `<h5>${tInterest}</h5>`;
    document.getElementById("tPayment").innerHTML = `<h5>${tPayment}</h5>`;
//    donutData.setData([{ "Principal": inputLoanAmount.value},{ "Interest": "2006"}]);
} 