// Available Fields
// ItemTSAInventory

var inStock = '<p><span style="color: #339966;">In Stock</span></p>';
var lowStock = '<p><span style="color: #ff9900;">Low Stock</span></p>';
var outStock = '<p><span style="color: #ff0000;">Out of Stock</span></p>';

var res = inStock;

if (ItemTSAInventory <= 10) {
  res = lowStock;
}
if (ItemTSAInventory == 0) {
  res = outStock;
}

return res;
