/**
 * Created with JetBrains WebStorm.
 * User: Della
 * Date: 7/30/13
 * Time: 1:45 AM
 * To change this template use File | Settings | File Templates.
 */


Todo.controller('mycontroller', ['$scope', 'angularFire',

    function mycontroller($scope, angularFire) {

        var url = "https://dellas.firebaseio.com/todo"; //url of todolist at firebase
        var promise = angularFire(url, $scope, 'todoList'); //promise, last argument is referencing the firebase model


        promise.then(function (todoList) {

            $scope.save = function () {    //when you click the save button
                if ($scope.todoForm.$valid) {
                    $scope.todoList.push({
                        title: $scope.myTask,
                        inEdit: false
                    });    //pushes the data in 'myTask' into the html list

                    $scope.myTask = ''; //clears the value in myTask
                }
            };

            $scope.delete = function(todo) {
                $scope.todoList.splice($scope.todoList.indexOf(todo), 1);
            }

            $scope.edit = function(todo) {
                $scope.prevTodo = angular.copy(todo);
                todo.inEdit = true;
                $scope.updateSuccess = false;
            }

            $scope.cancelEdit = function (todo){
                todo.inEdit = false;

                if($scope.updateSuccess == false){
                    todo.title = $scope.prevTodo.title;
                }
            }

            $scope.updateTodo = function(todo){
                if(!todo.title){
                    $scope.delete(todo);
                }
                todo.inEdit = false;
                $scope.updateSuccess = true;
            }

        })
    }
]);