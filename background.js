particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 4 },
    color: { value: "#ffffff" },
    move: {
      enable: true,
      speed: 2
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
  }
});
