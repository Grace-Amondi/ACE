(function () {

  angular
    .module('loc8rApp')
    .controller('aboutCtrl', aboutCtrl);

  function aboutCtrl() {
    var vm = this;

    vm.pageHeader = {
      title: 'About Ace'
    };
    vm.main = {
      content:'Ace was created to help people find places to sit down and get a bit of work done. With Ace you are sure to find wifi for as far as 200km. \nYou can know how good wifi is by just viewing the rating as well as the reviews left by other users. You can also contribute by leaving a review for others who would be looking for wifi like you. Dont forget to share and let others know the power of ACE.' +
      '\n\nAce, let your phone do the walking.'
    };
  }

})();