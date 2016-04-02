
        var cats = [];
        var catName = ['CAT1','CAT2','CAT3','CAT4','CAT5'];
        var catUrl = 'img/catx.jpg';
        var catLength = catName.length;
        var i;
        var imageIndex;

        //make space for image
        var divImage = document.createElement("img");
        divImage.className = "catImg";
        var clickCount = document.createElement("p");
        clickCount.className = "catClick";
        var ClickCount = 0;

        //find the id
        var divBox = document.getElementById("catImg");



var Data = {
    data: function() {
    }
}

var octopus = {
    getData: function() {
        Data.data();
        view.view();
    }
}

var view = {
    view: function() {

    for (i = 0; i < catLength; i++){
    var newUrl = catUrl.split("x");
    var imageIndex = i +1;
    newUrl.splice(1, 0, (imageIndex<6 ? (imageIndex) : imageIndex ) );
    var Url = newUrl.join('');
    console.log(Url);

    //make variable to get each cat names
    var Name = catName[i];
    //test consoling if the variable is working on
    console.log(Name);
    //find the id 
    var Finder = document.getElementById("catList");
    //make element to append.
    var catlist = document.createElement("li");
    // insert the contents in the list.
    catlist.innerHTML = Name + "<br>";
    //insert the list which inserted the contents under the id
    Finder.appendChild(catlist);

    var li = catlist;
    li.addEventListener('click', (function(numCopy) {
        return function() {
    divImage.setAttribute('src', numCopy);
    divBox.appendChild(divImage);
//    li.appendChild(divImage);
};
    })(Url));
  
 }      
    }
}

octopus.getData();
