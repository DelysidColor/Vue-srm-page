import { createRouter, createWebHistory } from "vue-router";
import Schedule from "../views/Schedule.vue";
import Sessions from "../views/Sessions.vue";
import Archive from "../views/Archive.vue";
import Devices from "../views/Devices.vue";
import Groups from "../views/Groups.vue";
import Rooms from "../views/Rooms.vue";
import Settings from "../views/Settings.vue";
import Users from "../views/Users.vue";

const routes = [
  {
    path: "/schedule",
    name: "schedule",
    component: Schedule,
  },
  {
    path: "/sessions",
    name: "sessions",
    component: Sessions,
  },
  {
    path: "/archive",
    name: "archive",
    component: Archive,
  },
  {
    path: "/devices",
    name: "devices",
    component: Devices,
  },
  {
    path: "/groups",
    name: "groups",
    component: Groups,
  },
  {
    path: "/rooms",
    name: "rooms",
    component: Rooms,
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings,
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
