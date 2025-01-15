<template>
    <section class=" landscape:bg-black h-screen bg-[url('../assets/img/fondo.png')] bg-no-repeat bg-cover items-center flex flex-col bg-center justify-center">
        <h1 class="text-white font-bold text-center text-5xl p-2">SCHOOL FIGHTER 2</h1>
        <p class="w-[60%] text-center text-white p-5">El mejor juego entre alumnos . Selecciona los alumnos que van a darse de hostias.</p>
        <div class="flex justify-center w-full items-center gap-6">
            <select v-model="personaje1" class="bg-white border border-gray-300 rounded-lg text-sm focus:ring-blue-500 block w-1/3 p-2.5" name="" id="">.
                <option value="" disabled>Elige un alumno</option>
                <option v-for="(personaje, index) in ordenarPersonajes()" :key="index" :value="personaje.nombre">{{ personaje.nombre }}</option>
            </select>
            <select v-model="personaje2" class="bg-white border border-gray-300 rounded-lg text-sm focus:ring-blue-500 block w-1/3 p-2.5" name="" id="">
                <option value="" disabled class="">Elige un alumno</option>
                <option v-for="(personaje, index) in ordenarPersonajes()" :key="index" :value="personaje.nombre">{{ personaje.nombre }}</option>
            </select>
        </div>
        <div class=" flex justify-center my-5">
            <button @click="continuar" class="bg-[#3dbc1e] text-white px-4 py-2 rounded font-bold">Elegir</button>
        </div>
    </section>
</template>

<script>
import { useToast } from "vue-toastification";
import { personajes } from "@/db/db.js";

export default {
    name: "PersonajesView",
    data() {
        return {
            personajes: personajes, 
            personaje1: "",
            personaje2: "", 
            arrayPersonajes: [],
            numeroPeleas: 0
        };
    },
    setup() {
        const toast = useToast();
        return { toast };
    },
    watch:{
        personaje1(newValue){
            this.toast.info(`El personaje 1 seleccionado ahora es ${newValue}`);
            console.log('El personaje 1 ahora es',newValue);
        },
        personaje2(newValue){
            this.toast.info(`El personaje 2 seleccionado ahora es ${newValue}`);
            console.log('El personaje 2 ahora es',newValue);
        }
    },
    methods: {
        continuar() {
            if (!this.personaje1 || !this.personaje2) {
                this.toast.error("Porfavor selecciona ambos personajes.");
            }
            else{
                const combatesGuardados =
                    JSON.parse(localStorage.getItem("combate")) || [];

                const nuevoCombate = {
                    pj1: this.personaje1,
                    pj2: this.personaje2,
                };

                combatesGuardados.push(nuevoCombate);

                localStorage.setItem("combate", JSON.stringify(combatesGuardados));
                this.$router.push('/escenarios')
            }
        },
        ordenarPersonajes() {
            return personajes.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
        }
    },
};
</script>


<style lang="sass" scoped>

</style>