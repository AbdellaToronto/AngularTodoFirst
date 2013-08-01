/**
 * Created with JetBrains WebStorm.
 * User: Della
 * Date: 7/31/13
 * Time: 4:41 PM
 * To change this template use File | Settings | File Templates.
 */

Todo.directive('todoFocus', function($timeout) {
        return function (scope, elem, attrs){
            scope.$watch(attrs.todoFocus, function(value) {
            if(value) {
             $timeout(function () {

                 elem[0].focus();
             },0,false);
            }
            });

        }
});