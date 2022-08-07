import React from "react";
    const Sample=() =>{
      return (
        <div>
          <title>Javascript API Mapbox Map Geocoder Navigation Geolocate Fullscreen</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
          {/* https://www.mapbox.com/install/js/cdn-install/         */}
          <link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" />        
          <style dangerouslySetInnerHTML={{__html: "\n\n            /* html { height: 100% }\n            body { height: 100%; margin: 0; }\n\n            #map { width: 100%; height: 100%; } */\n\n            body { margin: 0; padding: 0; }\n\n\t        #map { position: absolute; top: 0; bottom: 0; width: 100%; }\n\n        " }} />
          <div id="map" />
          {/*  */}
          <style dangerouslySetInnerHTML={{__html: "\n\n            .field {\n                top: 0;\n                left: 0;\n                display: block;\n                position: relative;\n                margin: 0px auto;\n                width: 50%;\n                max-width: 350px;\n                padding: 1vh;\n                border: none;\n                border-radius: 3px;\n                font-size: 12px;\n                text-align: center;\n                color: #222;\n                background: #fff;\n            }            \n\n        " }} />        
          <div className="field">
            <label>Lng: </label>
            <input type="text" id="longitudeID" name="longitude" />
            <button id="longitudeButtonID" onclick="getValue( document.querySelector('#longitudeID') )">Copy</button>
          </div>
          <div className="field">
            <label>Lat: </label>
            <input type="text" id="latitudeID" name="latitude" />
            <button id="latitudeButtonID" onclick="getValue( document.querySelector('#latitudeID') )">Copy</button>
          </div>
          <div className="field">
            <button type="button" onclick="getValueAll()">Copy All</button>
          </div>
          {/* https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder/ */}
          <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.css" type="text/css" />
          {/* Promise polyfill script required to use Mapbox GL Geocoder in IE 11 */}
        </div>
              );
    }

    export default Sample
