Router.route('/', function () {
  this.render('landing', {});
});

Router.route('/admin', function () {
  this.render('admin', {});
});