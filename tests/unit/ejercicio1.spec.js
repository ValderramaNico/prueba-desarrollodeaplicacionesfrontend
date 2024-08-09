import { shallowMount } from "@vue/test-utils";
import ContadorComponent from "@/components/ContadorComponent.vue";


describe("Test1 - ContadorComponent", () => {
  it("Test1 - Se recibe un valor inicial de 0 en el contador.", () => {
    const wrapper = shallowMount(ContadorComponent, { //Se monta el componente y se le entregan las props para testear, en este caso, un valor en 0.
      props: {
        inicio: 0
      },
    });
    expect(wrapper.find("p").text()).toBe("0"); //Se valida que el valor en el contador con la etiqueta '<p>' sea de 0, después de settearlo en 'props' a '0'
    expect(wrapper.html()).toMatchSnapshot(); // Capturamos un snapshot del HTML del componente  
  });
});

describe("Test2 - ContadorComponent", () => {
  it("Test 2 - Debe incrementar el contador en 1 cuando se hace click en el botón +1", async () => {
    const wrapper = shallowMount(ContadorComponent, { //Se monta el componente y se le entregan las props para testear el boton, en este caso, un valor en 0
      props: {
        inicio: 0
      },
    });

    await wrapper.find("button.primary").trigger("click"); //Se hace un '.trigger' al botón de 'class="button.primary" (se usa la clase para identificarlo)'
    expect(wrapper.find("p").text()).toBe("1"); //Se verifica que el contador haya sumado desde el valor inicial 0 y tenga como valor '1'
    expect(wrapper.html()).toMatchSnapshot(); // Capturamos un snapshot del HTML del componente
  });

  it("Test2 - Debe decrementar el contador en 1 cuando se hace click en el botón -1", async () => {
    const wrapper = shallowMount(ContadorComponent, {
      props: {
        inicio: 0
      },
    });

    await wrapper.find("button.warning").trigger("click"); //Se hace un '.trigger' al botón de 'class="button.primary" (se usa la clase para identificarlo)'
    expect(wrapper.find("p").text()).toBe("-1"); //Se verifica que el contador haya restado desde el valor inicial 0 y tenga como valor '-1'
    expect(wrapper.html()).toMatchSnapshot(); // Capturamos un snapshot del HTML del componente
  });
});
