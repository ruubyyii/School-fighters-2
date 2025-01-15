<template>
    <section class="landscape:bg-black h-screen bg-[url('../assets/img/fondo.png')] bg-no-repeat bg-cover items-center flex flex-col bg-center justify-center">
        <div class=" flex justify-center my-5 gap-5 fixed top-5 left-10">
            <button @click="$router.push('/')" class="bg-red-600 text-white px-4 py-2 rounded font-bold">Salir</button>
        </div>
        <div class="w-[800px]" id="combate">
            <img class="w-full" src="../assets/img/combate.gif" alt="">
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
            escenarioSeleccionado: '',
        }
    },
}
</script>

<style lang="sass" scoped>

</style>