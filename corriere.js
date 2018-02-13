var po = org.polymaps;

var paris =  {lat: 48.856614, lon: 2.352222};
var london = {lat: 51.507222, lon: -0.12750};
var rome = {lat:41.89052,lon:12.494249};
var newyork = {lat:40.714353,lon:-74.005973}
var sanfra = {lat: 37.77493, lon:-122.419415};
var losangeles = {lat: 33.895849, lon:-118.220071};
var test = {lon: -0.4235, lat:51.6113};
var jerusalem = {lon: 35.216667, lat:31.783333};

var map = po.map()
    .container(document.getElementById("map").appendChild(po.svg("svg")))
    .center(jerusalem)
    .zoom(11)
    .add(po.interact());

map.add(po.image()
    .url(po.url("http://{S}tile.cloudmade.com"
    + "/1a1b06b230af4efdbb989ea99e9841af"
    + "/15434/256/{Z}/{X}/{Y}.png")
    .hosts(["a.", "b.", "c.", ""])));

map.add(po.geoJson()
    .url("jerusalem.json")
    .on("load", load)
    .clip(false)
    );

map.add(po.compass()
    .pan("none"));


/** Post-process the GeoJSON points and replace them with shiny balls! */
function load(e) {
  for (var i = 0; i < e.features.length; i++) {
  
	var op = (e.features[i].data.properties.alpha);
    var c = e.features[i].element;
        c.setAttribute("opacity", op);
        c.setAttribute("fill", "#ff0000");
        c.setAttribute("r", 2); //se usi i pallozzi con questo cambi il raggio

 }

}





