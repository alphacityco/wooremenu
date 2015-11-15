var $ = jQuery;

$(function() {

  var $categories = $('.product-categories li');

  if (!$categories.length) {
    return ;
  }

  //var currentPathToCategory = window.location.pathname.split('/').slice(3).join('/');
  var currentPathToCategory = "accesorios/";
  $categories.each(function(index, li) {
    var $li = $(li),
      pathToCategory = $li.find('a').attr('href');

    if (!pathToCategory) {
      return ;
    }

    var pathToCategory = pathToCategory.split('/').slice(6).join('/');
    console.log(currentPathToCategory, pathToCategory);
    if (pathToCategory === currentPathToCategory) {
      $li.hide();
    } else if (pathToCategory.indexOf(currentPathToCategory) >= 0) {
      //$li.show();
      // o
      //$li.css('display', 'none');
    }else {
      $li.hide();
    }
  });

});

