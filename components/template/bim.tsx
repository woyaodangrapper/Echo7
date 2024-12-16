"use client";

import * as Cesium from "cesium";
import { useEffect } from "react";

import { viewer } from "../maps/skymap";

import { BIMLeft } from "./bim-left";

export const loadDefaultTileset = async () => {
  const options = { heightOffset: 0, height: 0.1 };
  const tileset = await Cesium.Cesium3DTileset.fromUrl(
    "/tileset/shanghai/tileset.json",
    { enableCollision: true },
  );

  viewer.scene.primitives.add(tileset);
  tileset.allTilesLoaded.addEventListener(function () {
    console.log("All tiles are loaded");
  });
  viewer.zoomTo(tileset);

  const boundingSphere = tileset.boundingSphere;
  const cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
  const surface = Cesium.Cartesian3.fromRadians(
    cartographic.longitude,
    cartographic.latitude,
    options.heightOffset ?? 0,
  );
  const offset = Cesium.Cartesian3.fromRadians(
    cartographic.longitude,
    cartographic.latitude,
    options.height ?? 0,
  );
  const translation = Cesium.Cartesian3.subtract(
    offset,
    surface,
    new Cesium.Cartesian3(),
  );

  viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
  tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
};
export const BIM = () => {
  useEffect(() => {
    loadDefaultTileset().then(() => {});
  });

  return (
    <div className="tmpl-bim">
      <BIMLeft />
    </div>
  );
};
