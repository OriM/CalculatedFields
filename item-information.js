var html = `<h1 class="title-4xl"><strong>{{APIPRODUCTNAME}}</strong></h1>
            <p class="body-md">Brand: <span style="color: #ff0000;"><strong>{{APIBRAND}}</strong></span></p>
            <p class="body-md">Product Code: <span style="color: #ff0000;"><strong>{{APIPRODUCTCODE}}</strong></span></p>
            <p class="body-md">List Price: <span style="color: #ff0000;"><strong>{{APILISTPRICE}}</strong></span></p>
            <h2 class="title-xl"><strong>Product Details</strong></h2>
            <p>{{APIPRODUCTDETAILS}}</p>`;

var res = html;
res = res.replace("{{APIPRODUCTNAME}}", ItemCode);
res = res.replace("{{APIBRAND}}", ItemMainCategory);
res = res.replace("{{APIPRODUCTCODE}}", ItemName);
res = res.replace("{{APILISTPRICE}}", ItemPrice);
res = res.replace("{{APIPRODUCTDETAILS}}", ItemTSABullets);

return res;
