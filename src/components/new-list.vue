<template>
  <div class="list">
    <div class="article_item" v-for="obj in currentList" :key="obj.art_id">
      <h3 class="van-ellipsis">{{ obj.title }}</h3>
      <div class="img_box" v-if="obj.cover.type === 1">
        <img :src="obj.cover.images[0]" class="w100" />
      </div>
      <div class="img_box" v-else-if="obj.cover.type === 3">
        <img :src="obj.cover.images[0]" class="w33" />
        <img :src="obj.cover.images[1]" class="w33" />
        <img :src="obj.cover.images[2]" class="w33" />
      </div>
      <!---->
      <div class="info_box">
        <span>{{ obj.aut_name }}</span>
        <span>{{ obj.comm_count }}评论</span>
        <span>{{ obj.pubdate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['currentCatagtory', 'currentList'])
  },
  watch: {
    currentCatagtory (newValue) {
      this.$store.dispatch('newlist/getNewList', newValue)
    }
  }
}
</script>

<style>
</style>
