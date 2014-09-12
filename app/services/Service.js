
app.service('customersService', function () {
    this.getBrands = function () {
    
        return brand;
    };

    this.getProduct = function (id) {
        for (var i = 0; i < product.length; i++) {
            if (product[i].id == id) {
                return product[i];
            }
        }
        return null;
    };
    var brand = [{'samsung':[{'id':'1','product':'Fridge'},{'id':'2','product':'Microwave'},{'id':'3','product':'Telivision'}]},{'Lg':[{'id':'4','product':'Air Conditioner'},{'id':'5','product':'Washing Machine'},{'id':'6','product':'Television'}]}];

    var product = [{'id':'1','product':'Fridge','Brand':'Samsung','Description':'aaaaaaaaaaaaaaaaaaaaaaaaaaaa'},
                     {'id':'2','product':'Microwave','Brand':'Samsung','Description':'bbbbbbbbbbbbbbbbbbbbbbb'},
                     {'id':'3','product':'Telivision','Brand':'Samsung','Description':'cccccccccccccccccccccccccccc'},
                     {'id':'4','product':'Air Conditioner','Brand':'Lg','Description':'ddddddddddddddddddddddddd'},
                     {'id':'5','product':'Waschig Machine','Brand':'Lg','Description':'eeeeeeeeeeeeeeeeeeeee'},
                     {'id':'6','product':'Television','Brand':'Lf','Description':'ffffffffffffffffffffff'}
                    ];
   

});