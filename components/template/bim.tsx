"use client";

import * as Cesium from "cesium";
import { useEffect } from "react";

import WaterPrimitive from "../glsl/WaterPrimitive.js";
import { viewer } from "../maps/skymap";

import { BIMLeft } from "./bim-left";

function loadShader() {
  viewer.clock.currentTime = Cesium.JulianDate.fromDate(
    new Date("2024-08-26T12:00:00"),
  );
  viewer.scene.highDynamicRange = false;

  const water = new WaterPrimitive({
    scene: viewer.scene,
    positions: [
      {
        x: 121.3964795996642,
        y: 31.217261213319716,
        z: 1.012153934348406397,
      },
      {
        x: 121.39629295268622,
        y: 31.19492209193152,
        z: 1.012528733076064029,
      },
      {
        x: 121.42417692649666,
        y: 31.19489317934086,
        z: 1.014816886819585855,
      },
      {
        x: 121.42380747267917,
        y: 31.21716758610123,
        z: 1.013928253311137109,
      },
    ].map((item) => Cesium.Cartographic.fromDegrees(item.x, item.y, item.z)),

    height: 100,
    rippleSize: 100,
  });
  const waterParams = {
    波纹大小: 0.0,
    透明度: 0.3,
    反射率: 1.0,
    扭曲: 0.0,
    高度: 1,
  };

  water.rippleSize = waterParams["波纹大小"];
  water.waterAlpha = waterParams["透明度"];
  water.reflectivity = waterParams["反射率"];
  water.distortionScale = waterParams["扭曲"];
  water.height = waterParams["高度"];
}
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
    loadDefaultTileset().then(() => {
      loadShader();
    });
  });

  return (
    <div className="tmpl-bim">
      <BIMLeft />
    </div>
  );
};
