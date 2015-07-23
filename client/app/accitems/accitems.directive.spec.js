'use strict';

describe('Directive: accitems', function () {

  // load the directive's module and view
  beforeEach(module('angAppApp'));
  beforeEach(module('app/accitems/accitems.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<accitems></accitems>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the accitems directive');
  }));
});