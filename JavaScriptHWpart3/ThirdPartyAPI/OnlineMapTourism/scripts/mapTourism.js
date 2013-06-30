/// <reference path="jquery-2.0.2.js" />
/// <reference path="mapTourism.js" />

var mapHolder;

//pans to coordinates that are taken from "newPositionElem"
var panTo = function (map, newPositionElem) {
    var lat = newPositionElem.data("lat");
    var lon = newPositionElem.data("lon");
    var newCenter = new google.maps.LatLng(lat, lon);

    var infoWindow = new google.maps.InfoWindow({
        content: newPositionElem.data("info"),
        position: newCenter
    });

    var oldZoom = map.getZoom();
    if (oldZoom < 5) {
        oldZoom = 5;
    }

    map.setZoom(2);
    setTimeout(function () {
        map.panTo(newCenter);
        setTimeout(function () {
            map.setZoom(oldZoom);
            infoWindow.open(map);
            setTimeout(function () {
                google.maps.event.addListener(map, 'zoom_changed', function () {
                    infoWindow.close();
                });
            }, 100);            
        }, 1000);
    }, 1000);
}

window.onload = function () {
    mapHolder = $("body");

    var mapOptions = {
        center: new google.maps.LatLng( 42.696552, 23.32601),
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(
        $("#map-canvas").get(0),
        mapOptions);

    //takes the cities coordinates from a JSON file
    $.getJSON("scripts/citiesCoordinates.js",
        function (data) {
            var list = $("<ul id='cities'></ul>");

            // for each city creates a li and adds as data the city's coordinates
            for (var city in data) {
                var nextCity = $("<li>" + city + "</li>");
                nextCity.data("lat", data[city].Latitude);
                nextCity.data("lon", data[city].Longitude);
                nextCity.data("info", data[city].Info)
                list.append(nextCity);

                if (city == "Sofia") {
                    nextCity.addClass('current');
                }
            }

            mapHolder.append(list);

            // on click pans to new city
            list.on('click', 'li',
               function () {
                   var selected = $(this);
                   mapHolder.find(".current").removeClass("current");
                   selected.addClass("current");
                   panTo(map, selected);
               });
        });

    var button = $("<button></button>");

    var prev = button.clone();
    prev.html("Previous City");    
    prev.click(function () {
        var current = mapHolder.find(".current");
        current.removeClass('current');
        
        if (current.prev().length > 0) {
            current = current.prev();
        }
        else {
            current = current.parent().children().last();
        }

        current.addClass("current");

        panTo(map, current);
    });

    var next = button.clone();
    next.html("Next City");
    next.click(function () {
        var current = mapHolder.find(".current");
        current.removeClass('current');

        if (current.next().length > 0) {
            current = current.next();
        }
        else {
            current = current.parent().children().first();
        }

        current.addClass("current");

        panTo(map, current);
    });
    
    mapHolder.append(prev).append(next);
};