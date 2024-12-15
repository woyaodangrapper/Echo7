const fs = require("fs-extra");

const copyTargets = [
  {
    src: "node_modules/cesium/Build/Cesium/Workers",
    dest: "public/cesiumjs/Workers",
  },
  {
    src: "node_modules/cesium/Build/Cesium/ThirdParty",
    dest: "public/cesiumjs/ThirdParty",
  },
  {
    src: "node_modules/cesium/Build/Cesium/Widgets",
    dest: "public/cesiumjs/Widgets",
  },
  {
    src: "node_modules/cesium/Build/Cesium/Assets",
    dest: "public/cesiumjs/Assets",
  },
];

async function copyFiles() {
  try {
    for (const target of copyTargets) {
      await fs.copy(target.src, target.dest);
      console.log(`Copied ${target.src} to ${target.dest}`);
    }
  } catch (err) {
    console.error("Error copying files:", err);
  }
}

copyFiles();
