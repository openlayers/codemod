const barrelFiles = {
  'ol/control.js': [
    ['default', 'Attribution', 'ol/control/Attribution.js'],
    ['default', 'Control', 'ol/control/Control.js'],
    ['default', 'FullScreen', 'ol/control/FullScreen.js'],
    ['default', 'MousePosition', 'ol/control/MousePosition.js'],
    ['default', 'OverviewMap', 'ol/control/OverviewMap.js'],
    ['default', 'Rotate', 'ol/control/Rotate.js'],
    ['default', 'ScaleLine', 'ol/control/ScaleLine.js'],
    ['default', 'Zoom', 'ol/control/Zoom.js'],
    ['default', 'ZoomSlider', 'ol/control/ZoomSlider.js'],
    ['default', 'ZoomToExtent', 'ol/control/ZoomToExtent.js'],
    ['defaults', 'defaults', 'ol/control/defaults.js'],
  ],
  'ol/format.js': [
    ['default', 'EsriJSON', 'ol/format/EsriJSON.js'],
    ['default', 'GeoJSON', 'ol/format/GeoJSON.js'],
    ['default', 'GML', 'ol/format/GML.js'],
    ['default', 'GPX', 'ol/format/GPX.js'],
    ['default', 'IGC', 'ol/format/IGC.js'],
    ['default', 'IIIFInfo', 'ol/format/IIIFInfo.js'],
    ['default', 'KML', 'ol/format/KML.js'],
    ['default', 'MVT', 'ol/format/MVT.js'],
    ['default', 'OWS', 'ol/format/OWS.js'],
    ['default', 'Polyline', 'ol/format/Polyline.js'],
    ['default', 'TopoJSON', 'ol/format/TopoJSON.js'],
    ['default', 'WFS', 'ol/format/WFS.js'],
    ['default', 'WKB', 'ol/format/WKB.js'],
    ['default', 'WKT', 'ol/format/WKT.js'],
    ['default', 'WMSCapabilities', 'ol/format/WMSCapabilities.js'],
    ['default', 'WMSGetFeatureInfo', 'ol/format/WMSGetFeatureInfo.js'],
    ['default', 'WMTSCapabilities', 'ol/format/WMTSCapabilities.js'],
  ],
  'ol/geom.js': [
    ['default', 'Circle', 'ol/geom/Circle.js'],
    ['default', 'Geometry', 'ol/geom/Geometry.js'],
    ['default', 'GeometryCollection', 'ol/geom/GeometryCollection.js'],
    ['default', 'LinearRing', 'ol/geom/LinearRing.js'],
    ['default', 'LineString', 'ol/geom/LineString.js'],
    ['default', 'MultiLineString', 'ol/geom/MultiLineString.js'],
    ['default', 'MultiPoint', 'ol/geom/MultiPoint.js'],
    ['default', 'MultiPolygon', 'ol/geom/MultiPolygon.js'],
    ['default', 'Point', 'ol/geom/Point.js'],
    ['default', 'Polygon', 'ol/geom/Polygon.js'],
    ['default', 'SimpleGeometry', 'ol/geom/SimpleGeometry.js'],
  ],
  'ol/index.js': [
    ['default', 'Collection', 'ol/Collection.js'],
    ['default', 'Disposable', 'ol/Disposable.js'],
    ['default', 'Feature', 'ol/Feature.js'],
    ['default', 'Geolocation', 'ol/Geolocation.js'],
    ['default', 'Graticule', 'ol/layer/Graticule.js'],
    ['default', 'Image', 'ol/Image.js'],
    ['default', 'ImageWrapper', 'ol/Image.js'],
    ['default', 'ImageCanvas', 'ol/ImageCanvas.js'],
    ['default', 'ImageTile', 'ol/ImageTile.js'],
    ['default', 'Kinetic', 'ol/Kinetic.js'],
    ['default', 'Map', 'ol/Map.js'],
    ['default', 'MapBrowserEvent', 'ol/MapBrowserEvent.js'],
    ['default', 'MapBrowserEventHandler', 'ol/MapBrowserEventHandler.js'],
    ['default', 'MapEvent', 'ol/MapEvent.js'],
    ['default', 'Object', 'ol/Object.js'],
    ['default', 'Observable', 'ol/Observable.js'],
    ['default', 'Overlay', 'ol/Overlay.js'],
    ['default', 'Tile', 'ol/Tile.js'],
    ['default', 'TileQueue', 'ol/TileQueue.js'],
    ['default', 'TileRange', 'ol/TileRange.js'],
    ['default', 'VectorRenderTile', 'ol/VectorRenderTile.js'],
    ['default', 'VectorTile', 'ol/VectorTile.js'],
    ['default', 'View', 'ol/View.js'],
    ['VERSION', 'VERSION', 'ol/util.js'],
    ['getUid', 'getUid', 'ol/util.js'],
  ],
  'ol/interaction.js': [
    ['default', 'DoubleClickZoom', 'ol/interaction/DoubleClickZoom.js'],
    ['default', 'DblClickDragZoom', 'ol/interaction/DblClickDragZoom.js'],
    ['default', 'DragAndDrop', 'ol/interaction/DragAndDrop.js'],
    ['default', 'DragBox', 'ol/interaction/DragBox.js'],
    ['default', 'DragPan', 'ol/interaction/DragPan.js'],
    ['default', 'DragRotate', 'ol/interaction/DragRotate.js'],
    ['default', 'DragRotateAndZoom', 'ol/interaction/DragRotateAndZoom.js'],
    ['default', 'DragZoom', 'ol/interaction/DragZoom.js'],
    ['default', 'Draw', 'ol/interaction/Draw.js'],
    ['default', 'Extent', 'ol/interaction/Extent.js'],
    ['default', 'Interaction', 'ol/interaction/Interaction.js'],
    ['default', 'KeyboardPan', 'ol/interaction/KeyboardPan.js'],
    ['default', 'KeyboardZoom', 'ol/interaction/KeyboardZoom.js'],
    ['default', 'Link', 'ol/interaction/Link.js'],
    ['default', 'Modify', 'ol/interaction/Modify.js'],
    ['default', 'MouseWheelZoom', 'ol/interaction/MouseWheelZoom.js'],
    ['default', 'PinchRotate', 'ol/interaction/PinchRotate.js'],
    ['default', 'PinchZoom', 'ol/interaction/PinchZoom.js'],
    ['default', 'Pointer', 'ol/interaction/Pointer.js'],
    ['default', 'Select', 'ol/interaction/Select.js'],
    ['default', 'Snap', 'ol/interaction/Snap.js'],
    ['default', 'Translate', 'ol/interaction/Translate.js'],
    ['defaults', 'defaults', 'ol/interaction/defaults.js'],
  ],
  'ol/layer.js': [
    ['default', 'Graticule', 'ol/layer/Graticule.js'],
    ['default', 'Group', 'ol/layer/Group.js'],
    ['default', 'Heatmap', 'ol/layer/Heatmap.js'],
    ['default', 'Image', 'ol/layer/Image.js'],
    ['default', 'Layer', 'ol/layer/Layer.js'],
    ['default', 'Tile', 'ol/layer/Tile.js'],
    ['default', 'Vector', 'ol/layer/Vector.js'],
    ['default', 'VectorImage', 'ol/layer/VectorImage.js'],
    ['default', 'VectorTile', 'ol/layer/VectorTile.js'],
    ['default', 'WebGLPoints', 'ol/layer/WebGLPoints.js'],
    ['default', 'WebGLTile', 'ol/layer/WebGLTile.js'],
    ['default', 'WebGLVector', 'ol/layer/WebGLVector.js'],
  ],
  'ol/proj.js': [
    ['default', 'Projection', 'ol/proj/Projection.js'],
    ['METERS_PER_UNIT', 'METERS_PER_UNIT', 'ol/proj/Units.js'],
  ],
  'ol/source.js': [
    ['default', 'BingMaps', 'ol/source/BingMaps.js'],
    ['default', 'CartoDB', 'ol/source/CartoDB.js'],
    ['default', 'Cluster', 'ol/source/Cluster.js'],
    ['default', 'DataTile', 'ol/source/DataTile.js'],
    ['default', 'GeoTIFF', 'ol/source/GeoTIFF.js'],
    ['default', 'Google', 'ol/source/Google.js'],
    ['default', 'IIIF', 'ol/source/IIIF.js'],
    ['default', 'Image', 'ol/source/Image.js'],
    ['default', 'ImageArcGISRest', 'ol/source/ImageArcGISRest.js'],
    ['default', 'ImageCanvas', 'ol/source/ImageCanvas.js'],
    ['default', 'ImageMapGuide', 'ol/source/ImageMapGuide.js'],
    ['default', 'ImageStatic', 'ol/source/ImageStatic.js'],
    ['default', 'ImageTile', 'ol/source/ImageTile.js'],
    ['default', 'ImageWMS', 'ol/source/ImageWMS.js'],
    ['default', 'OGCMapTile', 'ol/source/OGCMapTile.js'],
    ['default', 'OGCVectorTile', 'ol/source/OGCVectorTile.js'],
    ['default', 'OSM', 'ol/source/OSM.js'],
    ['default', 'Raster', 'ol/source/Raster.js'],
    ['default', 'Source', 'ol/source/Source.js'],
    ['default', 'StadiaMaps', 'ol/source/StadiaMaps.js'],
    ['default', 'Tile', 'ol/source/Tile.js'],
    ['default', 'TileArcGISRest', 'ol/source/TileArcGISRest.js'],
    ['default', 'TileDebug', 'ol/source/TileDebug.js'],
    ['default', 'TileImage', 'ol/source/TileImage.js'],
    ['default', 'TileJSON', 'ol/source/TileJSON.js'],
    ['default', 'TileWMS', 'ol/source/TileWMS.js'],
    ['default', 'UrlTile', 'ol/source/UrlTile.js'],
    ['default', 'UTFGrid', 'ol/source/UTFGrid.js'],
    ['default', 'Vector', 'ol/source/Vector.js'],
    ['default', 'VectorTile', 'ol/source/VectorTile.js'],
    ['default', 'WMTS', 'ol/source/WMTS.js'],
    ['default', 'XYZ', 'ol/source/XYZ.js'],
    ['default', 'Zoomify', 'ol/source/Zoomify.js'],
    ['createLoader', 'createWMSLoader', 'ol/source/wms.js'],
    ['createLoader', 'createArcGISRestLoader', 'ol/source/arcgisRest.js'],
    ['createLoader', 'createStaticLoader', 'ol/source/static.js'],
    ['createLoader', 'createMapGuideLoader', 'ol/source/mapguide.js'],
  ],
  'ol/style.js': [
    ['default', 'Circle', 'ol/style/Circle.js'],
    ['default', 'Fill', 'ol/style/Fill.js'],
    ['default', 'Icon', 'ol/style/Icon.js'],
    ['default', 'IconImage', 'ol/style/IconImage.js'],
    ['default', 'Image', 'ol/style/Image.js'],
    ['default', 'RegularShape', 'ol/style/RegularShape.js'],
    ['default', 'Stroke', 'ol/style/Stroke.js'],
    ['default', 'Style', 'ol/style/Style.js'],
    ['default', 'Text', 'ol/style/Text.js'],
  ],
  'ol/tilegrid.js': [
    ['default', 'TileGrid', 'ol/tilegrid/TileGrid.js'],
    ['default', 'WMTS', 'ol/tilegrid/WMTS.js'],
  ],
};

// handle imports without '.js' in the same way as with '.js'
for (const modulePath in barrelFiles) {
  if (modulePath.endsWith('.js')) {
    const withoutPrefix = modulePath.substring(0, modulePath.length - 3);
    barrelFiles[withoutPrefix] = barrelFiles[modulePath];
  }
}

// alias for 'ol'
barrelFiles['ol'] = barrelFiles['ol/index.js'];

function findDeclaration(name, exportDeclarations) {
  for (const [local, exported, source] of exportDeclarations) {
    if (name === exported) {
      return {local, exported, source};
    }
  }
  return null;
}

function replaceBarrelImports(fileInfo, api, {considerRelativePaths}) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  let replaced = false;
  root.find(j.ImportDeclaration).forEach((node) => {
    const {source, specifiers} = node.value;
    if (source?.type !== 'Literal') {
      return;
    }

    const importPath = source.value;
    for (const barrelPath in barrelFiles) {
      if (
        !(
          importPath === barrelPath ||
          (considerRelativePaths && importPath.endsWith('/' + barrelPath))
        )
      ) {
        continue;
      }

      const sourcePrefix = importPath.substring(
        0,
        importPath.length - barrelPath.length,
      );

      const importDeclarations = {};
      for (const specifier of specifiers) {
        if (!specifier.type === 'ImportSpecifier') {
          continue;
        }
        const importedName = specifier.imported.name;

        const declaration = findDeclaration(
          importedName,
          barrelFiles[barrelPath],
        );
        if (!declaration) {
          // not a barrel import, leave as is
          if (!(importPath in importDeclarations)) {
            importDeclarations[importPath] = [];
          }
          importDeclarations[importPath].push(specifier);
          continue;
        }

        const newSource = sourcePrefix + declaration.source;
        if (!(newSource in importDeclarations)) {
          importDeclarations[newSource] = [];
        }
        const newSpecifiers = importDeclarations[newSource];

        const localName = specifier.local.name;
        if (declaration.local === 'default') {
          newSpecifiers.push(j.importDefaultSpecifier(j.identifier(localName)));
        } else {
          if (declaration.exported === localName) {
            newSpecifiers.push(j.importSpecifier(j.identifier(localName)));
          } else {
            newSpecifiers.push(
              j.importSpecifier(
                j.identifier(declaration.exported),
                j.identifier(localName),
              ),
            );
          }
        }
      }

      const declarations = [];
      for (const newSource in importDeclarations) {
        const newSpecifiers = importDeclarations[newSource];
        declarations.push(
          j.importDeclaration(newSpecifiers, j.literal(newSource)),
        );
      }
      if (declarations.length > 0) {
        node.replace(...declarations);
        replaced = true;
      }
    }
  });

  if (!replaced) {
    return;
  }
  return root.toSource({quote: 'single'});
}

module.exports = replaceBarrelImports;
