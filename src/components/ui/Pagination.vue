<template>
  <div class="pagination">
    <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
      &lt;
    </button>
    <span v-if="showFirstDots && firstPage" @click="goToPage(firstPage)">
      {{ firstPage }}
    </span>
    <span v-if="showFirstDots">...</span>
    <span
      v-for="pageNumber in visiblePages"
      :key="pageNumber"
      :class="{ active: pageNumber === currentPage }"
      @click="goToPage(pageNumber)">
      {{ pageNumber }}
    </span>
    <span v-if="showLastDots">...</span>
    <span v-if="showLastDots && lastPage" @click="goToPage(lastPage)">
      {{ lastPage }}
    </span>
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
      const range = 5;
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
    lastPage() {
      return this.totalPages > 5 ? this.totalPages : null;
    },
    firstPage() {
      return this.showFirstDots ? 1 : null;
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
  padding: 10px;
  background-color: rgb(245, 247, 249);
}

button,
span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: none;
  border-radius: 8px;
  box-sizing: border-box;
  width: 25px;
  height: 25px;
  margin: 0 5px;
  font-size: 14px;
  color: rgb(47, 49, 68);
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;
}

button.active,
span.active {
  background-color: rgb(244, 244, 244);
  border: 1px solid blue;
  background-color: white;
  color: blue;
}

button {
  transition: color 0.3s, border-color 0.3s;
}

span:hover,
button:hover {
  background-color: lightgrey;
}
</style>
