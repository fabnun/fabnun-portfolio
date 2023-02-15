<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
    <div class="container py-4">
      <div class="text-center" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
        <span class="title text-center" :class="{ pgray: !nightMode, 'text-light': nightMode }">Blog</span>
      </div>
      <hr width="50%" :class="{ pgray: !nightMode, 'bg-secondary': nightMode }" />
      <br />
      <div class="row">
        <div class="col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4" v-for="(post, idx) in postsOrded" :key="post.title" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30" :style="{ 'transition-delay': idx / 4.2 + 's' }" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
          <div class="title2 pt-2" style="border:1px solid gray;padding:8px;border-radius: .5em;">
            <a :href="'/blog/' + post.url" :class="{ pgray: !nightMode, 'text-light': nightMode }" style="text-decoration: none;">
              <h2 class="title2 pt-2">{{ post.title }}</h2>
              <span style="display:block;font-size:12px;text-align:right;padding:0;margin:0">{{ post.date }}</span>
              <h3 style="font-size:14px">{{ post.tags.join(', ') }}</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import posts from '../../blog';
export default {
  name: 'Blog',
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      //ordenar por el campo date
      postsOrded: posts.sort((a, b) => {
        return b.dateTime - a.dateTime;
      }),
    };
  },
};
</script>
<style scoped>
.icon {
  width: 48px;
  height: 48px;
  fill: rgb(212, 149, 97);
  transition: all 0.5s;
}
.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  color: rgb(212, 149, 97);
  font-size: 20px;
  font-weight: 500;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.fa {
  color: rgb(212, 149, 97);
  font-size: 40px;
  transition: all 0.5s;
}

.fas {
  color: rgb(212, 149, 97);
  font-size: 40px;
  /* font-weight: bold; */
  transition: all 0.5s;
}
</style>
