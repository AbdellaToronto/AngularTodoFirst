/**
 * Created with JetBrains WebStorm.
 * User: Della
 * Date: 7/31/13
 * Time: 4:58 PM
 * To change this template use File | Settings | File Templates.
 */

Todo.directive('todoBlur', function () {
    return function (scope, elem, attrs) {
        elem.bind('blur', function () {
            scope.$apply(attrs.todoBlur);
        });
    };
});
