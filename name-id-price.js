function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

// Available Fields:
// ItemName, ItemExternalID, UnitPriceAfterDiscount

style = ".myfd-card-m {margin: 0.5em 0; padding: 0;} .myfd-card-m * {}";
var html =
  "<html><head><style>" +
  style +
  '</style></head><body><div class="myfd-card-m">';
html +=
  '<h3 style="margin-bottom: 0.2em; color: #c95c0d; font-size: 1.6em; line-height: 1.2em; font-weight: bolder;" > ' +
  GetValueByApiName("ItemName") +
  "</h3>";
html +=
  '<p class="body-sm" style="margin-bottom: 0.4em;" >' +
  GetValueByApiName("ItemExternalID") +
  "</p>";
html +=
  '<p class="body-md" style="font-weight: bolder;" >' +
  currencyFormat(UnitPriceAfterDiscount) +
  "</p>";
return html + "</div></body></html>";
