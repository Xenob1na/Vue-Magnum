<template>
    <div class="max-w-[1170px] mx-auto mt-[100px] lg3:mx-5 lg2:mx-5">
        <div class="flex justify-between mb-2" v-motion-pop-visible>
            <h2 class="text-[50px] leading-[130%] uppercase font-bold text-[#0D2344] lg2:text-[45px]">Почему <span class="text-[#F3970A]">мы</span></h2>
            <img src="/img/f3.svg" alt="" class="lg2:max-w-[700px] lg4:hidden">
        </div>
        <div class="max-w-[700px] mb-[58px]" v-motion-pop-visible>
            <p class="text-[#0D2344]/[0.8] text-[18px] leading-[130%]">
                Благодоря 18-летнему опыту в сфере логистики, мы прекрасно знаем все тонкости транспортных перевозок и как изнуряет Вас ожидания приема заказа, расчет стоимости. С “Магнум” Вам не придется беспокоиться об этом.
            </p>
        </div>
        <div class="flex justify-between lg2:flow-root" v-motion-pop-visible>
            <div class="rounded-[12px] border-solid border-2 border-[#E6E9EF] min-w-[369px] flex gap-[10px] justify-center py-[52px] lg2:mb-4" v-for="(Advantages, index) in Advantage">
                <img :src="Advantages.img" alt="">
                <p class="font-medium text-[22px] tracking-[0.8px] text-[#0D2344]/[0.8] mt-[9px]">{{ Advantages.title }}</p>
            </div>
        </div>
    </div>
</template>
<!-- grid justify-items-center -->
<script setup>
import { ref } from 'vue';

const Advantage = ref([
    {
       img: 'img/f4.svg',
       title: 'Оперативность' 
    },
    {
       img: 'img/f5.svg',
       title: 'Качественность' 
    },
    {
       img: 'img/f6.svg',
       title: 'Надежность' 
    },
])

</script>
