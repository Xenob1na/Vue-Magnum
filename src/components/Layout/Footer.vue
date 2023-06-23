<template>
    <div class="max-w-[1170px] mx-auto mt-[120px]" v-motion-pop-visible>
        <hr class="border-solid border-2 border-[#FFB800]">
            <div class="text-center">
                <footer class="flex justify-between  py-[40px] xs2:flow-root">
                    <div class="flex justify-center">
                        <img src="/img/Logo.svg" alt="">
                    </div>
                    <div class="mt-[10px]">
                        <ul class="flex gap-6 cursor-pointer text-[#F3970A] font-medium text-[18px] p-[10px]  xs2:flow-root">
                            <li class="hover:underline decoration-2 mb-2" v-for="(navs, index) in nav"><RouterLink :to="navs.path">{{ navs.name }}</RouterLink></li>
                        </ul>
                    </div>
                </footer>
            </div>
        <hr class="border-solid border-2 border-[#FFB800]">
        <div class="text-center mt-[30px] mb-[30px]">
            <p class="font-bold text-[#0D2344] text-[25px]">©Магнум</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const nav = ref([
    {
        name: 'Почему мы',
        path: '/Why_are_we'
    },
    {
        name: 'О Комании',
        path: '/About'
    },
    {
        name: 'Услуги',
        path: '/Services'
    },
    {
        name: 'Контакты',
        path: '/Contact'
    },
])
</script>
