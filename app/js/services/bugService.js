bugTrackerApp.factory('bugService', function() {
  var bugs = [
    { id: 1, reporter: 'Jonathan', issue: 'Some bug' },
    { id: 2, reporter: 'Inky', issue: "I don't even like orange..." }
  ];

  return {
    getBugs: function() {
      return bugs;
    },
    addBug: function(bug) {
      bugs.push(bug);
    },
    bugCount: function() {
      return bugs.length;
    }
  }
});
