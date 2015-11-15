var $ = jQuery;

$(function() {

  var $categories = $('.product-categories li');

  if (!$categories.length) {
    return ;
  }

  var currentPathToCategory = window.location.pathname.split('/').slice(3).join('/');

  $categories.each(function(index, li) {
    var $li = $(li),
      pathToCategory = $li.find('a').attr('href');

    if (!pathToCategory) {
      return ;
    }

    var pathToCategory = pathToCategory.split('/').slice(5).join('/');
    console.log(pathToCategory, currentPathToCategory);
    if (currentPathToCategory === pathToCategory) {
      // $li.hide();
      // o
      // $li.css('display', 'none');
    }
  });

});

