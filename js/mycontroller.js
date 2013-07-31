/**
 * Created with JetBrains WebStorm.
 * User: Della
 * Date: 7/30/13
 * Time: 1:45 AM
 * To change this template use File | Settings | File Templates.
 */

Todo.controller('mycontroller',['$scope','angularFire',

    function mycontroller($scope, angularFire){

var url = "https://dellas.firebaseio.com/todo"; //url of todolist at firebase
var promise = angularFire(url, $scope, 'todoList'); //promise, last argument is referencing the firebase model

        promise.then(function(todoList){

                $scope.save = function(){    //when you click the save button
                    if($scope.todoForm.$valid){
                        $scope.todoList.push({x:$scope.myTask});    //pushes the data in 'myTask' into the html list

                 $scope.myTask = ''; //clears the value in myTask
                }
            };
        })
    }
])