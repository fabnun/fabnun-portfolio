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
        <span class="title text-center" :class="{ pgray: !nightMode, 'text-light': nightMode }">Contacto</span>
      </div>
      <hr width="50%" :class="{ pgray: !nightMode, 'bg-secondary': nightMode }" />
      <br />
      <form class="text-center" action="https://formsubmit.co/3c6d6b545e4b45329ddf429e0783e156" method="POST">
        <div class="mb-3" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            class="pinput"
            :class="{
              pgray: !nightMode,
              'pgray-dark': nightMode,
              'text-light': nightMode,
            }"
            style="transition-delay: 0.2s"
          />
        </div>

        <div class="mb-3" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            class="pinput"
            :class="{
              pgray: !nightMode,
              'pgray-dark': nightMode,
              'text-light': nightMode,
            }"
            style="transition-delay: 0.2s"
          />
        </div>

        <div class="mb-3" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            required
            class="pinput"
            :class="{
              pgray: !nightMode,
              'pgray-dark': nightMode,
              'text-light': nightMode,
            }"
            style="transition-delay: 0.2s"
          />
        </div>

        <div class="my-3" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
          <textarea
            name="message"
            placeholder="Mensaje"
            required
            class="pinput"
            rows="4"
            :class="{
              pgray: !nightMode,
              'pgray-dark': nightMode,
              'text-light': nightMode,
            }"
            style="transition-delay: 0.6s"
          ></textarea>
        </div>

        <input type="hidden" name="_next" value="https://fabnun.web.app/contact?mailOk" />
        <input type="hidden" name="_subject" value="Mensaje del formulario de contacto" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />

        <button type="submit" class="mt-1 btn mb-3" data-aos="fade" data-aos-once="true" data-aos-duration="1000" data-aos-offset="50">
          Enviar Mensaje
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',

  mounted() {
    if (window.location.href.endsWith('?mailOk')) {
      setTimeout(() => {
        alert('He recibido tu mensaje, pronto enviare la respuesta. Saludos.');
      }, 1000);
    }
  },

  props: {
    nightMode: {
      type: Boolean,
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

.pinput {
  border: 1px solid lightgray;
  font-size: 18px;
  outline: none;
  border-radius: 7px;
  padding: 10px;
  width: 50%;
  transition: all 1s;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
  width: 50%;
  margin-bottom: 500px !important;
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

.pgray-dark {
  background-color: #3c4148 !important;
}

@media screen and (max-width: 1000px) {
  .pinput {
    width: 90%;
  }
  .pinput {
    width: 90%;
  }

  .btn {
    width: 90%;
  }
}
</style>
