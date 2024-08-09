import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import { createRouter, createWebHistory } from "vue-router";

//* ------------------------------------------------------------------------------------------ *//

//* Test para la ruta y el componente About, se monta la vista 'AboutView' y se hace un 'SnapShot' *//
//* que queda registrado en el archivo 'ejercicio2.spec.js.snap' *//

//Esta prueba compara el HTML actual de la vista 'AboutView' con un Snapshot previo.
describe("Test vista 'About'", () => {
  it("Test 1 - Snapshot vista 'About' succesful", () => {
    const wrapper = mount(AboutView);
    expect(wrapper.html()).toMatchSnapshot();
  });
  //Esta prueba verifica la existencia del componente 'AboutView' en la ruta '/about'.
  it("Test 1.2 - Prueba existencia del componente en la ruta", async () => {
    const routes = [
      //Configuración de la ruta que se va a probar
      {
        path: "/about", //Se entrega la URL
        name: "about", //Se entrega el nombre de la ruta
        component: () => AboutView, //Se entrega el componente Vue que se va a renderizar
      },
    ];

    const router = createRouter({
      //Creación del router con la configuración de rutas
      history: createWebHistory(process.env.BASE_URL), //Configura el historial para la navegación
      routes, //Registra las rutas definidas
    });

    router.push("/about"); //Navega a la ruta '/about' en el router
    await router.isReady(); //Espera a que la navegación a la ruta esté completa

    const wrapper = mount(AboutView, {
      //Monta el componente 'AboutView' para la prueba
      global: {
        //Configura elementos globales en el entorno de prueba
        plugins: [router], //Registra el plugin `router` para que esté disponible en el componente
      },
    });

    expect(wrapper.findComponent(AboutView).exists()).toBe(true); //Verifica que el componente 'AboutView' exista en la ruta
    expect(wrapper.html()).toMatchSnapshot(); //Compara el HTML actual de la vista 'AboutView' con un Snapshot previo
  });
});

//* ------------------------------------------------------------------------------------------ *//

//* Test para la ruta y el componente Contact, se monta la vista 'ContactView' y se hace un 'SnapShot' *//
//* que queda registrado en el archivo 'ejercicio2.spec.js.snap' *//
//El proceso es el mismo que en el test para la ruta y componente 'About'

describe("Test 2 de vista 'Contact'", () => {
  it("Test 2.1 - Snapshot vista 'Contact'", () => {
    const wrapper = mount(ContactView);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Test2 - Prueba existencia del componente en la ruta", async () => {
    const routes = [
      {
        path: "/contact",
        name: "contact",
        component: () => ContactView,
      },
    ];
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    router.push("/contact");
    await router.isReady();

    const wrapper = mount(ContactView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(ContactView).exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

//* ------------------------------------------------------------------------------------------ *//

//* Test para la ruta y el componente Home, se monta la vista 'HomeView' y se hace un 'SnapShot' *//
//* que queda registrado en el archivo 'ejercicio2.spec.js.snap' *//
//El proceso es el mismo que en el test para la ruta y componente 'About'

describe("Test vista 'Home'", () => {
  it("Test 3 - Snapshot vista 'Home' succesful", () => {
    const wrapper = mount(HomeView);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Test 3.1 - Prueba existencia del componente en la ruta", async () => {
    const routes = [
      {
        path: "/",
        name: "home",
        component: () => HomeView,
      },
    ];
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    router.push("/");
    await router.isReady();

    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(HomeView).exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
