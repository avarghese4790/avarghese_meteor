Router.route('/', function () {
  this.render('avargheseHome', {});
});

Router.route('/admin', function () {
  this.render('avargheseAdmin', {});
});

Router.route('/travel', function () {
  this.render('travelGallery', {});
});

Router.route('/career', function () {
  this.render('careerRecharge', {});
});

Router.route('/monopoly', function () {
  this.render('monopolySimulator', {});
});

Router.route('/blocks', function () {
  this.render('blocks', {});
});