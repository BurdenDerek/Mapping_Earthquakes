// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

let acv = [40.97806, -124.10861]
let sfo = [37.6180555556, -122.3786111111]
let aus = [30.1944444444, -97.67]
let yyz = [43.6775, -79.6308333333]
let jfk = [40.6441666667, -73.7822222222]

// Coordinates for each point to be used in the polyline.
let line = [
	acv,
	sfo,
	aus,
	yyz,
	jfk
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
	color: "blue",
	dashArray: "20, 20",
	opacity: .5,
	weight: 4
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);