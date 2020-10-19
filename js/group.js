// JS dragon group added

//make the table hidden
document.getElementById("tableHidden").style.display = `none`;

//when calc btn is clicked activate the anonymous function and displays the table.
document.getElementById("calc").addEventListener(`click`, function () {
    document.getElementById("tableHidden").style.display = "block";
});

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

//formatter.format(1000) // "$1,000.00"
//formatter.format(10) // "$10.00"
//formatter.format(123233000) // "$123,233,000.00"

function calcMonthlyPayment() {
    var inputLoanAmount = parseFloat(document.getElementById("amount").value);
    var inputInterestRate = parseFloat(document.getElementById("interest").value);
    var inputLoanTenure = parseFloat(document.getElementById("tenure").value);

    let monthly = inputInterestRate / 1200.0;
    let annual = inputInterestRate / 100.0;
    const emi = (inputLoanAmount * monthly) / (1.0 - Math.pow(1.0 + monthly, parseInt(inputLoanTenure * -1)));
    let tInterest = emi * inputLoanTenure - inputLoanAmount;
    let tPayment = inputLoanAmount + tInterest;
    document.getElementById("emi").innerHTML = `<h5>${formatter.format(emi)}</h5>`;
    document.getElementById("tInterest").innerHTML = `<h5>${formatter.format(tInterest)}</h5>`;
    document.getElementById("tPayment").innerHTML = `<h5>${formatter.format(tPayment)}</h5>`;

    // Donut update
    $donutData = [{ label: "Principal", value: inputLoanAmount.toFixed(0) }, { label: "Interest", value: tInterest.toFixed(0) }];
    donut.setData($donutData);

    //builds nested array
    
        var totalInterest = 0.0;
        var balance = parseFloat(inputLoanAmount);
        let monthlyInterest = 0.0;
        let monthlyPrincipal = 0.0;

        var arr = new Array();
    for (i = 0; i < inputLoanTenure && balance > 0; i++) {
        totalInterest += parseFloat(balance * (monthly));
        // Interest Payment = Previous Remaining Balance * rate/1200
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
   


        //builds table
        var tableRef = document.getElementById("results").getElementsByTagName("tbody")[0];
        for (let j = 0; tableRef.rows.length > 0; j++) {
            tableRef.deleteRow(-1);
        }
    for (let k = 0; k < inputLoanTenure; k++) {
            let newRow = tableRef.insertRow();
        var myHTML = `<td>${(arr[k][0])}</td><td>${(formatter.format(arr[k][1]))}</td><td>${(formatter.format(arr[k][2]))}</td><td>${(formatter.format(arr[k][3]))}</td><td>${(formatter.format(arr[k][4]))}</td><td>${(formatter.format(arr[k][5]))}</td>`;
            newRow.innerHTML = myHTML;
        }
 
} 