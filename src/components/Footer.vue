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
            <button class="btn btn-outline-secondary mx-2 " @click="open('linkedin')">
              <i class="fab fa-linkedin"></i>
            </button>
            <button class="btn btn-outline-secondary mx-2" @click="open('github')">
              <i class="fab fa-github"></i>
            </button>
            <button class="btn btn-outline-secondary mx-2" @click="open('instagram')">
              <i class="fab fa-instagram"></i>
            </button>
            <button class="btn btn2 btn-outline-secondary mx-2" @click="open(/*open('resume')*/)">CV <i class="fa fa-file"></i></button>
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
span {
  font-weight: 500;
}

.btn {
  border-color: white;
  color: white;
}

.btn:hover {
  background-color: white;
  border-color: white;
  color: gray;
}

.btn:focus {
  background-color: white;
  border-color: white;
  color: gray;
}

@media screen and (max-width: 574px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}

.btn2 {
  background-color: #669db3ff;
  border-color: #669db3ff;
}
</style>
