'use strict';

console.log('hello!')

var app = angular.module('ContactsList', ['ngStorage']);


app.controller('mainCtrl', function($scope, $localStorage){

  $scope.keys = Object.keys;

  $scope.contacts = $localStorage.contacts || [];

  $scope.sortType     = 'firstname';
  $scope.sortReverse  = false;
  $scope.inEditMode = false;

  $scope.sortBy = function(keyName){
    $scope.sortType = keyName;
    $scope.sortReverse  = !$scope.sortReverse;
  }

  $scope.addContact = function(){

    // html5 required field is not helping, this is temporary field validation
    if(!$scope.contact){
      return console.log('Require Field Missing!');
    }
    else if(!$scope.contact.firstname){
      return console.log('Require Field Missing!');
    }
    else if(!$scope.contact.lastname){
      return console.log('Require Field Missing!');
    }
    else if(!$scope.contact.address){
      return console.log('Require Field Missing!');
    }
    else if(!$scope.contact.phone){
      return console.log('Require Field Missing!');
    }

    $scope.newContact = angular.copy($scope.contact);
    $scope.contacts.push($scope.newContact);
    $localStorage.contacts = $scope.contacts;
    $scope.contact = {};
  }

  $scope.removeContact = function(contact){
    var index = $scope.contacts.indexOf(contact);
    $scope.contacts.splice(index, 1);
    console.log($scope.contacts)
  }

  $scope.editContact = function(contact){
    $scope.inEditMode = true;
    $scope.contact = contact;
  }

  $scope.saveEditContact = function(contact){
    $scope.contact = {};
    $scope.inEditMode = false;
  }

  $scope.cancelEditContact = function(){
    $scope.inEditMode = false;
    $scope.contact = {};
  }

});
