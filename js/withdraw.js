document.getElementById('btn-withdraw').addEventListener('click', function () {
  const withdrawField = document.getElementById('withdraw-field');
  const newWithDrawAmountString = withdrawField.value;
  const newWithDrawAmount = parseFloat(newWithDrawAmountString);

  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithDrawTotal = parseFloat(previousWithdrawTotalString);

  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithDrawAmount > previousBalanceTotal) {
    alert('Bap er bank a ato taka nai');
    return;
  }

  const currentWithdrawTotal = previousWithDrawTotal + newWithDrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;

  withdrawField.value = '';

});
