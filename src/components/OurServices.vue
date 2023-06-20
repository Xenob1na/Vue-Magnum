<template>
    <div class="max-w-[1170px] mx-auto mt-[120px]">
        <div class="flex justify-between mb-[40px]" v-motion-pop-visible>
            <h2 class="text-[45px] leading-[130%] uppercase font-bold text-[#0D2344]">Наши <span class="text-[#F3970A]">услуги</span></h2>
            <img src="/img/f3.svg" alt="">
        </div>
        <div class="flex justify-between" v-motion-pop-visible>
            <OurservicesItem 
                v-for="(services, index) in service"
                :key="services.id"
                :OurService="services"
            />
        </div>
    </div>
</template>

<script setup>
import OurservicesItem from './OurservicesItem.vue';
import { ref } from 'vue';

const service = ref([
    {   
        id: 1,
        img1: '/img/f10.png',
        img2: '/img/f7.svg',
        title: 'Доставка сборным грузом',
        price: 'от 3 000 рублей'
    },
    {   
        id: 2,
        img1: '/img/f11.png',
        img2: '/img/f8.svg',
        title: 'Перевозка негабаритных грузов',
        price: 'от 20 000 рублей'
    },
    {   
        id: 3,
        img1: '/img/f12.png',
        img2: '/img/f9.svg',
        title: 'Перевозки автотранспортом по ХМАО и ЯНАО',
        price: 'от 10 000 рублей'
    }
])
</script>
