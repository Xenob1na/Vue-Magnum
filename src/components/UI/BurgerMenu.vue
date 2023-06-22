<template>
    <div class="z-[1000]">
        <nav class="fixed left-0 top-0 right-0  items-center justify-center bg-[#0D2344] max-w-[350px] max-h-[250px] pl-7" >
            <ul class="flex flex-col items-center gap-7  mr-10 cursor-pointer text-[#F3970A] font-medium text-[18px] py-3">
                <li class="hover:underline decoration-2" v-for="(navs, index) in nav"><RouterLink :to="navs.path">{{ navs.name }}</RouterLink></li>
            </ul>
        </nav>
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
