function getInput (inputId){
    const salaryInput = document.getElementById(inputId);
    const salaryAmount = salaryInput.value;
    const salaryAmountTaka = parseFloat(salaryAmount);
    salaryInput.value ='';
    return salaryAmountTaka;   
}

document.getElementById('calculate').addEventListener('click',function(){
   const salaryTotal = getInput('salary-input');
   if(salaryTotal>0){
    const foodTotal = getInput('food-input');
   const rentTotal = getInput('rent-input');
   const clothTotal = getInput('clothes-input');
   const totalExpenses = foodTotal+rentTotal+clothTotal;
   const balance = salaryTotal - totalExpenses;
  if(totalExpenses > 0 && balance> 0){
    const displayTotalExpsens = document.getElementById('total-expenses').innerText =totalExpenses;
    const displayBalance = document.getElementById('balance').innerText =balance;
  }
  else if(totalExpenses>salaryTotal){
    const errorMessageLower = document.getElementById('lower');
    errorMessageLower.style.display ='block';
  }
  else{    
    const errorMessage = document.getElementById('warning');
    errorMessage.style.display ='block';
    
  }

   }
   else{
    const slarayWarning = document.getElementById('salary-warning');
    slarayWarning.style.display ='block';
   }
//    console.log(salaryTotal);
   
    
})

document.getElementById('save').addEventListener('click',function(){
    const updateTotalExpenses = document.getElementById('total-expenses').innerText;
    const updateTotalExpensesNumber = parseFloat(updateTotalExpenses);
    const updateBalance = document.getElementById('balance').innerText;
    const totalSalary = parseFloat(updateTotalExpenses)+parseFloat(updateBalance);
    const saveMoney = totalSalary * .2;
    const remainingBalance = totalSalary-updateTotalExpensesNumber-saveMoney;
    if(updateBalance>saveMoney){
        const displaySaveMoney = document.getElementById('saving').innerText = saveMoney; 
        document.getElementById('remain-balance').innerText =remainingBalance;  
    }
    else{
        const errorMessageSaving = document.getElementById('saving-error');
    errorMessageSaving.style.display ='block';
    }
})

