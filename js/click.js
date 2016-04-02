var model = {
    init: function() {
    var cats = [];
       var catName = ['cat1','cat2','cat3','cat4','cat5'];
        var catUrl = 'img/catx.jpg';
        var catLength = catName.length;
        var i;
        var imageIndex;
        for (i = 0; i < catLength; i++){
            var newUrl = catUrl.split("x");
            var imageIndex = i +1;
            newUrl.splice(1, 0, (imageIndex<6 ? (imageIndex) : imageIndex ) );
            var Url = newUrl.join('');
            console.log(Url);
            var catNameList = document.createElement("li");
//            catNameList.appendChild(catName);
            $(catNameList).append(catName[i]);
//            $("#catList").append(catNameList);
            var nameList = document.getElementById("catList");
            nameList.appendChild(catNameList);
        }
            var catUrl = cats.push(Url);
            console.log(catUrl);

    }
}
model.init();


var view = {
    init: function() {
        document.getElementById('catList').addEventListener('click', function(e) {
//        document.getElementById("catList").innerHTML = model.catName;
//How can I append image after clicking?
        document.getElementById('catImg').appendChild('<img src="img/'+ e.target.id +'">');

        });
    }
}
view.init();
view.render();