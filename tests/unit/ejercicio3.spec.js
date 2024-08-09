import { shallowMount } from "@vue/test-utils";
import ChildComponent from "@/components/ChildComponent.vue";

describe("Test4 - ChildComponent.vue", () => {
  it('Realiza un "emit" con "sent-text" del texto ingresado en el input al ser envíado', async () => {
    const wrapper = shallowMount(ChildComponent);//se monta el componente 'ChildComponent' para hacer el test

    const input = wrapper.find("input"); //Busca el input
    const testText = "Esto es una prueba"; //Se setea un texto de prueba que se llamará 'testText'
    await input.setValue(testText);//se settea 'testText' como el texto de prueba para el input

    const button = wrapper.find("button");//Busca el botón
    await button.trigger("click");//Se hace click en el botón

    const emittedEvents = wrapper.emitted("sent-text");//revisa que se haya enviado con el texto de prueba correctamente
    expect(emittedEvents[0]).toEqual([testText]);//Revisa el argumento del primer evento
  });
});
