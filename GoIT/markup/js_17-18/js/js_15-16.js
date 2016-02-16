 //<!@@@@@
    google.load("search", "1", {"language" : "en"});

    function OnLoad() {
      // Create a search control
      var searchControl = new google.search.SearchControl();

      // Add in a full set of searchers
      var localSearch = new google.search.LocalSearch();
      var googleWebSearch = new google.search.WebSearch()
      searchControl.addSearcher(googleWebSearch);
   

      // Set the Local Search center point
      localSearch.setCenterPoint("Kiev, UA");

      // tell the searcher to draw itself and tell it where to attach
      searchControl.draw(document.getElementById("searchcontrol"));

      // execute an inital search
      searchControl.execute(null);
    }
    google.setOnLoadCallback(OnLoad);

    //]]>

var human = {
  name: 'Юрий',
  age: 31,
  height: 182,
  weight: 87
};
var worker = {
  __proto__:human
};
var student ={
  __proto__:human
};
console.log('human',human);
console.log('worker',worker);
console.log('student',student);
worker.workingPlace = 'companyName';
worker.salary = 'lowSalary';
worker.toWork = function() {
  alert("работать")
};
console.log('worker',worker);
student.studingPlace = 'someUniversity'
student.stipend = 'somethingInvisible'
student.watchinSerials = function() {
  alert('there is no time to study :)')
};

$(document).ready(function(){
    $(".iheritProperties").html('every day i go to ' + worker.workingPlace + 'and every month i get ' + worker.salary);

    $(".iheritProperties").html('every day i go to ' + student.studingPlace + 'and every month i get ' + student.stipend);

});