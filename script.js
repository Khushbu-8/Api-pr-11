//  Ajex mathod

        $.ajax({
            type: "GET",
            url: "https://dummyjson.com/carts",
            success: function (res) {
                let allcart = res.carts;
                console.log(allcart);
                tbl = "";
                allcart.map((cart) => {
                    tbl += `
                    <div class="card m-2" style="width: 100%;">
                            <div class="card-body">
                                <h5 class="card-title w-100" >Card id : ${cart.id}</h5>
                                <h5 class="card-title w-100" >Card TotalProducts : ${cart.totalProducts}</h5>
                                `
                                let cartproduct = cart.products;
                                console.log(cartproduct);
                                cartproduct.map((product) =>{
                                    tbl += `
                                    <div class="col-12 col-md-6 p-1">
                                        <div class="card" style="width: 100%; height: 100%;">
                                            <img src="${product.thumbnail}" style="width: 100%; height: 300px; object-fit:contain" class="card-img-top img-flued" alt="...">
                                            <div class="card-body ">
                                              <h5 class="card-title w-100">${product. title}</h5>
                                              <p class="card-text w-100">Rs.${product.price}</p>
                                              <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                          </div>
                                    </div>
                                        `
                                })
                               
                           tbl+= `</div>
                        </div>
                        `
                })
                document.getElementById("allcarts").innerHTML = tbl;
               

            }
        })
    
