var menu = document.getElementById("product-categories").getElementsByTagName("li");

for (var i=0; i<menu.length; i++) {
    alert(menu[i].tagName);
}