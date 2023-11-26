import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const APIKEY = "AIzaSyBtvzTQ7YTK_tXzdK-Nyldv9IP_DiySmG4";

const mapStyles = {
    width: "100%",
    height: "100%"
}
const MapContainer = ({google}) => {
    return(
        <div>
           <Map
             google={google}
             zoom={14}
             style={mapStyles}
             initialCenter={{
                lat: 40.7128,
                lng: -74.0060
                }}
           
           >
            <Marker 
                name={'Current Location'}
                position={{lat: 40.7128, lng: -74.0060}}

            />
           </Map>
        </div>
    )
}


export default GoogleApiWrapper({
    apiKey: (APIKEY)
})(MapContainer);