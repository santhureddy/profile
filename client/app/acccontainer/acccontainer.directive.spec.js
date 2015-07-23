'use strict';

describe('Directive: acccontainer', function () {

  // load the directive's module
  beforeEach(module('angAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<acccontainer></acccontainer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the acccontainer directive');
  }));
});