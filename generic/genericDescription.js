// get all varaiables
var title = GetValueByApiName("ItemName");

// change -webkit-line-clamp to match the number of max rows for item name text

var html = `<p
            style="font-size: 16px;
            font-weight: bold; 
            text-align:left; 
            overflow: hidden !important; 
            text-overflow: ellipsis; 
            white-space: nowrap;">
            {{TITLE}}</p>`;

var res = html;
res = res.replace("{{TITLE}}", title);

return res;
