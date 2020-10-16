// input variables references from group.js

inputLoanAmount.addEventListener("input", () => {
    value = inputLoanAmount.value;
    inputLoanAmount.value = value.replace(/[^0-9]/gi, "");
});

inputInterestRate.addEventListener("input", () => {
    value = inputInterestRate.value;
    inputInterestRate.value = value.replace(/[^0-9.]/gi, "");
});

inputLoanTenure.addEventListener("input", () => {
    value = inputLoanTenure.value;
    inputLoanTenure.value = value.replace(/[^0-9]/gi, "");
});
