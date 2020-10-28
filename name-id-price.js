// Medium card

// a function to format a number and a currency symbol to something like "$21.95"
// note that this function puts the currency symbol on the left of the number 
// the currency symbol is trimmed of whitespaces
function currencyFormat(num, currency) {
  return currency.trim()+ num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

// get all varaiables
var itemName = GetValueByApiName("ItemName");
var itemExId = GetValueByApiName("ItemExternalID");
var unitPriceAfterDiscount = UnitPriceAfterDiscount; // UnitPriceAfterDiscount is in the Available Fields!!!
var currency = GetValueByApiName("Transaction.Currency");
var formattedPrice = currencyFormat(unitPriceAfterDiscount, currency);


// the following html is for a 4 rows configured field 
// validated both on web app & mobile 16.50

// change h3 color value to match desired color
// change -webkit-line-clamp to match the number of max rows for item name text

var html = `<div style="font-size: 16px; margin: 0; padding: 0; text-align: center;"> 
            <h3 style=" margin-bottom: 0.3em; 
                        color: #78aa00;  
                        font-size: 1.6em; 
                        line-height: 1.2em; 
                        font-weight: bolder; 
                        display: -webkit-box; 
                        -webkit-line-clamp: 2; 
                        -webkit-box-orient: vertical; 
                        overflow: hidden; 
                        text-overflow: ellipsis; 
                        margin-top: 0;" >
            {{ItemName}}</h3>
            <p style="margin-bottom: 0.5em; margin-top: 0;" > {{ItemExternalID}} </p>
            <p style="font-weight: bolder; margin-top: 0;" > {{UnitPriceAfterDiscount}} </p>
            </div>`;

var res = html;
res = res.replace("{{ItemName}}", itemName);
res = res.replace("{{ItemExternalID}}", itemExId);
res = res.replace("{{UnitPriceAfterDiscount}}", formattedPrice);

return res;
