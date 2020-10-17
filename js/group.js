// JS dragon group added

// not working yet
function calcMonthlyPayment() {
    var inputLoanAmount = parseInt(document.getElementById("amount").value);
    var inputInterestRate = parseFloat(document.getElementById("interest").value);
    var inputLoanTenure = parseInt(document.getElementById("tenure").value);

    let monthly = inputInterestRate / 1200.0;
    let annual = inputInterestRate / 100.0;
    let emi = inputLoanAmount * monthly * (Math.pow(1 + monthly, inputLoanTenure)) / (Math.pow(1 + monthly, inputLoanTenure) - 1);
    let tInterest = inputLoanAmount * annual;
    let tPayment = inputLoanAmount + tInterest;
    document.getElementById("emi").innerHTML = `<h5>${emi.toFixed(0)}</h5>`;
    document.getElementById("tInterest").innerHTML = `<h5>${tInterest}</h5>`;
    document.getElementById("tPayment").innerHTML = `<h5>${tPayment}</h5>`;

    // Donut update
    $donutData = [{ label: "Principal", value: inputLoanAmount }, { label: "Interest", value: tInterest }];
    donut.setData($donutData);

    //builds nested array
    
        var totalInterest = 0.0;
        var balance = parseFloat(inputLoanAmount).value;

        var arr = new Array();
    for (i = 0; i < inputLoanTenure; i++) {
        totalInterest += parseFloat(balance * (monthly));
        arr[i] = new Array();
        arr[i][0] = i + 1;
        arr[i][1] = parseFloat(emi);
        arr[i][2] = parseFloat(emi - (balance * (monthly)));
        arr[i][3] = parseFloat(balance * (monthly));
        arr[i][4] = parseFloat(totalInterest);
        arr[i][5] = parseFloat(balance - emi);
        balance -= parseFloat(emi);
        
    }
   

    console.log(arr[0][0]);
    console.log(arr[0][1]);
    console.log(arr[0][2]);
    console.log(arr[0][3]);
    console.log(arr[0][4]);
    console.log(arr[0][5]);

    //builds table
    
        var tableRef = document.getElementById("results").getElementsByTagName("tbody")[0];
        for (let j = 0; tableRef.rows.length > 0; j++) {
            tableRef.deleteRow(-1);
        }
    for (let k = 0; k < inputLoanTenure; k++) {
            let newRow = tableRef.insertRow();
        var myHTML = `<td>${parseFloat(arr[k][0])}</td><td>${parseFloat(arr[k][1])}</td><td>${parseFloat(arr[k][2])}</td><td>${parseFloat(arr[k][3])}</td><td>${parseFloat(arr[k][4])}</td><td>${parseFloat(arr[k][5])}</td>`;
            newRow.innerHTML = myHTML;
        }
 
} 