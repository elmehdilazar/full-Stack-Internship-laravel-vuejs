<template>
    <div class="flex flex-col content-center items-center" >

      <div class="mb-5 w-72">
        <label for="name"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> name</label>
        <input
        v-model="product.name"
         type="text" 
          id="name" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name of product" required>
      </div>
      <div class="mb-5  w-72">
        
  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your description</label>
  <textarea v-model="product.description" id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description"></textarea>

    </div>
      <div class="mb-5  w-72">
         <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">size:</label>
        <input  v-model="product.size" type="text" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
    </div>
      <div class="mb-5  w-72">
         <label for="number-price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">price:</label>
        <input type="number" step="0.01"  v-model="product.price" id="number-price" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
    </div>
      <div class="flex items-start mb-5  w-72">
        <div class="flex items-center h-5">
          <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
      </div>
      <button type="button" @click="addProduct" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

    </div>
</template>
<script>
//import axios
import axios from 'axios'
export default {
    name:"Add-product-view",
    data() {
        return {
            product: {
                name: '',
                description: '',
                size: "",
                price:0,
          },
            token:''
        }
  },
  methods: {
    async addProduct() {
       const config = {
        headers: {
          'Authorization': `Bearer ${this.token}`,
        },
      };

      let de
      let info = await axios.post("http://127.0.0.1:8000/api/products", this.product,config).then(() => {
        this.$router.push({ name: "home" });
      }).catch((err) => {
        console.log(err);
    });
     
    },
  },
  mounted() {
    this.token = localStorage.getItem('user-token');
    console.log(this.token + 1);
    if (!this.token) {
      this.$router.push({ name: "signin" });
    }
  },
}
</script>