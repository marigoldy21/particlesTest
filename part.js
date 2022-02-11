particlesJS("particles-js", {
    particles: {
      number: { value: 34, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "edge",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 7 },
        image: { src: "img/github.svg", width: 50, height: 50 },
      },
      opacity: {
        value: 0.20042650760819036,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 4.008530152163807,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: false,
        distance: 625.3307037375539,
        color: "#ffffff",
        opacity: 0.1843923869995351,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "top",
        random: true,
        straight: true,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 0, rotateY: 0 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  