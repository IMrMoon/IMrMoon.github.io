// הגדרת סוג הצבעים (ריבוי צבעים)
let colorType = {
  type: "multi"
};

// צבעים מותאמים אישית
let colors = {
  color1: "rgba(255,255,255,1)",
  color2: "rgba(233,239,250,1)",
  color3: "rgba(222,241,250,1)",
  color4: "rgba(178,209,219,1)",
  color5: "rgba(135,143,145,1)"
};

// הגדרות כלליות לחלקיקים
let options = {
  alphaSpeed: 2,
  alphaVariance: 1,
  color: [colors.color1, colors.color2, colors.color3, colors.color4],
  composition: "source-over",
  count: 120,
  direction: 160,
  drift: 2,
  glow: 50,
  imageUrl: [
    "https://assets.codepen.io/13471/snowflake.png",
    "https://assets.codepen.io/13471/snowflake(1).png",
    "https://assets.codepen.io/13471/snowflake(2).png",
    "https://assets.codepen.io/13471/snowflake(3).png",
    "https://assets.codepen.io/13471/snowflake(4).png",
    "https://assets.codepen.io/13471/snowflake(5).png",
    "https://assets.codepen.io/13471/snowflake(6).png",
    "https://assets.codepen.io/13471/snowflake(7).png",
    "https://assets.codepen.io/13471/snowflake(8).png",
  ],
  maxAlpha: 2,
  maxSize: 24,
  minAlpha: -0.2,
  minSize: 3,
  parallax: 6,
  rotation: 0.5,
  shape: ["image"],
  speed: 2.5,
  style: "fill",
  twinkle: false,
  xVariance: 20,
  yVariance: 20,
};

// אתחול אחרי טעינת הדף
window.onload = () => {
  initStats();
  initSparticles();
  initGui();
};

// יצירת חלקיקים
function initSparticles() {
  const $main = document.querySelector("main") || document.body;
  window.mySparticles = new Sparticles($main, options);
}

// תצוגת ביצועים
function initStats() {
  const stats = new Stats();
  stats.domElement.classList.add("stats");
  document.body.appendChild(stats.domElement);

  const statsDisplay = () => {
    stats.begin();
    stats.end();
    requestAnimationFrame(statsDisplay);
  };

  requestAnimationFrame(statsDisplay);
}

// GUI אינטראקטיבי
function initGui() {
  const rerender = () => {
    window.mySparticles.destroy();
    initSparticles();
  };

  const rerenderColors = () => {
    switch (colorType.type) {
      case "rainbow":
        options.color = "rainbow";
        break;
      case "single":
        options.color = colors.color1;
        break;
      default:
        options.color = Object.values(colors);
    }
    rerender();
  };

  const gui = new dat.GUI();
  const part = gui.addFolder("Particles");
  part.open();
  part.add(options, "count", 1, 1500, 1).onFinishChange(rerender);
  part.add(options, "shape", ["circle", "square", "triangle", "diamond", "line", "image"]).onFinishChange(rerender);
  part.add(options, "style", ["fill", "stroke", "both"]).onFinishChange(rerender);
  part.add(options, "minSize", 1, 50, 1).onFinishChange(rerender);
  part.add(options, "maxSize", 1, 50, 1).onFinishChange(rerender);

  const anim = gui.addFolder("Animation");
  anim.add(options, "direction", 0, 360, 1).onFinishChange(rerender);
  anim.add(options, "speed", 0, 100, 0.1).onFinishChange(rerender);
  anim.add(options, "rotation", 0, 100, 0.1).onFinishChange(rerender);
  const move = anim.addFolder("Movement");
  move.add(options, "parallax", 0, 10, 0.1).onFinishChange(rerender);
  move.add(options, "drift", 0, 10, 0.1).onFinishChange(rerender);
  move.add(options, "xVariance", 0, 50, 0.1).onFinishChange(rerender);
  move.add(options, "yVariance", 0, 50, 0.1).onFinishChange(rerender);

  const vis = gui.addFolder("Visual");
  vis.add(options, "glow", 0, 50).onFinishChange(rerender);
  vis.add(options, "composition", [
    "source-over", "source-in", "source-out", "source-atop",
    "destination-over", "destination-in", "destination-out", "destination-atop",
    "lighter", "copy", "xor", "multiply", "screen", "overlay", "darken",
    "color-dodge", "color-burn", "hard-light", "soft-light", "difference",
    "exclusion", "hue", "saturation", "color", "luminosity"
  ]).onFinishChange(rerender);

  const alpha = vis.addFolder("Alpha");
  alpha.add(options, "twinkle").onFinishChange(rerender);
  alpha.add(options, "minAlpha", -2, 2, 0.1).onFinishChange(rerender);
  alpha.add(options, "maxAlpha", -2, 2, 0.1).onFinishChange(rerender);
  alpha.add(options, "alphaSpeed", 0, 50, 1).onFinishChange(rerender);
  alpha.add(options, "alphaVariance", 0, 20, 1).onFinishChange(rerender);

  const color = vis.addFolder("Color");
  color.open();
  color.add(colorType, "type", ["single", "multi", "rainbow"]).onFinishChange(rerenderColors);
  Object.keys(colors).forEach(c => {
    color.addColor(colors, c).onFinishChange(rerenderColors);
  });
}
