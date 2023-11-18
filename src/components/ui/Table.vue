<template>
  <div class="table-container">
    <table>
      <thead>
        <tr class="table-header">
          <th>Дата и время</th>
          <th>Статус</th>
          <th>Название учебного модуля</th>
          <th>Тип Сессии</th>
          <th>Комната</th>
          <th>Группа</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          :class="{ dark: index % 2 !== 0 }"
          v-for="(lesson, index) in paginatedLessons"
          :key="lesson.dateAndTime">
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
  },
  data() {
    return {
      currentPage: 1,
      lessonsPerPage: 11,
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
    totalLessons() {
      return this.formattedLessons.length;
    },
    totalPages() {
      return Math.ceil(this.totalLessons / this.lessonsPerPage);
    },
    paginatedLessons() {
      const start = (this.currentPage - 1) * this.lessonsPerPage;
      const end = start + this.lessonsPerPage;
      return this.formattedLessons.slice(start, end);
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
  },
};
</script>

<style scoped>
td {
  padding: 10px 16px;
  height: 38px;
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
