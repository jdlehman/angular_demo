bugTrackerApp.controller('TrackCtrl', ['$scope', 'bugService', function($scope, bugService) {
  $scope.tracker = {
    bugs: bugService.getBugs(),
    ctr: bugService.bugCount(),
    reporter: 'Jonathan'
  };

  $scope.addBug = function() {
    $scope.tracker.ctr++;
    bugService.addBug({ id: $scope.tracker.ctr,
                               reporter: $scope.tracker.reporter,
                               issue: $scope.tracker.bug });
    $scope.tracker.bug = '';
  };
}]);
