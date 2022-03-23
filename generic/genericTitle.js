// get all varaiables
var title = GetValueByApiName("ItemName");

var html = `<p style=" text-align: left; 
                        font-size: 15px; 
                        font-weight: 600; 
                        margin: 0; ">
                        {{TITLE}}</p>`;

var res = html;
res = res.replace("{{TITLE}}", title);

return res;
