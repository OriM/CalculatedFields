// Available Fields
// ItemCode, ItemLongDescription, ItemMainCategory, ItemName

var html =
  '<p class="body-md"><a href="https://www.millori.me"><strong class="color-link">{{ItemCode}} - {{ItemLongDescription}} - {{ItemMainCategory}} - {{ItemName}}</strong></a></p>';

var res = html;
res = res.replace("{{ItemCode}}", ItemCode);
res = res.replace("{{ItemLongDescription}}", ItemLongDescription);
res = res.replace("{{ItemMainCategory}}", ItemMainCategory);
res = res.replace("{{ItemName}}", ItemName);

return res;
