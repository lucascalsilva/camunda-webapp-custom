'use strict';

module.exports = function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, model) {

      var pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(|\.[0-9]{0,4})$/;

      var dateParser = function(value) {

        var isValidPattern = pattern.test(value);
        var isValidValue = isValidPattern ? !isNaN(new Date(value).getTime()) : true;
        model.$setValidity('datePattern', isValidPattern);
        model.$setValidity('dateValue', isValidValue);
        return value;
      };

      model.$parsers.push(dateParser);

      var dateFormatter = function(value) {

          // if the value is not set,
          // then ignore it!
        if (!value) {
          return;
        }

        var isValidValue = !isNaN(new Date(value).getTime());
        var isValidPattern = pattern.test(value);
        var isValid = isValidValue && isValidPattern;
        model.$setValidity('datePattern', isValidPattern);
        model.$setValidity('dateValue', isValidValue);

        if (!isValid) {
            // if the value is invalid, then
            // set $pristine to false and set $dirty to true,
            // that means the user has interacted with the controller.
          model.$pristine = false;
          model.$dirty = true;

            // add 'ng-dirty' as class to the element
          element.addClass('ng-dirty');
        }

        return value;
      };

      model.$formatters.push(dateFormatter);
    }
  };
};
