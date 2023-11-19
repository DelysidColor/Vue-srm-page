<template>
  <div class="table-container">
    <table>
      <thead>
        <tr class="table-header">
          <th @click="sort = { on: true, key: 'dateAndTime' }">
            <div>
              <div class="header-text">Дата и время</div>
              <span
                class="sort-arrow"
                v-if="sort.on && sort.key === 'dateAndTime'"
                >&#5167;</span
              >
            </div>
          </th>
          <th @click="sort = { on: true, key: 'status' }">
            <div>
              <div class="header-text">Статус</div>
              <span class="sort-arrow" v-if="sort.on && sort.key === 'status'"
                >&#5167;</span
              >
            </div>
          </th>
          <th @click="sort = { on: true, key: 'moduleName' }">
            <div>
              <div class="header-text">Название учебного модуля</div>
              <span
                class="sort-arrow"
                v-if="sort.on && sort.key === 'moduleName'"
                >&#5167;</span
              >
            </div>
          </th>
          <th @click="sort = { on: true, key: 'sessionType' }">
            <div>
              <div class="header-text">Тип Сессии</div>
              <span
                class="sort-arrow"
                v-if="sort.on && sort.key === 'sessionType'"
                >&#5167;</span
              >
            </div>
          </th>
          <th @click="sort = { on: true, key: 'roomNumber' }">
            <div>
              <div class="header-text">Комната</div>
              <span
                class="sort-arrow"
                v-if="sort.on && sort.key === 'roomNumber'"
                >&#5167;</span
              >
            </div>
          </th>
          <th @click="sort = { on: true, key: 'group' }">
            <div>
              <div class="header-text">Группа</div>
              <span class="sort-arrow" v-if="sort.on && sort.key === 'group'"
                >&#5167;</span
              >
            </div>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          :class="{ dark: index % 2 !== 0 }"
          v-for="(lesson, index) in paginatedLessons"
          :key="lesson.id">
          <td>
            {{ lesson.dateAndTime }}
          </td>
          <td>
            <div :class="getStatusClass(lesson.status)">
              {{ lesson.status }}
            </div>
          </td>
          <td>
            {{ lesson.moduleName }}
          </td>
          <td>
            {{ lesson.sessionType }}
          </td>
          <td>
            {{ lesson.roomNumber }}
          </td>
          <td>
            {{ lesson.group }}
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="handlePageChange" />
  </div>
</template>

<script>
import Pagination from "@/components/ui/Pagination.vue";
import { format } from "date-fns";

export default {
  components: {
    Pagination,
  },
  props: {
    lessons: {
      type: Array,
      required: true,
    },
    moduleSearch: "",
  },
  data() {
    return {
      currentPage: 1,
      lessonsPerPage: 11,
      sortStatus: false,
      sort: {
        on: false,
        key: "",
      },
    };
  },
  computed: {
    formattedLessons() {
      return this.lessons.map((lesson) => {
        const dateAndTime = new Date(lesson.dateAndTime);
        return {
          ...lesson,
          dateAndTime: format(dateAndTime, "dd.MM.yyyy HH:mm"),
        };
      });
    },
    filteredLessons() {
      if (!this.moduleSearch) {
        return this.formattedLessons;
      }

      const searchTerm = this.moduleSearch.toLowerCase();
      return this.formattedLessons.filter((lesson) =>
        lesson.moduleName.toLowerCase().includes(searchTerm)
      );
    },
    totalLessons() {
      return this.filteredLessons.length;
    },
    totalPages() {
      return Math.ceil(this.totalLessons / this.lessonsPerPage);
    },
    paginatedLessons() {
      const start = (this.currentPage - 1) * this.lessonsPerPage;
      const end = start + this.lessonsPerPage;
      if (this.sort.on) {
        return this.sortByKey(
          this.filteredLessons.slice(start, end),
          this.sort.key
        );
      }
      return this.filteredLessons.slice(start, end);
    },
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case "запланирован":
          return "planned-status";
        case "идет":
          return "ongoing-status";
        case "завершено":
          return "completed-status";
        default:
          return "";
      }
    },
    handlePageChange(newPage) {
      this.currentPage = newPage;
    },
    sortByKey(arr, key) {
      return arr.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }

        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
    },
  },
};
</script>

<style scoped>
th {
  text-align: left;
}

th div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.header-text {
  white-space: nowrap;
}

.sort-arrow {
  font-weight: 300;
  font-size: 12px;
}

.planned-status,
.ongoing-status,
.completed-status {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 16px;
  height: 18px;
  line-height: 28px;
}

.planned-status {
  background-color: rgb(175, 191, 245);
}

.ongoing-status {
  background-color: rgb(255, 218, 161);
}

.completed-status {
  background-color: rgb(145, 200, 147);
}

.table-container {
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid rgb(244, 244, 244);
  margin-top: 16px;
}
table {
  border-collapse: collapse;
  width: 100%;
  color: rgb(47, 49, 68);
}

.table-header th:first-child {
  border-top-left-radius: 12px;
}

.table-header th:last-child {
  border-top-right-radius: 12px;
}

.table-header th {
  font-size: 17px;
  padding: 10px 16px;
  background-color: rgb(245, 247, 249);
  height: 32px;
}

td {
  padding: 10px 16px;
  height: 48px;
}

.dark {
  background-color: rgb(244, 244, 244);
}
</style>
