<template>
    <div class="flex flex-col content-center items-center">
<span v-if="this.err!==''">{{ this.err }}</span>
        <div class="mb-5 w-72">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> name</label>
            <input v-model="product.name" type="text" id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name of product" required>
        </div>
        <div class="mb-5  w-72">

            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                description</label>
            <textarea v-model="product.description" id="description" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="description"></textarea>

        </div>
        <div class="mb-5  w-72">
            <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">size:</label>
            <input v-model="product.size" type="text" id="number-input" aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required>
        </div>
        <div class="mb-5  w-72">
            <label for="number-price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">price:</label>
            <input type="number" step=".01" v-model="product.price" id="number-price" aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0" required>
        </div>
        <div class="flex items-start mb-5  w-72">
            <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required>
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button type="button" @click="UpdateProduct"
            class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Submit</button>

    </div>
</template>
<script>
//import axios
import axios from 'axios'
export default {
    name: "Update-product-view",
    data() {
        return {
            product: {
                name: '',
                description: '',
                size: "",
                price: 0,
            },
            err: '',
            id:'',
            token:''
        }
    },
    methods: {
        async UpdateProduct() {
            const config = {
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                },
            };

            await axios.put("http://127.0.0.1:8000/api/products/" + this.id, this.product,config);
            this.$router.push({ name: "home" });

        },
    },
    async mounted() {
         const config = {
            headers: {
                'Authorization': `Bearer ${this.token}`,
            },
        };

       
        this.id = this.$route.params.idprod;
       this.token = localStorage.getItem('user-token');

        if (!this.token) {
            this.$router.push({ name: "signin" });
        }
      await axios.get("http://127.0.0.1:8000/api/products/" + this.id, config).then((res) => {
          this.product.name = res.data.name;
          this.product.description = res.data.description;
          this.product.size = res.data.size;
          this.product.price = res.data.price;
        }).catch((err) =>{
            this.err = 'product not found';
       })
        
    },
}
</script>