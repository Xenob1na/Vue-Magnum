<template>
    <div class="max-w-[1170px] mx-auto mt-[120px]">
        <hr class="border-solid border-2 border-[#FFB800]">
            <div class="text-center">
                <footer class="flex justify-between text-center py-[40px]">
                    <img src="/img/Logo.svg" alt="">
                    <nav class="text-center mt-[10px]">
                        <ul class="flex gap-6 cursor-pointer text-[#F3970A] font-medium text-[18px] p-[10px] text-center">
                            <li class="hover:underline decoration-2" v-for="(navs, index) in nav"><a :href="navs.path">{{ navs.name }}</a></li>
                        </ul>
                    </nav>
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
        path: '#Why_are_we'
    },
    {
        name: 'О Комании',
        path: '#About_company'
    },
    {
        name: 'Услуги',
        path: '#Services'
    },
    {
        name: 'Контакты',
        path: '#Contact'
    },
])
</script>
