<!-- components/Pagination.vue -->
<template>
    <div>
        <nav aria-label="Page navigation example">
      <ul class="inline-flex -space-x-px text-sm">
        <li  v-if="currentPage >= 1" class="page-item">
          <a  @click="changePage(currentPage - 1)" :disabled="currentPage <= 1" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
        </li>
        <li v-for="page in pages" :key="page">
          <a @click="changePage(page)" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> {{ page }}</a>
        </li>
       
        <li  v-if="currentPage < totalPages">
          <a @click="changePage(currentPage + 1)" href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
        </li>
      </ul>
    </nav>
    </div>
</template>

<script>
export default {
    name: "pagination-com",
    props: {
        data: Object,
        total: Number,
        perPage: Number,
        currentPage: Number,
    },
    computed: {
        totalPages() {
            return Math.ceil(this.total / this.perPage);
        },
        pages() {
            const pagesArray = [];
            for (let i = 1; i <= this.totalPages; i++) {
                pagesArray.push(i);
            }
            return pagesArray;
        },
    },
    methods: {
        changePage(page) {
            this.$emit("page-change", page);
        },
    },
    created() {
        console.log("Total data:", this.total);
        console.log("PerPage:", this.perPage);
        console.log("TotalPages:", this.totalPages);
        console.log("Pages:", this.pages);
    }
};
</script>
