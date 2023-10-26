import GeoJSON from 'geojson';
import { range } from 'd3-array';
import { scaleQuantile } from 'd3-scale';

// ----------------------------------------------------------------------

export function updatePercentiles(
  featureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry>,
  accessor: (f: GeoJSON.Feature<GeoJSON.Geometry>) => number
): GeoJSON.FeatureCollection<GeoJSON.Geometry> {
  const { features } = featureCollection;

  const scale = scaleQuantile().domain(features.map(accessor)).range(range(9));

  return {
    type: 'FeatureCollection',
    features: features.map((f) => {
      const value = accessor(f);

      const properties = {
        ...f.properties,
        value,
        percentile: scale(value),
      };

      return { ...f, properties };
    }),
  };
}

export function formatToPound(amount: number): string {
  // Convert the number to a string with two decimal places
  const rounded = Math.ceil(amount / 1000) * 1000;
  const formatted = rounded.toFixed(2);
  return `£${formatted}`;
}
