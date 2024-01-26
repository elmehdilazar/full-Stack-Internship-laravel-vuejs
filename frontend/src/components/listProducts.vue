<template>
    <div class="flex flex-col gap-5 justify-between items-center ">

        <div class="w-[50%]">
            <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input  type="search" id="default-search"
                    class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..." required>
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            description
                        </th>
                        <th scope="col" class="px-6 py-3">
                            size
                        </th>
                        <th scope="col" class="px-6 py-3">
                            price
                        </th>
                        <th scope="col" class=" px-6 py-3">
                            action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in products" :key="data.id"
                        class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ data.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ data.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ data.description }}
                        </td>
                        <td class="px-6 py-4">
                            {{ data.price }}
                        </td>
                        <td class="px-6 py-4">
                            {{ data.size }}
                        </td>
                        <td class="px-6 py-4">
                            <router-link :to="'/updateProduct/' + data.id"><button type="button"
                                    class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">edit</button></router-link>
                            <button type="button" @click='DeleteProduct(data.id)'
                                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">delete</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
    <!-- Pagination -->
    <div class=" mt-5 flex justify-center" v-if="products.length > 0">
        <Pagination :data="products" :perPage="perPage" @page-change="handlePageChange" :total="total" :currentPage="currentPage" />
    </div>
</template>
<script>
import axios from "axios";
import Pagination from "@/components/Pagination"; // Adjust the path based on your project structure

export default {
    name: "list-product-comp",
    components: {
        Pagination,
    },
    
    data() {
        return {
            products: [],
            perPage: 5, // Number of items per page
            currentPage: 1, // Current page
            total:0,
            token: localStorage.getItem("user-token") ? localStorage.getItem("user-token") : "",
        };
    },
    methods: {
        async DeleteProduct(id) {
            const config = {
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                },
            };

            let del = await axios
                .delete("http://127.0.0.1:8000/api/products/" + id,config)
                .then(() => {
                    this.getProducts();
                });
        },
    async getProducts() {
            const config = {
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                },
            };

            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/products?page=" +
                    this.currentPage +
                    "&per_page=" +
                    this.perPage, config
                );

                console.log("API Response:", response.data);
                this.products = response.data.data;
                this.total = response.data.total;
            } catch (error) {
                console.error("API Error:", error);
            }
        },
        handlePageChange(newPage) {
            this.currentPage = newPage;
            this.getProducts();
        },
    },
    mounted() {
    
        this.getProducts();
    },
    
};
</script>