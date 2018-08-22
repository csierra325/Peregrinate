import React from "react";


const USMap = () => (
<div>
<ComposableMap>
  <ZoomableGroup>
  <Geographies geography={ "/path/to/your/topojson-map-file.json or geography object" }>
    {(geographies, projection) => geographies.map(geography => (
      <Geography
        key={ geography.id }
        geography={ geography }
        projection={ projection }
        />
    ))}
  </Geographies>
  </ZoomableGroup>
</ComposableMap>
</div>
);

export default USMap;