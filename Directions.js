//routes object
const Directions = {
  trenLigero: [
    // Ruta 1
    {
      positionA: new google.maps.LatLng(
        20.607158333950338, 
        -103.40104954771516
      ),
      positionB: new google.maps.LatLng(
        20.736022861657037, 
        -103.35050073595863
      ),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        hideRouteList: true,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#ff0000" },
      }),
      type: "TRANSIT",
    },
    // Ruta 2
    {
      positionA: new google.maps.LatLng(
        20.66000557085226, 
        -103.27604927101268
      ),
      positionB: new google.maps.LatLng(
        20.674900668252324, 
        -103.3554231557957),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        hideRouteList: true,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#ff0000" },
      }), 
      type: "TRANSIT",
    },
    //Ruta 3
    {
      positionA: new google.maps.LatLng(
        20.62317693973879, 
        -103.28514789254717
        ),
      positionB: new google.maps.LatLng(
        20.741180450632807, 
        -103.407408834568
      ),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        hideRouteList: true,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#ff0000" },
      }),
      type: "TRANSIT",
    },
  ],
  macroBus: [
    {
      positionA: new google.maps.LatLng(
        20.737141581919158, 
        -103.31218422135356
      ),
      positionB: new google.maps.LatLng(
        20.608285626589883, 
        -103.34287873451213
      ),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        hideRouteList: true,
        suppressMarkers: true,
      }),
      type: "TRANSIT",
    },
  ], 
  ciclovia: [
    //Ruta 1
    {
      positionA: new google.maps.LatLng(
        20.733907094331027,
        -103.36107084364636
      ),
      positionB: new google.maps.LatLng(
        20.74439593558257, 
        -103.3580272089126
        ),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        hideRouteList: true,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#0de04d" },
        
      }),
      type: "BICYCLING",
    },
    // Ruta 2
    {
      positionA: new google.maps.LatLng(
        20.715530764708667,
        -103.35471984464333
      ),
      positionB: new google.maps.LatLng(
        20.710352514382752, 
        -103.4069907329377
        ),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        hideRouteList: true,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#0de04d" },
        
      }), 
      type: "BICYCLING",
    },
  ],
};

export default Directions;
