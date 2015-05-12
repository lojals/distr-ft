/* MAP View Controller */
/* Author: Jorge R Ovalle Z*/
angular.module('Distritoapp').controller('mapController',function($scope,$http){
  L.mapbox.accessToken = 'pk.eyJ1IjoibG9qYWxzIiwiYSI6IjhPeHF4bzgifQ.hYEX8Na-kEfco8ELkvZkgg';
  var filters = document.getElementById('filters');

  $http.get('js/data/events.json').
    success(function (data) {
        //var map = L.mapbox.map('map', 'lojals.m5822dki').setView([4.611331355881756,-74.07840728759766], 13);
        var map = L.mapbox.map('map', 'lojals.m5822dki',{ zoomControl: false });
        // Function loading the Pin icons for each type: Tarimas/Festivales/Tiendas
        map.featureLayer.on('layeradd', function(e) {
            var marker = e.layer,
                feature = marker.feature;
            marker.setIcon(L.icon(feature.properties.icon));
        });
        // Function to create the UI to filter Pins
        map.featureLayer.on('ready', function() {
          map.featureLayer.setGeoJSON(data);
          var typesObj = {}, types = [];
          var features = data.features;
          for (var i = 0; i < features.length; i++) {
            typesObj[features[i].properties['type']] = true;
          }
          for (var k in typesObj)types.push(k);
          var checkboxes = [];
          for (var i = 0; i < types.length; i++) {
            var item = filters.appendChild(document.createElement('div'));
            var checkbox = item.appendChild(document.createElement('input'));
            var label = item.appendChild(document.createElement('label'));
            checkbox.type = 'checkbox';
            checkbox.id = types[i];
            checkbox.checked = true;
            label.innerHTML = types[i];
            label.setAttribute('for', types[i]);
            checkbox.addEventListener('change', update);
            checkboxes.push(checkbox);
          }
          // Function to update the actual pins
          function update() {
            var enabled = {};
            for (var i = 0; i < checkboxes.length; i++) {
              if (checkboxes[i].checked) enabled[checkboxes[i].id] = true;
            }
            map.featureLayer.setFilter(function(feature) {
              return (feature.properties['type'] in enabled);
            });
          }
        });
    }).
    error(function (data, status) {
      // Error handler with API connection
    });
});
