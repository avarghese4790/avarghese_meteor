Router.route('/', function () {
  this.render('landing', {});
});

Router.route('/admin', function () {
  this.render('admin', {});
});

Router.route('/travel', function () {
  this.render('travelGallery', {});
});

Router.route('/career', function () {
  this.render('careerRecharge', {});
});