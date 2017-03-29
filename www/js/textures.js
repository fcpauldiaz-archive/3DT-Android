
function handleLoadedTexture(texture) {
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
    gl.generateMipmap(gl.TEXTURE_2D);

    gl.bindTexture(gl.TEXTURE_2D, null);
}


var crateTexture;
var roofTopTexture;
var treeStructure;
var windowTexture;
var doorTexture;
var wallSmall;
var topTreeTexture;
var bootleTexture;
var sandTexture;
var sunTexture;


function initTexture() {
 //1
  crateTexture = gl.createTexture();
  crateTexture.image = new Image();
  crateTexture.image.onload = function () {
      handleLoadedTexture(crateTexture)
  }
  crateTexture.image.src = "./img/wood-texture.jpg";
  //2
  roofTopTexture = gl.createTexture();
  roofTopTexture.image = new Image();
  roofTopTexture.image.onload = function () {
      handleLoadedTexture(roofTopTexture)
  }
  roofTopTexture.image.src = "./img/roof-texture.jpg";
  //3
  treeStructure = gl.createTexture();
  treeStructure.image = new Image();
  treeStructure.image.onload = function () {
      handleLoadedTexture(treeStructure)
  }
  treeStructure.image.src = "./img/tree-structure.jpg";
  //4
  windowTexture = gl.createTexture();
  windowTexture.image = new Image();
  windowTexture.image.onload = function () {
      handleLoadedTexture(windowTexture)
  }
  windowTexture.image.src = "./img/window-texture.jpg";
  //5
  doorTexture = gl.createTexture();
  doorTexture.image = new Image();
  doorTexture.image.onload = function () {
      handleLoadedTexture(doorTexture)
  }
  doorTexture.image.src = "./img/door-texture.jpg";
  //
  wallSmall = gl.createTexture();
  wallSmall.image = new Image();
  wallSmall.image.onload = function () {
      handleLoadedTexture(wallSmall)
  }
  wallSmall.image.src = "./img/wood-texture-small.jpg";

  //6
  topTreeTexture = gl.createTexture();
  topTreeTexture.image = new Image();
  topTreeTexture.image.onload = function () {
      handleLoadedTexture(topTreeTexture)
  }
  topTreeTexture.image.src = "./img/leaf-texture.jpeg";
  //7
  sandTexture = gl.createTexture();
  sandTexture.image = new Image();
  sandTexture.image.onload = function () {
      handleLoadedTexture(sandTexture)
  }
  sandTexture.image.src = "./img/sand-texture.jpg";
  //8
  sunTexture = gl.createTexture();
  sunTexture.image = new Image();
  sunTexture.image.onload = function () {
      handleLoadedTexture(sunTexture)
  }
  sunTexture.image.src = "./img/sun-texture.jpg";

;
}
