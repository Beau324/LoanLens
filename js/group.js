// Hides the table on load/refresh.
document.getElementById("tableHidden").style.display = `none`;

// Format output for currency.
/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
*/
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})
//formatter.format(1000) // "$1,000.00"
//formatter.format(10) // "$10.00"
//formatter.format(123233000) // "$123,233,000.00"

/* 
calcMonthlyPayment is wired to calc button with onclick HTML attribute
*/
function calcMonthlyPayment() {
    // Initially displays table
    document.getElementById("tableHidden").style.display = "block";

    // gets user input values onclick
    const inputLoanAmount = parseFloat(document.getElementById("amount").value);
    const inputInterestRate = parseFloat(document.getElementById("interest").value);
    const inputLoanTenure = parseFloat(document.getElementById("tenure").value);
    
    // Formulas
    /*
    Total Monthly Payment = 
    (amount loaned) * (rate/1200) / (1 – (1 + rate/1200)^(-Number of Months) )
    
    Remaining Balance before the very first month equals the amount of the loan.

    Interest Payment = Previous Remaining Balance * rate/1200
    
    Principal Payment = Total Monthly Payment - Interest Payment
    
    At end each month, 
    Remaining Balance =  
    Previous Remaining Balance - principal payments
    */


    // variables and math working on user inputs
    const monthly = inputInterestRate / 1200.0;
    const annual = inputInterestRate / 100.0;
    const emi = (inputLoanAmount * monthly) / (1.0 - Math.pow(1.0 + monthly, parseInt(inputLoanTenure * -1)));
    const tInterest = emi * inputLoanTenure - inputLoanAmount;
    const tPayment = inputLoanAmount + tInterest;

    document.getElementById("emi").innerHTML = `<h5>${formatter.format(emi)}</h5>`;
    document.getElementById("tInterest").innerHTML = `<h5>${formatter.format(tInterest)}</h5>`;
    document.getElementById("tPayment").innerHTML = `<h5>${formatter.format(tPayment)}</h5>`;

    // Donut chart data update
    /* 
    https://morrisjs.github.io/morris.js/donuts.html
    
    custom-morris.js holds initial on load rendering
    */
    $donutData = [{ label: "Principal", value: inputLoanAmount.toFixed(0) }, { label: "Interest", value: tInterest.toFixed(0) }];
    donut.setData($donutData);

    //builds nested array
    let totalInterest = 0.0;
    let balance = parseFloat(inputLoanAmount);
    let monthlyInterest = 0.0;
    let monthlyPrincipal = 0.0;
    const arr = new Array();

    for (let i = 0; i < inputLoanTenure && balance > 0; i++) {
        totalInterest += parseFloat(balance * (monthly));
        monthlyInterest = balance * monthly;
        monthlyPrincipal = emi - monthlyInterest;
        arr[i] = new Array();

        arr[i][0] = (i + 1).toFixed(0);
        arr[i][1] = parseFloat(emi).toFixed(2);
        arr[i][2] = parseFloat(monthlyPrincipal).toFixed(2);
        arr[i][3] = parseFloat(monthlyInterest).toFixed(2);
        arr[i][4] = parseFloat(totalInterest).toFixed(2);
        arr[i][5] = parseFloat(balance - emi).toFixed(2);

        if (emi > balance) {
            arr[i][1] = arr[i - 1][5];
            arr[i][2] = arr[i][1] - arr[i][3];
            arr[i][5] = 0.00;
        }
        balance -= monthlyPrincipal;
    }

    // (re-)builds table
    const tableRef = document.getElementById("results").getElementsByTagName("tbody")[0];

    for (let j = 0; tableRef.rows.length > 0; j++) {
        tableRef.deleteRow(-1);
    }

    for (let k = 0; k < inputLoanTenure; k++) {
        const newRow = tableRef.insertRow();
        const myHTML = `<td>${(arr[k][0])}</td><td>${(formatter.format(arr[k][1]))}</td><td>${(formatter.format(arr[k][2]))}</td><td>${(formatter.format(arr[k][3]))}</td><td>${(formatter.format(arr[k][4]))}</td><td>${(formatter.format(arr[k][5]))}</td>`;
        newRow.innerHTML = myHTML;
    }
} 