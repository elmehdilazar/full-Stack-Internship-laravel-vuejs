<template>
  <div class="home">
  <ListProducts />
  </div>
</template>

<script>
import ListProducts from '@/components/listProducts.vue';



export default {
    name: 'HomeView',
    data() {
      return {
        token:''
      }
    },
  components: { ListProducts },
mounted() {
  this.token = localStorage.getItem('user-token');

  if (!this.token) {
      this.$router.push({ name: "signin" });
  }
},
}
</script>
