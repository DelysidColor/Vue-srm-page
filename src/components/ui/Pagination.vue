<template>
  <div class="pagination">
    <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
      &lt;
    </button>
    <span v-if="showFirstDots">...</span>
    <span
      v-for="pageNumber in visiblePages"
      :key="pageNumber"
      @click="goToPage(pageNumber)">
      {{ pageNumber }}
    </span>
    <span v-if="showLastDots">...</span>
    <button
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages">
      &gt;
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  computed: {
    visiblePages() {
      const range = 5; // Number of visible pages
      const start = Math.max(1, this.currentPage - Math.floor(range / 2));
      const end = Math.min(this.totalPages, start + range - 1);

      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    },
    showFirstDots() {
      return this.visiblePages.length > 0 && this.visiblePages[0] > 1;
    },
    showLastDots() {
      return (
        this.visiblePages.length > 0 &&
        this.visiblePages[this.visiblePages.length - 1] < this.totalPages
      );
    },
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit("page-change", page);
      }
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 5px;
  padding: 8px 12px;
  font-size: 14px;
  transition: color 0.3s, border-color 0.3s, background-color 0.3s;
}

button:hover,
button.active {
  color: blue;
  border-color: blue;
}

button.active {
  background-color: grey;
  color: white;
}

span {
  display: inline-block;
  margin: 0 5px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;
}

span:hover {
  color: blue;
  background-color: #f0f0f0; /* Adjust the background color on hover */
}

span.active {
  background-color: grey;
  color: white;
}
</style>
