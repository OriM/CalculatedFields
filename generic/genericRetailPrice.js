// get all varaiables
var retailPrice = GetValueByApiName("ItemName");
var currency = GetValueByApiName("Transaction.Currency");

// class="body-md"
var html = `<p style=" text-align: right; 
                        font-size: 15px; 
                        font-weight: 700;  
                        padding: 5px 0 2px 0;">
                        {{CURRENCY}}{{PRICE}}</p>`;

var res = html;
res = res.replace("{{PRICE}}", retailPrice);
res = res.replace("{{CURRENCY}}", currency);

return res;
