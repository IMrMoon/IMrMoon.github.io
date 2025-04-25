particlesJS("particles-js", {
  particles: {
    number: { value: 100 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 4 },
    move: {
      enable: true,
      speed: 2,
      direction: "none"
    },
    line_linked: {
      enable: false
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    },
    modes: {
      repulse: { distance: 100 }
    }
  },
  retina_detect: true
});
