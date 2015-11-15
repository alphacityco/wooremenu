var $ = jQuery;

$(function() {

  var $categories = $('.product-categories li a');

  if (!$categories.length) {
    return ;
  }

  var currentPathToCategory = window.location.pathname.split('/').slice(3).join('/');

  $categories.each(function(index, el) {
    var $el = $(el),
      pathToCategory = $(el).attr('href');

    if (!pathToCategory) {
      return ;
    }

    var pathToCategory = pathToCategory.split('/').slice(5).join('/');
    console.log(pathToCategory, currentPathToCategory);
    if (currentPathToCategory === pathToCategory) {
      // $el.hide();
      // o
      // $el.css('display', 'none');
    }
  });

});

