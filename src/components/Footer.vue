<template>
  <div class="bg-secondary">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow" style="color: white;">
          <a href="https://github.com/hrishikeshpaul/portfolio-template" style="color: white;" target="_blank" rel="noopener noreferrer">
            <span>Original Template from Hrishikesh Paul</span>
          </a>
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <div class="text-center">
            <button class="btn btn-outline-secondary mx-2 " @click="open('linkedin')" aria-label="ir a linkedin">
              <svg class="icon"><use xlink:href="#icon-linkedin"></use></svg>
            </button>
            <button class="btn btn-outline-secondary mx-2" @click="open('github')" aria-label="ir a github">
              <svg class="icon"><use xlink:href="#icon-github"></use></svg>
            </button>
            <button class="btn btn-outline-secondary mx-2" @click="open('instagram')" aria-label="ir a instagram">
              <svg class="icon"><use xlink:href="#icon-instagram"></use></svg>
            </button>
            <button class="btn btn-outline-secondary mx-2" @click="open(/*open('resume')*/)" aria-label="descargar cv">
              <svg class="icon"><use xlink:href="#icon-profile"></use></svg>
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
        case 'resume':
          window.open(this.resume, '_blank');
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
