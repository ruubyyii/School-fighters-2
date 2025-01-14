<template>
    <section class="h-screen bg-[url('../assets/img/fondo.png')] bg-no-repeat bg-cover items-center flex flex-col bg-center justify-center">
        <h1 class="text-white font-bold text-center text-5xl p-2">SCHOOL FIGHTER 2</h1>
        <p class="w-[60%] text-center text-white p-5">El mejor juego entre alumnos . Selecciona los alumnos que van a darse de hostias.</p>
        <div class="flex justify-center w-full items-center gap-6">
            <select v-model="personaje1" class="bg-white border border-gray-300 rounded-lg text-sm focus:ring-blue-500 block w-1/3 p-2.5" name="" id="">.
                <option value="" disabled>Elige un alumno</option>
                <option v-for="(personaje, index) in personajes" :key="index" value="index">{{ personaje.nombre }}</option>
            </select>
            <select v-model="personaje2" class="bg-white border border-gray-300 rounded-lg text-sm focus:ring-blue-500 block w-1/3 p-2.5" name="" id="">
                <option value="" disabled class="">Elige un alumno</option>
                <option v-for="(personaje, index) in personajes" :key="index" value="index">{{ personaje.nombre }}</option>
            </select>
        </div>
        <div class=" flex justify-center my-5">
            <button @click="$router.push('/escenarios')" class="bg-[#3dbc1e] text-white px-4 py-2 rounded font-bold">Elegir</button>
        </div>
    </section>
</template>

<script>
import {personajes} from '@/db/db.js'
export default {
    name: 'PersonajesView',
    data() {
        return {
            personajes: personajes,
            personaje1: '',
            personaje2: ''
        }
    },
}
</script>

<style lang="sass" scoped>

</style>