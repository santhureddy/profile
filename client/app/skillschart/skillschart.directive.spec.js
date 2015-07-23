'use strict';

describe('Directive: skillschart', function () {

  // load the directive's module and view
  beforeEach(module('angAppApp'));
  beforeEach(module('app/skillschart/skillschart.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<skillschart></skillschart>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the skillschart directive');
  }));
});