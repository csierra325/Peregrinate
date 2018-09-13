// https://medium.com/@zimrick/how-to-create-pure-react-svg-maps-with-topojson-and-d3-geo-e4a6b6848a98
import React, { Component } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldData from "../../components/Map/world-110m.json";
import MapJumbotron from "../../components/MapJumbotron";
import NavTabs from "../../components/NavTabs";
import "../../components/Map/usaMap.css"; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import API from "../../utils/API";

class WorldMap extends Component {
  constructor() {
    super();
    this.state = {
      modal: true,
      id: window.id,
      userID: window.id,
      worlddata: [],
      cities: [
        {
          name: "Tokyo",
          coordinates: [139.6917, 35.6895],
          population: 37843000
        },
        {
          name: "Jakarta",
          coordinates: [106.865, -6.1751],
          population: 30539000
        },
        {
          name: "Delhi",
          coordinates: [77.1025, 28.7041],
          population: 24998000
        },
        {
          name: "Manila",
          coordinates: [120.9842, 14.5995],
          population: 24123000
        },
        {
          name: "Seoul",
          coordinates: [126.978, 37.5665],
          population: 23480000
        },
        {
          name: "Shanghai",
          coordinates: [121.4737, 31.2304],
          population: 23416000
        },
        {
          name: "Karachi",
          coordinates: [67.0099, 24.8615],
          population: 22123000
        },
        {
          name: "Beijing",
          coordinates: [116.4074, 39.9042],
          population: 21009000
        },
        {
          name: "New York",
          coordinates: [-74.0059, 40.7128],
          population: 20630000
        },
        {
          name: "Guangzhou",
          coordinates: [113.2644, 23.1291],
          population: 20597000
        },
        {
          name: "Sao Paulo",
          coordinates: [-46.6333, -23.5505],
          population: 20365000
        },
        {
          name: "Mexico City",
          coordinates: [-99.1332, 19.4326],
          population: 20063000
        },
        {
          name: "Mumbai",
          coordinates: [72.8777, 19.076],
          population: 17712000
        },
        {
          name: "Osaka",
          coordinates: [135.5022, 34.6937],
          population: 17444000
        },
        {
          name: "Moscow",
          coordinates: [37.6173, 55.7558],
          population: 16170000
        },
        {
          name: "Dhaka",
          coordinates: [90.4125, 23.8103],
          population: 15669000
        },
        {
          name: "Greater Cairo",
          coordinates: [31.2357, 30.0444],
          population: 15600000
        },
        {
          name: "Los Angeles",
          coordinates: [-118.2437, 34.0522],
          population: 15058000
        },
        {
          name: "Bangkok",
          coordinates: [100.5018, 13.7563],
          population: 14998000
        },
        {
          name: "Kolkata",
          coordinates: [88.3639, 22.5726],
          population: 14667000
        },
        {
          name: "Buenos Aires",
          coordinates: [-58.3816, -34.6037],
          population: 14122000
        },
        {
          name: "Tehran",
          coordinates: [51.389, 35.6892],
          population: 13532000
        },
        {
          name: "Istanbul",
          coordinates: [28.9784, 41.0082],
          population: 13287000
        },
        { name: "Lagos", coordinates: [3.3792, 6.5244], population: 13123000 },
        {
          name: "Shenzhen",
          coordinates: [114.0579, 22.5431],
          population: 12084000
        },
        {
          name: "Rio de Janeiro",
          coordinates: [-43.1729, -22.9068],
          population: 11727000
        },
        {
          name: "Kinshasa",
          coordinates: [15.2663, -4.4419],
          population: 11587000
        },
        {
          name: "Tianjin",
          coordinates: [117.3616, 39.3434],
          population: 10920000
        },
        { name: "Paris", coordinates: [2.3522, 48.8566], population: 10858000 },
        {
          name: "Lima",
          coordinates: [-77.0428, -12.0464],
          population: 10750000
        }
      ],
      traveledlist: [],
      bucketlist: [],
      friendlist: [],
      currentPage: "WorldMap"
    };

    this.handleCountryClick = this.handleCountryClick.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  projection() {
    return geoMercator()
      .scale(100)
      .translate([800 / 2, 450 / 2]);
  }

  handleCountryClick(countryIndex) {
    console.log("Clicked on country: ", this.state.worlddata[countryIndex]);
  }

  handleMarkerClick(markerIndex) {
    console.log("Marker: ", this.state.cities[markerIndex]);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    this.setState({
      worlddata: feature(worldData, worldData.objects.ne_110m_admin_0_countries)
        .features
    });

    API.getUser(window.id)
      .then(res => {
        const dbUser = res.data;
        this.setState({ 
        traveledlist: dbUser.traveledlist,
        friendlist: dbUser.friendlist,
        bucketlist: dbUser.bucketlist
       })})
      .catch(err => console.log(err));
  }
  

  // changeStateNameToAbbreviation = (input, to) => {
  //     var states = [
  //         ['Arizona', 'AZ'],
  //         ['Alabama', 'AL'],
  //         ['Alaska', 'AK'],
  //         ['Arizona', 'AZ'],
  //         ['Arkansas', 'AR'],
  //         ['California', 'CA'],
  //         ['Colorado', 'CO'],
  //         ['Connecticut', 'CT'],
  //         ['Delaware', 'DE'],
  //         ['Florida', 'FL'],
  //         ['Georgia', 'GA'],
  //         ['Hawaii', 'HI'],
  //         ['Idaho', 'ID'],
  //         ['Illinois', 'IL'],
  //         ['Indiana', 'IN'],
  //         ['Iowa', 'IA'],
  //         ['Kansas', 'KS'],
  //         ['Kentucky', 'KY'],
  //         ['Kentucky', 'KY'],
  //         ['Louisiana', 'LA'],
  //         ['Maine', 'ME'],
  //         ['Maryland', 'MD'],
  //         ['Massachusetts', 'MA'],
  //         ['Michigan', 'MI'],
  //         ['Minnesota', 'MN'],
  //         ['Mississippi', 'MS'],
  //         ['Missouri', 'MO'],
  //         ['Montana', 'MT'],
  //         ['Nebraska', 'NE'],
  //         ['Nevada', 'NV'],
  //         ['New Hampshire', 'NH'],
  //         ['New Jersey', 'NJ'],
  //         ['New Mexico', 'NM'],
  //         ['New York', 'NY'],
  //         ['North Carolina', 'NC'],
  //         ['North Dakota', 'ND'],
  //         ['Ohio', 'OH'],
  //         ['Oklahoma', 'OK'],
  //         ['Oregon', 'OR'],
  //         ['Pennsylvania', 'PA'],
  //         ['Rhode Island', 'RI'],
  //         ['South Carolina', 'SC'],
  //         ['South Dakota', 'SD'],
  //         ['Tennessee', 'TN'],
  //         ['Texas', 'TX'],
  //         ['Utah', 'UT'],
  //         ['Vermont', 'VT'],
  //         ['Virginia', 'VA'],
  //         ['Washington', 'WA'],
  //         ['West Virginia', 'WV'],
  //         ['Wisconsin', 'WI'],
  //         ['Wyoming', 'WY'],
  //     ];
  
  //     if (to == 'abbr'){
  //         input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  //         for(i = 0; i < states.length; i++){
  //             if(states[i][0] == input){
  //                 return(states[i][1]);
  //             }
  //         }    
  //     } else if (to == 'name'){
  //         input = input.toUpperCase();
  //         for(i = 0; i < states.length; i++){
  //             if(states[i][1] == input){
  //                 return(states[i][0]);
  //             }
  //         }    
  //     }
  // }
  

  //USA MAP
  mapHandler = event => {
    alert(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    let config = this.state.traveledlist.reduce((configObj, currValue) => {
      configObj[currValue] = { fill: "#f55e60" };
      return configObj;
    }, {});

    config = this.state.bucketlist.reduce((configObj, currValue) => {
      configObj[currValue] = { fill: "#8abaa2" };
      return configObj;
    }, config);

    config = this.state.friendlist.reduce((configObj, currValue) => {
      configObj[currValue] = { fill: "#157efb" };
      return configObj;
    }, config);

    return config;
  };

  render() {
    return (
      <div className="wrapper">
        <NavTabs />
        <MapJumbotron className="mh-100">
          <div>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>
                Welcom to Your Map Page
              </ModalHeader>
              <ModalBody>
                This page allows you to do really cool stuff. Have fun!
              </ModalBody>
            </Modal>
          </div>

          <div class="card">
            <h2 class="card-text">US States you have traveled to:</h2>
            <div class="card-body">
              <div className="usaMap">
                <USAMap
                  customize={this.statesCustomConfig()}
                  onClick={this.mapHandler}
                />
              </div>
            </div>
          </div>

          <hr />

          <div class="card">
            <h2 class="card-text">Countries you have traveled to:</h2>
            <div class="card-body">
              <svg width={800} height={450} viewBox="0 0 800 450">
                <g className="countries">
                  {this.state.worlddata.map((d, i) => (
                    <path
                      key={`path-${i}`}
                      d={geoPath().projection(this.projection())(d)}
                      className="country"
                      fill={`rgba(38,50,56,${(1 / this.state.worlddata.length) *
                        i})`}
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                      onClick={() => this.handleCountryClick(i)}
                    />
                  ))}
                </g>
                <g className="markers">
                  {this.state.cities.map((city, i) => (
                    <circle
                      key={`marker-${i}`}
                      cx={this.projection()(city.coordinates)[0]}
                      cy={this.projection()(city.coordinates)[1]}
                      r={city.population / 3000000}
                      fill="#E91E63"
                      stroke="#FFFFFF"
                      className="marker"
                      onClick={() => this.handleMarkerClick(i)}
                    />
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </MapJumbotron>
      </div>
    );
  }
}

export default WorldMap;
