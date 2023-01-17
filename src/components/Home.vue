<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode, bg: true }">
    <div class="container" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
      <div class="row align-items-center ">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center pt-5 pb-5">
          <img :src="picture" alt="foto de perfil" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
          <div>
            <p v-html="description"></p>
          </div>
          <div class="text-center pb-4">
            <button class="btn btn-outline-secondary mx-2" @click="info.pdf()" title="generar cv">
              <svg :style="{ filter: nightMode ? 'brightness(100)' : 'brightness(0)' }" class="icon"><use xlink:href="#icon-profile"></use></svg>
            </button>
            <button v-for="(value, key) in info.links" :key="key" class="btn btn-outline-secondary mx-2 " @click="open(value)" :title="key">
              <svg :style="{ filter: nightMode ? 'brightness(100)' : 'brightness(0)' }" class="icon"><use :xlink:href="'#icon-' + key"></use></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from '../../info';
import Wave from './helpers/Wave';

export default {
  name: 'Home',
  components: {
    Wave,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      info,
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      linkedin: info.links.linkedin,
      github: info.links.github,
      instagram: info.links.instagram,
      resume: info.links.resume,
    };
  },
  methods: {
    open(link) {
      window.open(link, '_blank');
    },
  },
};
</script>

<style scoped>
.icon {
  width: 1.5em;
  height: 1.5em;
}

.home-title {
  font-size: 28px;
  font-weight: 500;
}

img {
  max-width: 300px;
  border-radius: 2px;
}

@media only screen and (max-width: 574px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: -60px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.fa {
  font-size: 15px;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
  height: 2.4em;
  margin-bottom: 0.6em;
  width: 2.6em;
  padding: 0.4em 0 0;
}

.btn2 {
  border-color: rgb(212, 149, 97);
  color: rgb(212, 149, 97);
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  outline: none !important;
}

p {
  font-weight: 400;
}

/* LEAVES */
.bg {
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 150% 150%;
  background-image: linear-gradient(-30deg, rgba(32, 122, 163, 0.3) 0%, rgba(26, 99, 133, 0.4) 25%, rgba(56, 98, 109, 0.1) 51%, rgba(19, 36, 112, 0.5) 100%);
  animation: AnimateBG 24s ease infinite;
}

@keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
