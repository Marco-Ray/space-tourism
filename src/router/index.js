import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DestinationView from "@/views/DestinationView.vue";
import CrewView from "@/views/CrewView.vue";
import TechnologyView from "@/views/TechnologyView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/destination",
    name: "destination",
    component: DestinationView,
  },
  {
    path: "/crew",
    name: "crew",
    component: CrewView,
  },
  {
    path: "/technology",
    name: "technology",
    component: TechnologyView,
  },
];

const routers = [...routes];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routers,
})

export default router;