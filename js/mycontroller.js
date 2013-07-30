/**
 * Created with JetBrains WebStorm.
 * User: Della
 * Date: 7/30/13
 * Time: 1:45 AM
 * To change this template use File | Settings | File Templates.
 */

Todo.controller('mycontroller',['$scope','angularFire',

    function mycontroller($scope, angularFire){

var url = "https://dellas.firebaseio.com/todo";
var promise = angularFire(url, $scope, 'todoList');

        promise.then(function(todoList){
            $scope.save = function(){
                $scope.todoList.push({x:$scope.myTask});

                $scope.myTask = '';
            };

        })
    }

])