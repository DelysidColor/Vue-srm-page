<template>
  <div class="page-body">
    <div class="wrapper">
      <div class="header">
        <div class="page-name">Учебные Сессии</div>
        <div class="controls">
          <input type="search" placeholder="Поиск" />
          <button class="select-btn">
            <img src="@/assets/icons/filter.png" alt="filter" />
          </button>
          <button class="select-btn">
            <img src="@/assets/icons/menulines.png" alt="menu" />
          </button>
          <button class="create-btn">Создать</button>
        </div>
      </div>
      <Table :lessons="lessons" />
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
        },
        {
          dateAndTime: "2023-11-19T14:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 2",
          sessionType: "экзамен",
          roomNumber: 21,
          group: "CD34",
        },
        {
          dateAndTime: "2023-11-20T09:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 3",
          sessionType: "аккредитация",
          roomNumber: 55,
          group: "EF56",
        },
        {
          dateAndTime: "2023-11-21T11:45:00",
          status: "идет",
          moduleName: "Название учебного модуля 4",
          sessionType: "урок",
          roomNumber: 37,
          group: "GH78",
        },
        {
          dateAndTime: "2023-11-22T16:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 5",
          sessionType: "экзамен",
          roomNumber: 18,
          group: "IJ90",
        },
        {
          dateAndTime: "2023-11-23T08:30:00",
          status: "завершено",
          moduleName: "Название учебного модуля 6",
          sessionType: "урок",
          roomNumber: 63,
          group: "KL12",
        },
        {
          dateAndTime: "2023-11-24T13:15:00",
          status: "идет",
          moduleName: "Название учебного модуля 7",
          sessionType: "аккредитация",
          roomNumber: 29,
          group: "MN34",
        },
        {
          dateAndTime: "2023-11-25T10:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 8",
          sessionType: "урок",
          roomNumber: 47,
          group: "OP56",
        },
        {
          dateAndTime: "2023-11-26T15:45:00",
          status: "завершено",
          moduleName: "Название учебного модуля 9",
          sessionType: "экзамен",
          roomNumber: 12,
          group: "QR78",
        },
        {
          dateAndTime: "2023-11-27T07:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 10",
          sessionType: "урок",
          roomNumber: 84,
          group: "ST90",
        },
        {
          dateAndTime: "2023-11-28T12:45:00",
          status: "аккредитация",
          moduleName: "Название учебного модуля 11",
          sessionType: "запланирован",
          roomNumber: 55,
          group: "UV12",
        },
        {
          dateAndTime: "2023-11-29T14:00:00",
          status: "завершено",
          moduleName: "Название учебного модуля 12",
          sessionType: "урок",
          roomNumber: 33,
          group: "WX34",
        },
        {
          dateAndTime: "2023-11-30T09:30:00",
          status: "идет",
          moduleName: "Название учебного модуля 13",
          sessionType: "экзамен",
          roomNumber: 76,
          group: "YZ56",
        },
        {
          dateAndTime: "2023-12-01T11:00:00",
          status: "запланирован",
          moduleName: "Название учебного модуля 14",
          sessionType: "аккредитация",
          roomNumber: 22,
          group: "AB78",
        },
        {
          dateAndTime: "2023-12-02T16:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 15",
          sessionType: "урок",
          roomNumber: 48,
          group: "CD90",
        },
        {
          dateAndTime: "2023-12-03T08:45:00",
          status: "идет",
          moduleName: "Название учебного модуля 16",
          sessionType: "урок",
          roomNumber: 18,
          group: "EF12",
        },
        {
          dateAndTime: "2023-12-04T13:30:00",
          status: "экзамен",
          moduleName: "Название учебного модуля 17",
          sessionType: "запланирован",
          roomNumber: 66,
          group: "GH34",
        },
        {
          dateAndTime: "2023-12-05T10:15:00",
          status: "завершено",
          moduleName: "Название учебного модуля 18",
          sessionType: "аккредитация",
          roomNumber: 39,
          group: "IJ56",
        },
        {
          dateAndTime: "2023-12-06T15:00:00",
          status: "урок",
          moduleName: "Название учебного модуля 19",
          sessionType: "идет",
          roomNumber: 91,
          group: "KL78",
        },
      ],
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
  width: 100%;
  background-color: rgb(244, 244, 244);
}

.wrapper {
  padding: 15px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: white;
}

input {
  background: url("@/assets/icons/search.png") no-repeat 3px 1px;
  background-size: auto 50%;
  background-position: 20px 50%;
  padding-left: 50px;
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
