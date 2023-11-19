<template>
  <div class="page-body">
    <div class="wrapper">
      <div class="header">
        <div class="page-name">Учебные Сессии</div>
        <div class="controls">
          <input type="search" placeholder="Поиск" v-model="moduleSearch" />
          <button class="select-btn">
            <img src="@/assets/icons/filter.png" alt="filter" />
          </button>
          <button class="select-btn">
            <img src="@/assets/icons/menulines.png" alt="menu" />
          </button>
          <button class="create-btn">Создать</button>
        </div>
      </div>
      <Table :lessons="lessons" :moduleSearch="moduleSearch" />
    </div>
  </div>
</template>

<script>
import Table from "@/components/ui/Table";

export default {
  components: {
    Table,
  },
  data() {
    return {
      lessons: [
        {
          dateAndTime: "2023-11-18T12:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 1",
          sessionType: "урок",
          roomNumber: 42,
          group: "AB12",
          id: 1,
        },
        {
          dateAndTime: "2023-11-19T14:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 2",
          sessionType: "экзамен",
          roomNumber: 21,
          group: "CD34",
          id: 2,
        },
        {
          dateAndTime: "2023-11-20T09:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 3",
          sessionType: "аккредитация",
          roomNumber: 55,
          group: "EF56",
          id: 3,
        },
        {
          dateAndTime: "2023-11-21T11:45:00",
          status: "идет",
          moduleName: "Название учебного модуля 4",
          sessionType: "урок",
          roomNumber: 37,
          group: "GH78",
          id: 4,
        },
        {
          dateAndTime: "2023-11-22T16:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 5",
          sessionType: "экзамен",
          roomNumber: 18,
          group: "IJ90",
          id: 5,
        },
        {
          dateAndTime: "2023-11-23T08:30:00",
          status: "завершено",
          moduleName: "Название учебного модуля 6",
          sessionType: "урок",
          roomNumber: 63,
          group: "KL12",
          id: 6,
        },
        {
          dateAndTime: "2023-11-24T13:15:00",
          status: "идет",
          moduleName: "Название учебного модуля 7",
          sessionType: "аккредитация",
          roomNumber: 29,
          group: "MN34",
          id: 7,
        },
        {
          dateAndTime: "2023-11-25T10:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 8",
          sessionType: "урок",
          roomNumber: 47,
          group: "OP56",
          id: 8,
        },
        {
          dateAndTime: "2023-11-26T15:45:00",
          status: "завершено",
          moduleName: "Название учебного модуля 9",
          sessionType: "экзамен",
          roomNumber: 12,
          group: "QR78",
          id: 9,
        },
        {
          dateAndTime: "2023-11-27T07:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 10",
          sessionType: "урок",
          roomNumber: 84,
          group: "ST90",
          id: 10,
        },
        {
          dateAndTime: "2023-11-28T12:45:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 11",
          sessionType: "запланирован",
          roomNumber: 55,
          group: "UV12",
          id: 11,
        },
        {
          dateAndTime: "2023-11-29T14:00:00",
          status: "завершено",
          moduleName: "Название учебного модуля 12",
          sessionType: "урок",
          roomNumber: 33,
          group: "WX34",
          id: 12,
        },
        {
          dateAndTime: "2023-11-30T09:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 13",
          sessionType: "экзамен",
          roomNumber: 76,
          group: "YZ56",
          id: 13,
        },
        {
          dateAndTime: "2023-12-01T11:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 14",
          sessionType: "аккредитация",
          roomNumber: 22,
          group: "AB78",
          id: 14,
        },
        {
          dateAndTime: "2023-12-02T16:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 15",
          sessionType: "урок",
          roomNumber: 48,
          group: "CD90",
          id: 15,
        },
        {
          dateAndTime: "2023-12-03T08:45:00",
          status: "идет",
          moduleName: "Название учебного модуля 16",
          sessionType: "урок",
          roomNumber: 18,
          group: "EF12",
          id: 16,
        },
        {
          dateAndTime: "2023-12-04T13:30:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 17",
          sessionType: "запланирован",
          roomNumber: 66,
          group: "GH34",
          id: 17,
        },
        {
          dateAndTime: "2023-12-05T10:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 18",
          sessionType: "аккредитация",
          roomNumber: 39,
          group: "IJ56",
          id: 18,
        },
        {
          dateAndTime: "2023-12-06T15:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 19",
          sessionType: "идет",
          roomNumber: 91,
          group: "KL78",
          id: 19,
        },
        {
          dateAndTime: "2023-11-18T12:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 1",
          sessionType: "урок",
          roomNumber: 42,
          group: "AB12",
          id: 20,
        },
        {
          dateAndTime: "2023-11-19T14:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 2",
          sessionType: "экзамен",
          roomNumber: 21,
          group: "CD34",
          id: 21,
        },
        {
          dateAndTime: "2023-11-20T09:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 3",
          sessionType: "аккредитация",
          roomNumber: 55,
          group: "EF56",
          id: 22,
        },
        {
          dateAndTime: "2023-11-21T11:45:00",
          status: "идет",
          moduleName: "Название учебного модуля 4",
          sessionType: "урок",
          roomNumber: 37,
          group: "GH78",
          id: 23,
        },
        {
          dateAndTime: "2023-11-22T16:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 5",
          sessionType: "экзамен",
          roomNumber: 18,
          group: "IJ90",
          id: 24,
        },
        {
          dateAndTime: "2023-11-23T08:30:00",
          status: "завершено",
          moduleName: "Название учебного модуля 6",
          sessionType: "урок",
          roomNumber: 63,
          group: "KL12",
          id: 25,
        },
        {
          dateAndTime: "2023-11-24T13:15:00",
          status: "идет",
          moduleName: "Название учебного модуля 7",
          sessionType: "аккредитация",
          roomNumber: 29,
          group: "MN34",
          id: 26,
        },
        {
          dateAndTime: "2023-11-25T10:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 8",
          sessionType: "урок",
          roomNumber: 47,
          group: "OP56",
          id: 27,
        },
        {
          dateAndTime: "2023-11-26T15:45:00",
          status: "завершено",
          moduleName: "Название учебного модуля 9",
          sessionType: "экзамен",
          roomNumber: 12,
          group: "QR78",
          id: 28,
        },
        {
          dateAndTime: "2023-11-27T07:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 10",
          sessionType: "урок",
          roomNumber: 84,
          group: "ST90",
          id: 29,
        },
        {
          dateAndTime: "2023-11-28T12:45:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 11",
          sessionType: "запланирован",
          roomNumber: 55,
          group: "UV12",
          id: 30,
        },
        {
          dateAndTime: "2023-11-29T14:00:00",
          status: "завершено",
          moduleName: "Название учебного модуля 12",
          sessionType: "урок",
          roomNumber: 33,
          group: "WX34",
          id: 31,
        },
        {
          dateAndTime: "2023-11-30T09:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 13",
          sessionType: "экзамен",
          roomNumber: 76,
          group: "YZ56",
          id: 32,
        },
        {
          dateAndTime: "2023-12-01T11:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 14",
          sessionType: "аккредитация",
          roomNumber: 22,
          group: "AB78",
          id: 33,
        },
        {
          dateAndTime: "2023-12-02T16:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 15",
          sessionType: "урок",
          roomNumber: 48,
          group: "CD90",
          id: 34,
        },
        {
          dateAndTime: "2023-12-03T08:45:00",
          status: "идет",
          moduleName: "Название учебного модуля 16",
          sessionType: "урок",
          roomNumber: 18,
          group: "EF12",
          id: 35,
        },
        {
          dateAndTime: "2023-12-04T13:30:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 17",
          sessionType: "запланирован",
          roomNumber: 66,
          group: "GH34",
          id: 36,
        },
        {
          dateAndTime: "2023-12-05T10:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 18",
          sessionType: "аккредитация",
          roomNumber: 39,
          group: "IJ56",
          id: 37,
        },
        {
          dateAndTime: "2023-12-06T15:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 19",
          sessionType: "идет",
          roomNumber: 91,
          group: "KL78",
          id: 38,
        },
        {
          dateAndTime: "2023-11-18T12:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 1",
          sessionType: "урок",
          roomNumber: 42,
          group: "AB12",
          id: 39,
        },
        {
          dateAndTime: "2023-11-19T14:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 2",
          sessionType: "экзамен",
          roomNumber: 21,
          group: "CD34",
          id: 1,
        },
        {
          dateAndTime: "2023-11-20T09:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 3",
          sessionType: "аккредитация",
          roomNumber: 55,
          group: "EF56",
          id: 40,
        },
        {
          dateAndTime: "2023-11-21T11:45:00",
          status: "идет",
          moduleName: "Название учебного модуля 4",
          sessionType: "урок",
          roomNumber: 37,
          group: "GH78",
          id: 41,
        },
        {
          dateAndTime: "2023-11-22T16:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 5",
          sessionType: "экзамен",
          roomNumber: 18,
          group: "IJ90",
          id: 42,
        },
        {
          dateAndTime: "2023-11-23T08:30:00",
          status: "завершено",
          moduleName: "Название учебного модуля 6",
          sessionType: "урок",
          roomNumber: 63,
          group: "KL12",
          id: 43,
        },
        {
          dateAndTime: "2023-11-24T13:15:00",
          status: "идет",
          moduleName: "Название учебного модуля 7",
          sessionType: "аккредитация",
          roomNumber: 29,
          group: "MN34",
          id: 44,
        },
        {
          dateAndTime: "2023-11-25T10:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 8",
          sessionType: "урок",
          roomNumber: 47,
          group: "OP56",
          id: 45,
        },
        {
          dateAndTime: "2023-11-26T15:45:00",
          status: "завершено",
          moduleName: "Название учебного модуля 9",
          sessionType: "экзамен",
          roomNumber: 12,
          group: "QR78",
          id: 46,
        },
        {
          dateAndTime: "2023-11-27T07:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 10",
          sessionType: "урок",
          roomNumber: 84,
          group: "ST90",
          id: 47,
        },
        {
          dateAndTime: "2023-11-28T12:45:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 11",
          sessionType: "запланирован",
          roomNumber: 55,
          group: "UV12",
          id: 48,
        },
        {
          dateAndTime: "2023-11-29T14:00:00",
          status: "завершено",
          moduleName: "Название учебного модуля 12",
          sessionType: "урок",
          roomNumber: 33,
          group: "WX34",
          id: 49,
        },
        {
          dateAndTime: "2023-11-30T09:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 13",
          sessionType: "экзамен",
          roomNumber: 76,
          group: "YZ56",
          id: 50,
        },
        {
          dateAndTime: "2023-12-01T11:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 14",
          sessionType: "аккредитация",
          roomNumber: 22,
          group: "AB78",
          id: 51,
        },
        {
          dateAndTime: "2023-12-02T16:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 15",
          sessionType: "урок",
          roomNumber: 48,
          group: "CD90",
          id: 52,
        },
        {
          dateAndTime: "2023-12-03T08:45:00",
          status: "идет",
          moduleName: "Название учебного модуля 16",
          sessionType: "урок",
          roomNumber: 18,
          group: "EF12",
          id: 53,
        },
        {
          dateAndTime: "2023-12-04T13:30:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 17",
          sessionType: "запланирован",
          roomNumber: 66,
          group: "GH34",
          id: 54,
        },
        {
          dateAndTime: "2023-12-05T10:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 18",
          sessionType: "аккредитация",
          roomNumber: 39,
          group: "IJ56",
          id: 55,
        },
        {
          dateAndTime: "2023-12-06T15:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 19",
          sessionType: "идет",
          roomNumber: 91,
          group: "KL78",
          id: 56,
        },
        {
          dateAndTime: "2023-11-18T12:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 1",
          sessionType: "урок",
          roomNumber: 42,
          group: "AB12",
          id: 57,
        },
        {
          dateAndTime: "2023-11-19T14:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 2",
          sessionType: "экзамен",
          roomNumber: 21,
          group: "CD34",
          id: 58,
        },
        {
          dateAndTime: "2023-11-20T09:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 3",
          sessionType: "аккредитация",
          roomNumber: 55,
          group: "EF56",
          id: 59,
        },
        {
          dateAndTime: "2023-11-21T11:45:00",
          status: "идет",
          moduleName: "Название учебного модуля 4",
          sessionType: "урок",
          roomNumber: 37,
          group: "GH78",
          id: 60,
        },
        {
          dateAndTime: "2023-11-22T16:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 5",
          sessionType: "экзамен",
          roomNumber: 18,
          group: "IJ90",
          id: 61,
        },
        {
          dateAndTime: "2023-11-23T08:30:00",
          status: "завершено",
          moduleName: "Название учебного модуля 6",
          sessionType: "урок",
          roomNumber: 63,
          group: "KL12",
          id: 62,
        },
        {
          dateAndTime: "2023-11-24T13:15:00",
          status: "идет",
          moduleName: "Название учебного модуля 7",
          sessionType: "аккредитация",
          roomNumber: 29,
          group: "MN34",
          id: 63,
        },
        {
          dateAndTime: "2023-11-25T10:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 8",
          sessionType: "урок",
          roomNumber: 47,
          group: "OP56",
          id: 64,
        },
        {
          dateAndTime: "2023-11-26T15:45:00",
          status: "завершено",
          moduleName: "Название учебного модуля 9",
          sessionType: "экзамен",
          roomNumber: 12,
          group: "QR78",
          id: 65,
        },
        {
          dateAndTime: "2023-11-27T07:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 10",
          sessionType: "урок",
          roomNumber: 84,
          group: "ST90",
          id: 66,
        },
        {
          dateAndTime: "2023-11-28T12:45:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 11",
          sessionType: "запланирован",
          roomNumber: 55,
          group: "UV12",
          id: 67,
        },
        {
          dateAndTime: "2023-11-29T14:00:00",
          status: "завершено",
          moduleName: "Название учебного модуля 12",
          sessionType: "урок",
          roomNumber: 33,
          group: "WX34",
          id: 68,
        },
        {
          dateAndTime: "2023-11-30T09:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 13",
          sessionType: "экзамен",
          roomNumber: 76,
          group: "YZ56",
          id: 69,
        },
        {
          dateAndTime: "2023-12-01T11:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 14",
          sessionType: "аккредитация",
          roomNumber: 22,
          group: "AB78",
          id: 70,
        },
        {
          dateAndTime: "2023-12-02T16:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 15",
          sessionType: "урок",
          roomNumber: 48,
          group: "CD90",
          id: 71,
        },
        {
          dateAndTime: "2023-12-03T08:45:00",
          status: "идет",
          moduleName: "Название учебного модуля 16",
          sessionType: "урок",
          roomNumber: 18,
          group: "EF12",
          id: 72,
        },
        {
          dateAndTime: "2023-12-04T13:30:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 17",
          sessionType: "запланирован",
          roomNumber: 66,
          group: "GH34",
          id: 73,
        },
        {
          dateAndTime: "2023-12-05T10:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 18",
          sessionType: "аккредитация",
          roomNumber: 39,
          group: "IJ56",
          id: 74,
        },
        {
          dateAndTime: "2023-12-06T15:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 19",
          sessionType: "идет",
          roomNumber: 91,
          group: "KL78",
          id: 75,
        },
      ],
      moduleSearch: "",
    };
  },
};
</script>

<style>
.page-name {
  font-size: 24px;
  font-weight: 800;
}

.select-btn {
  background-color: rgb(244, 244, 244);
  border-radius: 12px;
  border: none;
  width: 45px;
  height: 45px;
}

.page-body {
  padding: 5px;
  padding-bottom: 0;
  width: 100%;
  background-color: rgb(244, 244, 244);
}

.wrapper {
  padding: 21px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: white;
}

input {
  background: url("@/assets/icons/search.png") no-repeat 3px 1px;
  background-size: auto 50%;
  background-position: 20px 50%;
  padding-left: 50px;
  padding-right: 10px;
  width: 260px;
  border-radius: 12px;
  border: 1px solid rgb(244, 244, 244);
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.controls {
  display: flex;
  width: 500px;
  height: 45px;
  justify-content: space-around;
}

.create-btn {
  width: 115px;
  background-color: rgb(55, 97, 243);
  color: white;
  border: none;
  border-radius: 12px;
}
</style>
