const initialInput = document.querySelector(".initial-input");
const stocksInput = document.querySelector(".stocks-input");
const currentInput = document.querySelector(".current-input");
const submitBtn = document.querySelector(".submit-btn");
const output = document.querySelector(".output");



function clickHandler()
{
    const mainPrice = initialInput.value;
    const quantitys = stocksInput.value;
    const currentPrice = currentInput.value;
    if(currentPrice > mainPrice)
    {
        var profit = (currentPrice-mainPrice)*quantitys;
        var profitPercent = (profit/mainPrice)*100;
        output.innerText = "The profit is " + profit + " and the profit percentage is "+profitPercent+"% 😉";
    }
    else if(mainPrice > currentPrice)
    {
        var loss = (mainPrice-currentPrice)*quantitys;
        var lossPercent = (loss/mainPrice)*100;
        output.innerText = "The Loss is " + Math.abs(loss) + " and the loss percentage is "+
        Math.abs(lossPercent)+"% 🙁" ;
    }
    else
    {
        output.innerText = "There is no profit and no loss";
    }
}

submitBtn.addEventListener("click",clickHandler);
