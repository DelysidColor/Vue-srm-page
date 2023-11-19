<template>
  <div class="navbar">
    <div class="navbar-header">
      <div class="logo" @click="$router.push('/')">
        <img src="@/assets/icons/logo.png" alt="logo" /> Сим Центр
      </div>
    </div>
    <div class="navbar_btns">
      <router-link to="/schedule"
        ><img src="@/assets/icons/schedule.png" alt="schedule" />
        Расписание</router-link
      >
      <router-link to="/sessions"
        ><img
          class="sessions-img"
          src="@/assets/icons/sessions.png"
          alt="sessions" />Учебные сессии</router-link
      >
      <router-link to="/rooms"
        ><img src="@/assets/icons/rooms.png" alt="rooms" />Список
        комнат</router-link
      >
      <router-link to="/users"
        ><img
          src="@/assets/icons/users.png"
          alt="users" />Пользователи</router-link
      >
      <router-link to="/groups"
        ><img src="@/assets/icons/groups.png" alt="groups" />Учебные
        группы</router-link
      >
      <router-link to="/devices"
        ><img src="@/assets/icons/devices.png" alt="devices" />Список
        устройств</router-link
      >
      <router-link to="/settings"
        ><img
          src="@/assets/icons/settings.png"
          alt="settings" />Настройки</router-link
      >
      <router-link to="/archive"
        ><img
          src="@/assets/icons/archive.png"
          alt="archive" />Архив</router-link
      >
    </div>
    <div class="navbar-footer">
      <div class="teacher">
        <div>
          <div class="teacher-name">Барнаби Мармадюк</div>
          <div class="teacher-role">преподаватель</div>
        </div>
        <div class="name-circle">БМ</div>
      </div>
      <button class="exit-btn">
        <img
          style="margin-right: 10px"
          src="@/assets/icons/log-out.png"
          alt="logout" />Выйти
      </button>
      <form>
        <select>
          <option value="apple">
            <img
              class="select-img"
              src="@/assets/icons/ruflag.png"
              alt="ruflag" />
            Русский
          </option>
        </select>
      </form>
      <div class="version">Версия 1.02</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.version {
  margin-top: 10px;
  font-size: 13px;
  color: rgba(47, 49, 68, 0.65);
}

.navbar-footer {
  margin-top: 70px;
}
.select-img {
  border: solid 1px lightgrey;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  width: 250px;
  height: 50px;
  padding-left: 40px;
  background-image: url("@/assets/icons/ruflag.png");
  background-repeat: no-repeat;
  background-position: 10px 50%;
  position: relative;
}

select:hover,
select:focus {
  border-color: #333;
}

select:hover,
select:focus {
  border-color: #333;
}

.exit-btn {
  width: 250px;
  height: 50px;
  border: none;
  background-color: white;
  border-radius: 16px;
  text-align: start;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}

.exit-btn:hover {
  background-color: rgb(244, 244, 244);
}

.teacher-role {
  font-size: 13px;
  line-height: 20px;
  color: lightgrey;
}

.teacher-name,
.exit-btn,
select {
  font-size: 15px;
  line-height: 24px;
  font-weight: 800;
}

.teacher {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  width: 250px;
  border-radius: 16px;
  box-shadow: 0 0 15px 5px lightgray;
  margin-bottom: 25px;
}

.name-circle {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgb(43, 79, 197);
  color: white;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar {
  height: 940px;
  width: 274px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 12px;
}

.navbar_btns {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 60px;
}

.navbar_btns a:hover {
  background-color: rgb(244, 244, 244);
}

.active {
  background-color: rgb(55, 97, 243);
  color: white;
  transition: 0.5s;
}

.active img {
  -webkit-filter: grayscale(100) brightness(200);
  filter: grayscale(100) brightness(200);
}

.sessions-img {
  filter: invert(53%) sepia(0%) saturate(5%) hue-rotate(135deg) brightness(150%)
    contrast(41%);
}

a {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 16px;
  width: 230px;
  height: 28px;
  font-weight: 800;
  text-decoration: none;
  color: black;
  transition: 0.5s;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 28px;
  font-weight: 800;
  margin-top: 11px;
  margin-left: 30px;
}

.logo img {
  height: 45px;
  margin-right: 10px;
}

.navbar_btns img {
  margin-right: 10px;
}
</style>
