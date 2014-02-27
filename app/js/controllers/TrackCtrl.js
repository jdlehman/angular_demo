bugTrackerApp.controller('TrackCtrl', ['$scope', function($scope) {
  $scope.tracker = {
    bugs: [],
    ctr: 0,
    reporter: 'Jonathan'
  };

  $scope.addBug = function() {
    $scope.tracker.bugs.push({ id: $scope.tracker.ctr,
                               reporter: $scope.tracker.reporter,
                               issue: $scope.tracker.bug });
    $scope.tracker.bug = '';
    $scope.tracker.ctr++;
  };
}]);
