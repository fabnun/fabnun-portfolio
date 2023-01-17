<template>
  <div class="bg-secondary">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div class="col-xl-5 col-bg-5 col-md-5 col-sm-12 mb-3 pbelow" style="color: white;">
          <a href="https://github.com/hrishikeshpaul/portfolio-template" style="color: white;font-size:12px" target="_blank" rel="noopener noreferrer">
            <span>Original Template by Hrishikesh Paul</span>
          </a>
        </div>
        <div class="col-xl-7 col-bg-7 col-md-7 col-sm-12">
          <div class="text-center">
            <button v-for="(value, key) in info.links" :key="key" class="btn btn-outline-secondary mx-2 " @click="open(value)" :title="key">
              <svg class="icon"><use :xlink:href="'#icon-' + key"></use></svg>
            </button>

            <button
              :class="'btn mx-2' + (process ? ' titila' : '')"
              @click="
                info.pdf(
                  () => {
                    process = true;
                  },
                  () => {
                    process = false;
                  }
                )
              "
              title="generar cv desde json en el navegador"
            >
              <svg class="icon"><use xlink:href="#icon-cv"></use></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from '../../info';

export default {
  name: 'Footer',
  data() {
    return {
      process: false,
      info,
      linkedin: info.links.linkedin,
      github: info.links.github,
      instagram: info.links.instagram,
      resume: info.links.resume,
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case 'linkedin':
          window.open(this.linkedin, '_blank');
          break;
        case 'github':
          window.open(this.github, '_blank');
          break;
        case 'instagram':
          window.open(this.instagram, '_blank');
          break;
      }
    },
  },
};
</script>

<style scoped>
.icon {
  width: 1.5em;
  height: 1.5em;
}

span {
  font-weight: 500;
}

.btn {
  border-color: white;
  height: 2.4em;
  width: 2.6em;
  margin-bottom: 0.6em;
  padding: 0;
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
}

.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
}

@media screen and (max-width: 574px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>
