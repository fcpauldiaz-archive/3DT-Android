
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


function initTexture() {
    crateTexture = gl.createTexture();
    crateTexture.image = new Image();
    crateTexture.image.onload = function () {
        handleLoadedTexture(crateTexture)
    }
    crateTexture.image.src = "img/wood-texture.jpg";

    roofTopTexture = gl.createTexture();
    roofTopTexture.image = new Image();
    roofTopTexture.image.onload = function () {
        handleLoadedTexture(roofTopTexture)
    }
    roofTopTexture.image.src = "img/roof-texture.jpg";

    treeStructure = gl.createTexture();
    treeStructure.image = new Image();
    treeStructure.image.onload = function () {
        handleLoadedTexture(treeStructure)
    }
    treeStructure.image.src = "img/tree-structure.jpg";

    windowTexture = gl.createTexture();
    windowTexture.image = new Image();
    windowTexture.image.onload = function () {
        handleLoadedTexture(windowTexture)
    }
    windowTexture.image.src = "img/window-texture.jpg";

    doorTexture = gl.createTexture();
    doorTexture.image = new Image();
    doorTexture.image.onload = function () {
        handleLoadedTexture(doorTexture)
    }
    doorTexture.image.src = "img/door-texture.jpg";
}
