'use strict';

angular.module('angAppApp')
  .directive('skillschart', function () {
    return {
      templateUrl: 'app/skillschart/skillschart.html',
      restrict: 'E',
         replace: true,
         template: '<div id="chart"></div>',
         link: function (scope, element, attrs) {
           var data = attrs.data.split(','),
           names = attrs.names.split(','),

           chart = d3.select('#chart').append("div").attr("class", "chart");
           chart.selectAll('div')
                  .data(data).enter()
                  .append("div").attr("class", "bars")
                  .transition().ease("elastic")
                  .style("width", function(d) { return d + "%"; })
                  .text(function(d) { return d + "%"; });
           chart.selectAll("div.text")
                  .data(names)
                  .enter().append("div").attr('class', 'names')
                  .text(function(d) { return d;});
      }
    };
  });