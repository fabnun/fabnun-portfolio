<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top p-st"
      :class="{
        'bg-light': !nightMode,
        'navbar-blur': navbarConfig.blur,
        'bg-dark2': nightMode,
      }"
    >
      <div class="container">
        <a class="navbar-brand" href="/" @click.prevent="scroll('home')">
          <Logo :nightMode="nightMode" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span style="color: gray; font-size: 23px;">
            <svg class="icon" :style="{ filter: nightMode ? 'brightness(100)' : 'brightness(0)' }"><use xlink:href="#icon-menu"></use></svg>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2">
              <a class="nav-link" href="/" @click.prevent="scroll('home')" :class="{ 'text-light': nightMode }">Inicio</a>
            </li>
            <li class="nav-item mx-2 ">
              <a class="nav-link" href="/portfolio" @click.prevent="scroll('portfolio')" :class="{ 'text-light': nightMode }">Portafolio</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="/skills" @click.prevent="scroll('skills')" :class="{ 'text-light': nightMode }">Habilidades</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="/about" @click.prevent="scroll('about')" :class="{ 'text-light': nightMode }">Historia</a>
            </li>

            <li class="nav-item mx-2">
              <a class="nav-link" href="/contact" @click.prevent="scroll('contact')" :class="{ 'text-light': nightMode }">Contacto</a>
            </li>
            <li class="nav-item ml-2">
              <a class="nav-link" href="#" @click.prevent="switchMode" :class="{ 'text-light': nightMode }" style="outline:none;" tabindex="-1">
                <svg class="icon" style=" margin-top:-4px;position:relative;outline:none;" tabindex="-1">
                  <use :xlink:href="nightMode ? '#icon-sun' : '#icon-moon'" v-tooltip.bottom="nightMode ? 'Modo Día' : 'Modo Noche'"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from './helpers/Logo';
import info from '../../info';

export default {
  name: 'Navbar',
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      navbarConfig: info.config.navbar,
      localNightMode: this.nightMode,
    };
  },
  components: {
    Logo,
  },
  methods: {
    scroll(section) {
      this.$emit('scroll', section);
      $('.navbar-collapse').collapse('hide');
    },
    switchMode() {
      this.localNightMode = !this.localNightMode;
      this.$emit('nightMode', this.localNightMode);
      $('.navbar-collapse').collapse('hide');
    },
  },
};
</script>

<style scoped>
.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.nav-link {
  font-weight: 500;
}

button {
  border: none;
  outline: none;
}

button:hover {
  border: none;
  outline: none;
}

nav {
  border-bottom: 1px solid rgba(160, 159, 159, 0.336);
  position: fixed !important;
}

.navbar-blur {
  background-color: #ffffff7e;
  backdrop-filter: blur(12px);
}
</style>
