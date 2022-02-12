document.getElementById("deposit-btn").addEventListener("click",function(){
 const depositInput = document.getElementById('deposit-input');
 const newDepositInputText = parseFloat(depositInput.value);
// update deposit value
const previueDepositValue = document.getElementById('deposit-total');
const previueDepositValueText = parseFloat(previueDepositValue.innerText);
const totalDepositValue = previueDepositValueText +newDepositInputText;
previueDepositValue.innerText = totalDepositValue;
// update main balance;
const mainBalance =document.getElementById('balance-total');
const previusMainBalanceText = parseFloat(mainBalance.innerText);
const updateMainBalance = previusMainBalanceText + newDepositInputText;
mainBalance.innerText = updateMainBalance;
    // clear input filed
    depositInput.value = '';
});
// work for widthwrow
document.getElementById('widthdraw-btn').addEventListener('click',function(){
    console.log('clicked')

    const widthdrawInput = document.getElementById('widthdraw-input');
    const widthdrawInputText = parseFloat(widthdrawInput.value);
    // update widthdraw balance
    const previusWidthdrawBalance = document.getElementById('widthraw-total');
    const previusWidthdrawBalanceText = parseFloat(previusWidthdrawBalance.innerText);
    const totalWidthdrawBalance = previusWidthdrawBalanceText + widthdrawInputText;
    previusWidthdrawBalance.innerText = totalWidthdrawBalance;
    // deduct manin balance after widthdraw
    const mainBalanceForWidthdraw = document.getElementById('balance-total');
    const mainBalanceForWidthdrawText = parseFloat(mainBalanceForWidthdraw.innerText);
    const mainBalanceAfterWidthdraw = mainBalanceForWidthdrawText - widthdrawInputText;
    mainBalanceForWidthdraw.innerText = mainBalanceAfterWidthdraw;
      widthdrawInput.value = '';

})