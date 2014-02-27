bugTrackerApp.directive('jlBug', function() {
  return {
    restrict: 'E',
    scope: {
      bugData: '='
    },
    template: '<div style="padding:10px">' +
                '<strong>Description:</strong> {{ bugData.issue }}<br>' +
                'Reported by <em>{{ bugData.reporter }}</em>' +
              '</div>'
  }
});
