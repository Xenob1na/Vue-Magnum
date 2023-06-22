<template>
    <div class="max-w-[1170px] mx-auto mt-[120px] lg2:mx-5">
        <div class="flex justify-between mb-2" v-motion-pop-visible>
            <img src="/img/f3.svg" alt="" class="rotate-[-180deg] lg2:max-w-[700px] lg4:hidden">
            <h2 class="text-[50px] leading-[130%] uppercase font-bold text-[#0D2344] lg2:text-[45px]">О <span class="text-[#F3970A]">Компании</span></h2>
        </div>
        <div class="max-w-[700px]" v-motion-pop-visible>
            <p class="text-[#0D2344]/[0.8] text-[18px] leading-[130%] mb-7">
                Наша компания для грузоперевозок - это надежный партнер в сфере логистики. Мы предлагаем широкий спектр услуг, связанных с перевозками различных грузов, начиная от малогабаритных до крупногабаритных и тяжеловесных. 
            </p>
           <p class="text-[#0D2344]/[0.8] text-[18px] leading-[130%] mb-10">
            Мы заботимся о наших клиентах и предоставляем индивидуальный подход к каждому заказу. Наша команда профессионалов готова оказать помощь в выборе оптимального маршрута и транспортного средства для перевозки вашего груза.
           </p>
        </div>
        <hr class="border-solid border-2 border-[#FFB800]" v-motion-pop-visible>
        <div class="inline-grid grid-cols-2 gap-[30px] max-w-[960px] mt-[44px]" v-motion-pop-visible>
            <div class="max-w-[430px]" v-for="(abouts, index) in about">
                <h4 class="text-[22px] font-bold text-[#0D2344]">{{ abouts.title }}</h4>
                <p class="text-[18px] font-medium text-[#0D2344]/[0.8]">{{ abouts.body }}</p>
            </div>
        </div>
        <div class="text-center mt-[60px]">
            <RouterLink to="/About"><button class="text-[#fff] bg-[#FFB800] px-[92px] py-6 rounded-[12px] hover:bg-[#FFCA42] text-[18px]">Подробнее</button></RouterLink>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const about = ref([
    {
        title: 'Расчет стоимости в секунды',
        body: 'Вы оставляете заявку на сайте, и мы вам перезвоним или вышлем письмо с ответом в течении 30* минут.'
    },
    {
        title: 'На связи круглосуточно',
        body: 'Если Вам нужно срочно узнать какую-либо информацию, Вы можете написать нам на почту до 19:30*.'
    },
    {
        title: 'Пропуски',
        body: 'Для нашего транспорта мы оформляем сомастоятельно пропуски до нужных пунктов сдачи.'
    },
    {
        title: 'Любая удобная форма оплаты',
        body: 'Оплачивайте заказ любым удобным для Вас способом по прибытии груза в пункт назначения.'
    }
])
</script>
