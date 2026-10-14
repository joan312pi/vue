import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import BMIView from "@/views/BMIView.vue";
import TempView from "@/views/TempView.vue";
import HelloView from "@/views/HelloView.vue";
import Content1 from "@/components/Content1.vue";
import Content2 from "@/components/Content2.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import DemoListView from "@/views/DemoListView.vue";
import ScoreView from "@/views/ScoreView.vue";
import ToDoListView from "@/views/ToDoListView.vue";
import ScoreView1 from "@/views/ScoreView1.vue";
import ScoreView2 from "@/views/ScoreView2.vue";
import LifecycleView from "@/views/LifecycleView.vue";
import ParentView from "@/views/ParentView.vue";
import PokemonListView from "@/views/PokemonListView.vue";
import ShoppingCartView from "@/views/ShoppingCartView.vue";
import PiniaShoppingCartView from "@/views/PiniaShoppingCartView.vue";

const routes = [
  { path: "/:pathMatch(.*)*", component: NotFoundView, name: "NotFound" },
  {
    path: "/:id?",
    component: HomeView,
    name: "Home",
    props: true,
  },
  {
    path: "/about",
    component: AboutView,
    name: "About",
    children: [
      { path: "content1", component: Content1, name: "Content1" },
      { path: "content2", component: Content2, name: "Content2" },
    ],
  },
  {
    path: "/calBmi",
    component: BMIView,
    name: "BMI",
  },
  {
    path: "/hello/:id1?",
    component: HelloView,
    name: "Hello",
  },
  {
    path: "/temp",
    component: TempView,
  },
  {
    path: "/score",
    component: ScoreView,
    name: "Score",
  },
  {
    path: "/score1",
    component: ScoreView1,
    name: "Score1",
  },
  {
    path: "/score2",
    component: ScoreView2,
    name: "Score2",
  },
  {
    path: "/demoList",
    component: DemoListView,
    name: "DemoList",
  },
  {
    path: "/todoList",
    component: ToDoListView,
    name: "ToDoList",
  },
  {
    path: "/lifecycle",
    component: LifecycleView,
    name: "Lifecycle",
  },
  {
    path: "/parent",
    component: ParentView,
    name: "Parent",
  },
  {
    path: "/pokemonList",
    component: PokemonListView,
    name: "PokemonList",
  },
  {
    path: "/shoppingCart",
    component: ShoppingCartView,
    name: "ShoppingCart",
  },
  {
    path: "/piniaShoppingCart",
    component: PiniaShoppingCartView,
    name: "PiniaShoppingCart",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  linkActiveClass: "active my-text-color",
});

export default router;
