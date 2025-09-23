import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key:"36ef63dcdbb5487992b3d32850b68970"
    }    
});