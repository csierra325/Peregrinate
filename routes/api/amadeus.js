// Consumer Key	v6GXrGrT04AWCblHYYiKXAznKmyABeKV

import axios from "axios";
const BASEURL = "http://api.tixik.com/api/nearby?lang=en&lat=36.106121163930377&lng=28.07762145996093&limit=10&key=";
const APIKEY = "20180823031440594079204";

export default {
  findInspiration: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};