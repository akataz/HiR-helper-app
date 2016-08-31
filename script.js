/* global $ */

var submitClass, addStudent;
var studentsArr = [];
var students = {};
var pairs = [];

var startup = function () {
  $('#app').html('<button onclick="createClass()">Create new class</button>');
  if (window.localStorage.REMOTE_PREP_HELPER_CLASS) {
    $('#app').append('<button onclick="editClass()">Edit current class</button>');
    $('#app').append('<button onclick="clearClass()">Clear old class</button>');
    $('#app').append('<button onclick="createPairs()">Create new pairs</button');
    $('#app').append('<button onclick="clearPairs()">Clear old pairs</button>');
  }
}

var createClass = function () {
  submitClass = function () {
    if (students.length % 2) {
      studentsArr.push('');
    }
    studentsArr.forEach(function(student) {
      students[student] = [];
    })
    window.localStorage.setItem('REMOTE_PREP_HELPER_CLASS', JSON.stringify(students));
    startup();
  }

  addStudent = function () {
    var student = $('#student').val();
    console.log(student);
    $('#newClassTable').append('<tr><td>' + student + '</td></tr>').addlistener;
    studentsArr.push(student);
  }

  $('#app').html('<table border=1><thead><tr><th>Students</th></tr><tbody id="newClassTable"></tbody></table>');
  $('#app').append('<input id="student" />');
  $('#app').append('<button onclick="addStudent()">Add Student</button>');
  $('#app').append('<button onclick="submitClass()">Submit Class</button>');
}

var editClass = function () {
  var students = JSON.parse(window.localStorage.getItem('REMOTE_PREP_HELPER_CLASS'));
  $('#app').html('<table border=1><thead><tr><th>Students</th></tr><tbody id="newClassTable"></tbody></table>');
  for (var student in students) {
    $('#newClassTable').append('<tr><td id="' + student + '">' + student + '</td></tr>');
    $('#' + student).on('click', function () {
      $('#app').append('')
    })
  }
}

var clearClass = function () {
  var shouldDelete = confirm('Are you sure you want to delete your current class? You won\'t be able to retrieve it or any previous pairs.');
  if (shouldDelete) {
    window.localStorage.removeItem('REMOTE_PREP_HELPER_CLASS');
    window.localStorage.removeItem('REMOTE_PREP_HELPER_PAIRS');
    startup();
  }
}

var createPairs = function () {

}

var clearPairs = function () {

}


$(function () {
  startup();
})
