// Function to determine marker size based on population
function markerSize(salary) {
  return salary / 3;
}

// An array containing all of the information needed to create city and state markers
var locations = [







  {
    coordinates: [40.440624,	-79.995888],
    state: {
      name: "Pennsylvania",
      rank: 20
    },
    city: {
      name: "Pittsburgh",
      salary: 48580
    }
  },
  {
    coordinates: [39.099724,	-94.578331],
    state: {
      name: "Missouri",
      rank: 20
    },
    city: {
      name: "Kansas City",
      salary: 49460
    }
  },

  {
    coordinates: [40.044437,	-76.306229],
    state: {
      name: "Pennsylvania",
      rank: 20
    },
    city: {
      name: "Lancaster",
      salary: 43760
    }
  },

  {
    coordinates: [41.76371,	-72.685097],
    state: {
      name: "Connecticut",
      rank: 20
    },
    city: {
      name: "Hartford",
      salary: 60040
    }
  },

  {
    coordinates: [35.964668,	-83.926453],
    state: {
      name: "Tennessee",
      rank: 20
    },
    city: {
      name: "Knoxville",
      salary: 43840
    }
  },
  {
    coordinates: [32.776566,	-79.930923],
    state: {
      name: "South Carolina",
      rank: 20
    },
    city: {
      name: "Charleston",
      salary: 44970
    }
  },

  {
    coordinates: [40.26368,	-76.890739],
    state: {
      name: "Pennsylvania",
      rank: 20
    },
    city: {
      name: "Harrisburg",
      salary: 48270
    }
  },
  {
    coordinates: [43.008663,	-71.454391],
    state: {
      name: "New Hampshire",
      rank: 20
    },
    city: {
      name: "Manchester",
      salary: 52640
    }
  },

  {
    coordinates: [30.332184,	-81.655647],
    state: {
      name: "Florida",
      rank: 20
    },
    city: {
      name: "Jacksonville",
      salary: 45760
    }
  },


  {
    coordinates: [42.732536,	-84.555534],
    state: {
      name: "Michigan",
      rank: 20
    },
    city: {
      name: "Lansing",
      salary: 47990
    }
  },

  {
    coordinates: [41.093842,	-85.139236],
    state: {
      name: "Indiana",
      rank: 20
    },
    city: {
      name: "Fort Wayne",
      salary: 43590
    }
  },

  {
    coordinates: [41.093842,	-85.139236],
    state: {
      name: "Indiana",
      rank: 20
    },
    city: {
      name: "Fort Wayne",
      salary: 43590
    }
  },

  {
    coordinates: [39.103119,	-84.512016],
    state: {
      name: "Ohio",
      rank: 20
    },
    city: {
      name: "Cincinnati",
      salary: 48890
    }
  },
  {
    coordinates: [39.791,	-86.148003],
    state: {
      name: "Indiana",
      rank: 20
    },
    city: {
      name: "Indianapolis",
      salary: 48030
    }
  },
  {
    coordinates: [30.433283,	-87.240372],
    state: {
      name: "Florida",
      rank: 20
    },
    city: {
      name: "Pensacola",
      salary: 41200
    }
  },

  {
    coordinates: [32.715736,	-117.161087],
    state: {
      name: "California",
      rank: 20
    },
    city: {
      name: "San Diego",
      salary: 56410
    }
  },

  {
    coordinates: [26.640629, -81.872307],
    state: {
      name: "Florida",
      rank: 20
    },
    city: {
      name: "Fort Myers",
      salary: 41380
    }
  },

  {
    coordinates: [29.424349,	-98.491142],
    state: {
      name: "Texas",
      rank: 20
    },
    city: {
      name: "San Antonio",
      salary: 46200
    }
  },

  {
    coordinates: [39.530895, -119.814972],
    state: {
      name: "Nevada",
      rank: 20
    },
    city: {
      name: "Reno",
      salary: 46330
    }
  },
  {
    coordinates: [41.25716,	-95.995102],
    state: {
      name: "Nebraska",
      rank: 20
    },
    city: {
      name: "Omaha",
      salary: 47660
    }
  },

  {
    coordinates: [36.099861, -80.244217],
    state: {
      name: "North Carolina",
      rank: 20
    },
    city: {
      name: "Winston-Salem",
      salary: 44910
    }
  },
  {
    coordinates: [29.749907, -95.358421],
    state: {
      name: "Texas",
      rank: 20
    },
    city: {
      name: "Houston",
      salary: 53820
    }
  },

  {
    coordinates: [38.047989, -84.50164],
    state: {
      name: "Kentucky",
      rank: 20
    },
    city: {
      name: "Lexington-Fayette",
      salary: 43720
    }
  },

  {
    coordinates: [42.65258, -73.756233],
    state: {
      name: "New York",
      rank: 10
    },
    city: {
      name: "Albany",
      salary: 52770
    }
  },
  {
    coordinates: [42.361145, -71.057083],
    state: {
      name: "Massachusets",
      rank: 10
    },
    city: {
      name: "Boston",
      salary: 65420
    }
  },

  {
    coordinates: [33.448376, -112.074036],
    state: {
      name: "Arizona",
      rank: 10
    },
    city: {
      name: "Phoenix",
      salary: 49500
    }
  },

  {
    coordinates: [28.0836, -80.6081],
    state: {
      name: "Florida",
      rank: 10
    },
    city: {
      name: "Melbourne",
      salary: 48240
    }
  },


  {
    coordinates: [40.758701, -111.876183],
    state: {
      name: "Utah",
      rank: 10
    },
    city: {
      name: "Salt Lake City",
      salary: 47272
    }
  },
  {
    coordinates: [43.6591, -70.2568],
    state: {
      name: "Maine",
      rank: 10
    },
    city: {
      name: "Portland",
      salary: 48970
    }
  },
  
  {
    coordinates: [34.852619, -82.394012],
    state: {
      name: "South Carolina",
      rank: 10
    },
    city: {
      name: "Greenville",
      salary: 43230
    }
  },

  {
    coordinates: [32.779167, -96.808891],
    state: {
      name: "Texas",
      rank: 10
    },
    city: {
      name: "Dallas-Fort Worth",
      salary: 51250
    }
  },
  {
    coordinates: [38.9072, -77.0369],
    state: {
      name: "Washington DC",
      rank: 10
    },
    city: {
      name: "Washington, DC",
      salary: 69210
    }
  },
  {
    coordinates: [27.341274, -82.528267],
    state: {
      name: "Florida",
      rank: 10
    },
    city: {
      name: "Sarasota",
      salary: 42680
    }
  },
  {
    coordinates: [43.618881, -116.215019],
    state: {
      name: "Idaho",
      rank: 10
    },
    city: {
      name: "Boise",
      salary: 43880
    }
  },

  {
    coordinates: [35.5951, -82.5515],
    state: {
      name: "North Carolina",
      rank: 10
    },
    city: {
      name: "Ashville",
      salary: 41210
    }
  },
  {
    coordinates: [36.174465, -86.76796],
    state: {
      name: "Tennessee",
      rank: 10
    },
    city: {
      name: "Nashville",
      salary: 47110
    }
  },

  {
    coordinates: [37.3382, -121.8863],
    state: {
      name: "California",
      rank: 10
    },
    city: {
      name: "San Jose",
      salary: 77180
    }
  },

  {
    coordinates: [42.963795, -85.6681],
    state: {
      name: "Michigan",
      rank: 10
    },
    city: {
      name: "Grand Rapids",
      salary: 44770
    }
  },
  {
    coordinates: [43.073051, -89.40123],
    state: {
      name: "Wisconsin",
      rank: 10
    },
    city: {
      name: "Madison",
      salary: 52190
    }
  },
  {
    coordinates: [34.738228, -86.601791],
    state: {
      name: "Alabama",
      rank: 10
    },
    city: {
      name: "Huntsville",
      salary: 53600
    }
  },

  {
    coordinates: [35.787743, -78.644257],
    state: {
      name: "North Carolina",
      rank: 10
    },
    city: {
      name: "Raleigh Durham",
      salary: 53788
    }
  },



  {
    coordinates: [47.608013, -122.335167],
    state: {
      name: "Washington",
      rank: 10
    },
    city: {
      name: "Seattle",
      salary: 63120
    }
  },

  {
    coordinates: [45.523064, -122.676483],
    state: {
      name: "Oregon",
      rank: 10
    },
    city: {
      name: "Portland",
      salary: 55330
    }
  },
  {
    coordinates: [37.733795, -122.446747],
    state: {
      name: "California",
      rank: 10
    },
    city: {
      name: "San Francisco",
      salary: 69700
    }
  },


  {
    coordinates: [44.986656, -93.258133],
    state: {
      name: "Minnesota",
      rank: 10
    },
    city: {
      name: "Minneapolis-St. Paul",
      salary: 56030
    }
  },
  {
    coordinates: [41.619549, -93.598022],
    state: {
      name: "Iowa",
      rank: 10
    },
    city: {
      name: "Des Moines",
      salary: 50600
    }
  },

  {
    coordinates: [36.082157, -94.171852],
    state: {
      name: "Arkansas",
      rank: 10
    },
    city: {
      name: "Fayetteville",
      salary: 45830
    }
  },
  {
    coordinates: [39.742043, -104.991531],
    state: {
      name: "Colorado",
      rank: 10
    },
    city: {
      name: "Denver",
      salary: 57400
    }
  },
  
  
  {
    coordinates: [30.266666, -97.7431],
    state: {
      name: "Texas",
      rank: 10
    },
    city: {
      name: "Austin",
      salary: 51840
    }
  },
  {
    coordinates: [38.846127, -104.800644],
    state: {
      name: "Colorado"
      
    },
    city: {
      name: "Colorado Springs",
      salary: 50050
      
    }
  }
];

// Define arrays to hold created city and state markers
var cityMarkers = [];
var stateMarkers = [];

// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
 

  // Setting the marker radius for the city by passing population into the markerSize function
  cityMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "orange",
      fillColor: "red",
      radius: markerSize(locations[i].city.salary)
    })
  );
}

// Define variables for our base layers
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Create two separate layer groups: one for cities and one for states
var states = L.layerGroup(stateMarkers);
var cities = L.layerGroup(cityMarkers);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  //"Cool factor": states
  "Top 50 Cities to live in": cities
};

// Define a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [streetmap, states, cities]
});


   
  
// Giving each feature a pop-up with information pertinent to it
//layer.bindPopup("<h1>" + feature.properties.neighborhood + "</h1> <hr> <h2>" + feature.properties.borough + "</h2>");

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);