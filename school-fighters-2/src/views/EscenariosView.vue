<template>
    <section class="h-screen bg-[url('../assets/img/fondo.png')] bg-no-repeat bg-cover items-center flex flex-col bg-center justify-center">
        <h1 class="text-white font-bold text-center text-5xl p-2">SCHOOL FIGHTER 2</h1>
        <p class="w-[60%] text-center text-white p-5">El mejor juego de lucha entre alumnos. Selecciona el escenario que más te guste.</p>
        <div class="flex justify-center w-full items-center gap-6">
            <select v-model="escenario1" class="bg-white border border-gray-300 rounded-lg text-sm focus:ring-blue-500 block w-1/3 p-2.5" name="" id="">.
                <option value="" disabled>Elige un escenario</option>
                <option v-for="(escenarios, index) in escenarios" :key="index" value="index">{{ escenarios.nombre }}</option>
            </select>
        </div>
        <div class=" flex justify-center my-5 gap-5">
            <button @click="$router.push('/')" class="bg-red-600 text-white px-4 py-2 rounded font-bold">Volver</button>
            <button @click="$router.push('/combate')" class="bg-[#3dbc1e] text-white px-4 py-2 rounded font-bold">Elegir</button>
        </div>
    </section>
</template>

<script>
import {escenarios} from '@/db/db.js'
export default {
    name: 'PersonajesView',
    data() {
        return {
            escenarios: escenarios,
            escenario1: '',
        }
    },
}
</script>

<style lang="sass" scoped>

</style>