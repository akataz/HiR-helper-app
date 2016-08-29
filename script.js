/* global $ */

$(function () {
  var startup = function () {
    $('#app').html('<button onclick="createClass()">Create new class</button>');
    if (window.localStorage.REMOTE_PREP_HELPER_CLASS) {
      $('#app').append('<button onclick="clearClass()">Clear old class</button>');
      $('#app').append('<button onclick="createPairs()">Create new pairs</button');
      $('#app').append('<button onclick="clearPairs()">Clear old pairs</button>');
    }
  }

  var createClass = function () {
    function submitClass () {
      window.localStorage.setItem('REMOTE_PREP_HELPER_CLASS', document.getElementsByClassName('student'));
    }

    $('#app').html('');
  }

  var clearClass = function () {
    var shouldDelete = confirm('Are you sure you want to delete your current class? You won\'t be able to retrieve it or any previous pairs.');
    if (shouldDelete) {
      window.localStorage.removeItem('REMOTE_PREP_HELPER_CLASS');
      window.localStorage.removeItem('REMOTE_PREP_HELPER_PAIRS');
      document.location.reload(true);
    }
  }

  var createPairs = function () {

  }

  var clearPairs = function () {

  }

  startup();
})
