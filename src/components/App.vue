<template>
  <div id="app" :class="{ 'text-dark': !nightMode, 'text-light': nightMode }">
    <Navbar @scroll="scrollTo" @nightMode="switchMode" :nightMode="nightMode" />

    <div class="parent">
      <Home id="" :nightMode="nightMode" />
      <Portfolio id="portfolio" :nightMode="nightMode" />
      <Blog v-if="config.show_blog" id="blog" :nightMode="nightMode" />
      <Skills id="skills" :nightMode="nightMode" />
      <About id="about" :nightMode="nightMode" />
      <Contact id="contact" :nightMode="nightMode" />
      <Footer :nightMode="nightMode"></Footer>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Blog from './Blog';
import info from '../../info';
import '../assets/style.css';

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Portfolio,
    Contact,
    Blog,
    Footer,
  },
  data() {
    return {
      nightMode: undefined,
      config: info.config,
    };
  },
  created() {
    if (this.config.use_cookies) {
      const cookie = this.$cookie.get('nightMode');
      this.nightMode = cookie === null || cookie === 'true';
    }
  },
  mounted() {
    const path = this.$route.path.substring(1, this.$route.path[this.$route.path.length - 1] === '/' ? this.$route.path.length - 1 : this.$route.path.length);

    if (['', 'about', 'contact', 'skills', 'portfolio', 'blog'].includes(path)) {
      setTimeout(() => {
        var elementPosition = '' === path ? 60 : document.getElementById(path).offsetTop;
        window.scroll({ top: elementPosition - 60, behavior: 'smooth' });
      }, 250);
    }
  },
  methods: {
    switchMode(mode) {
      if (this.config.use_cookies) {
        this.$cookie.set('nightMode', mode);
      }
      this.nightMode = mode;
    },
    scrollTo(ele) {
      if (ele == 'home') {
        if (this.$router.history.current.path !== '/') this.$router.push('/');
        window.scrollTo({ top: -60, behavior: 'smooth' });
      } else {
        let path = this.$router.history.current.path;
        if (path[path.length - 1] === '/') path = path.substring(0, path.length - 1);
        var elementPosition = document.getElementById(ele).offsetTop;
        window.scrollTo({ top: elementPosition - 60, behavior: 'smooth' });
        if (path !== `/${ele}`) this.$router.push(`/${ele}`);
      }
    },
  },
};
</script>

<style></style>
