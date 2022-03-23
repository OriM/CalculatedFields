// get all varaiables
var price = GetValueByApiName("ItemName");
var currency = GetValueByApiName("Transaction.Currency");

// class="body-md"
var html = `<p style=" text-align: right; 
                        font-size: 15px; 
                        font-weight: 700;  
                        padding: 5px 0 2px 0;">{{CURRENCY}}{{PRICE}}</p>`;

var res = html;
res = res.replace("{{PRICE}}", price);
res = res.replace("{{CURRENCY}}", currency);

return res;
