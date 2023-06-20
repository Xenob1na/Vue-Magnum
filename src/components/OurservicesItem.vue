<template>
<div class="hover-effect-btn">
  <img :src="OurService.img1" alt="" />
  <img :src="OurService.img2" alt=""  class="absolute left-[140px] top-[135px] z-[1] f7"/>
  <h3 class="title absolute top-[240px] left-[43px] right-[43px] font-semibold text-white text-[18px] text-center">{{ OurService.title }}</h3>
  <div class="overlay"></div>
  <router-link :to="{path: `/Services/${OurService.id}`}">
    <button class="text-[#FFB800] left-[60px] border-solid border-2 border-[#FFB800] px-[74px] py-4 rounded-[12px] hover:bg-[#FFB800] hover:text-white button">Подробнее</button>
  </router-link>
</div>
</template>

<script setup>
const props = defineProps({
    OurService: {
        type: Object,
        default() {
            return {

            }
        }
    }
})
</script>

<style scoped>

.hover-effect-btn {
  position: relative;
  width: 370px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 370px;
  height: 432px;
  transition: background 0.5s ease;
}

.title {
  transition: top .5s ease;
}
.f7 {
  transition: top .5s ease;
}

.hover-effect-btn:hover .title{
  top: 45%; 
}
.hover-effect-btn:hover .f7{
  top: 20%; 
}

.button {
  position: absolute;
  top: 65%; 
  opacity: 0;
  transition: opacity .35s ease;
  
}

.hover-effect-btn:hover .button {
  opacity: 1;
}
     


</style>