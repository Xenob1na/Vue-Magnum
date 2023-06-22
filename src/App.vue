<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Layout/Footer.vue';
import ModalOrder from './components/UI/ModalOrder.vue';
import BurgerBtn from './components/UI/BurgerBtn.vue';
import BurgerMenu from './components/UI/BurgerMenu.vue'

const Modal = ref({
    log: false
})

const TogglePopup = (trigger) => {
    Modal.value[trigger] = !Modal.value[trigger]
}

const navBurger = ref(false)

function OpenBurger() {
    navBurger.value = !navBurger.value
}

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

<template>
  <div class="mt-8 text-center lg2:px-5" v-motion-pop-visible>
        <header class="max-w-[1170px] mx-auto bg-[#fff] rounded-3xl border-solid border-2 border-[#E6E9EF] flex justify-between text-center py-[13px] px-[30px]">
           
          <router-link to="/"><img src="/img/Logo.svg" alt=""></router-link>
            
            <nav class="text-center mt-[10px] md2:hidden">
                <ul class="flex gap-6 cursor-pointer text-[#F3970A] font-medium text-[18px] p-[10px] text-center">
                    <li class="hover:underline decoration-2" v-for="(navs, index) in nav"><RouterLink :to="navs.path">{{ navs.name }}</RouterLink></li>
                </ul>
            </nav>
            
            <div class="font-medium text-[16px] text-center mt-1 md2:hidden">
                <button class="text-[#fff] bg-[#FFB800] px-[17px] py-4 rounded-[12px] hover:bg-[#FFCA42]" @click="() => TogglePopup('log')">Заказать</button>
            </div>

            <BurgerBtn @click="OpenBurger" class="hidden md2:block mb-2"/>
           
        </header>
    </div>
    <BurgerMenu 
    v-if="navBurger"
    />
  <ModalOrder 
  v-if="Modal.log"
  :TogglePopup="() => TogglePopup('log') "
  />
  <RouterView />
  <Footer />
</template>


