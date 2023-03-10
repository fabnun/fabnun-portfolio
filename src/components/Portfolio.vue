<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div class="text-center" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
        <span class="title text-center" :class="{ pgray: !nightMode, 'text-light': nightMode }">Portafolio</span>
      </div>
      <hr width="50%" :class="{ pgray: !nightMode, 'bg-secondary': nightMode }" />
      <div class="row">
        <div class="col-xl-4 col-bg-4 col-md-6 col-sm-12" v-for="(portfolio, idx) in portfolio_info" :key="portfolio.name">
          <Card :style="{ 'transition-delay': (idx % 3) / 4.2 + 's' }" :portfolio="portfolio" @show="showModalFn" data-aos="fade-up" :nightMode="nightMode" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true" />
        </div>
      </div>
      <div class="text-center py-3" v-if="showBtn !== 'mostrar menos'">
        <button v-if="number != all_info.length" class="btn" @click.prevent="showMore">{{ showBtn }}</button>
      </div>
    </div>
    <transition name="modal">
      <Modal :showModal="showModal" @close="closeModal" v-if="showModal" :portfolio="modal_info" :nightMode="nightMode" />
    </transition>
    <transition name="modal">
      <DesignModal :showModal="showDesignModal" @close="closeModal" v-if="showDesignModal" :portfolio="design_modal_info" :nightMode="nightMode" />
    </transition>
  </div>
</template>

<script>
import Card from './helpers/Card';
import Modal from './helpers/Modal';
import DesignModal from './helpers/DesignModal';
import info from '../../info';

export default {
  name: 'Portfolio',
  components: {
    Card,
    Modal,
    DesignModal,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      all_info: info.portfolio.filter((item) => item.space === undefined),
      portfolio_info: [],
      showModal: false,
      showDesignModal: false,
      modal_info: {},
      design_modal_info: {},
      number: 3,
      showBtn: 'mostrar mas',
      data: ['<div class="example-slide">Slide 1</div>', '<div class="example-slide">Slide 2</div>', '<div class="example-slide">Slide 3</div>'],
    };
  },
  created() {
    for (var i = 0; i < this.number; i++) {
      this.portfolio_info.push(this.all_info[i]);
    }
  },
  watch: {
    number() {
      this.portfolio_info = [];
      for (var i = 0; i < this.number; i++) {
        this.portfolio_info.push(this.all_info[i]);
      }
    },
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
    closeModal() {
      this.showModal = false;
      this.showDesignModal = false;
      document.getElementsByTagName('body')[0].classList.remove('modal-open');
    },
    showModalFn(portfolio) {
      this.modal_info = portfolio;
      this.showModal = true;
    },
    showDesignModalFn(design_portfolio) {
      this.design_modal_info = design_portfolio;
      this.showDesignModal = true;
    },
    showMore() {
      if (this.number != this.all_info.length) {
        this.number += 3;
        if (this.number > this.all_info.length) this.number = this.all_info.length;
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn {
  border-color: rgb(212, 149, 97);
  color: rgb(212, 149, 97);
}

.btn:hover {
  background-color: rgb(212, 149, 97);
  border-color: rgb(212, 149, 97);
  color: white;
}

.btn:focus {
  background-color: rgb(212, 149, 97);
  border-color: rgb(212, 149, 97);
  color: white;
}

.design-img {
  width: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.dimg {
  position: relative;
  border-radius: 15px;
}
.middle {
  transition: all 0.5s;
  opacity: 0;
  position: absolute;
  bottom: 0px;
  left: 70px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
}

.dimg:hover .design-img {
  position: relative;
  border-radius: 15px;
  opacity: 0.1;
  cursor: pointer;
}

.dimg:hover .middle {
  opacity: 1;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
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

.badge {
  background-color: rgb(211, 227, 233);
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
}

.bg-dark4 {
  background-color: #494e55 !important;
}

.date {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.75;
}
</style>
