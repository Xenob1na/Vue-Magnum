<template>
    <div class="max-w-[1170px] mx-auto mt-[120px] lg2:mx-5">
        <div class="bg-[url('/img/f14.png')] h-[319px] bg-no-repeat bg-cover text-center bg-center">
            <h1 class="text-[#F3970A] text-[40px] font-extrabold pt-[106px] uppercase sm2:pt-[90px]">{{ OurServices.title }}</h1>
            <p class="pt-4 font-bold text-[20px] text-[#FFB800]">{{ OurServices.price }}</p>
        </div>
        <div class="mt-10 max-w-[780px] mx-auto mb-10">
            <p class="text-[20px] font-medium text-[#0D2344]/[0.8]">
                {{ OurServices.PromoText }}
            </p>
        </div>
        <hr class="border-solid border-2 border-[#FFB800]">
        <div class="mt-10 mb-10">
            <h3 class="text-[30px] text-[#F3970A] leading-[130%] font-bold mb-[15px]">{{ OurServices.title2 }}</h3>
            <p class="text-[18px] leading-[130%] font-medium text-[#0D2344]/[0.8]">
                {{ OurServices.body }}
            </p>
        </div>
        <div>
            <h3 class="text-[30px] text-[#F3970A] leading-[130%] font-bold mb-[15px]">{{ OurServices.title3 }}</h3>
            <p class="text-[18px] leading-[130%] font-medium text-[#0D2344]/[0.8]">
                {{ OurServices.body2 }}
            </p>
        </div>
        <ContactOrder />
    </div>
</template>

<script>
import ContactOrder from '../components/ContactOrder.vue';
import OurService from '../mocks/OurService';

export default {
    data() {
        return {
            inboxs: null,
        }
    },
    components: {
        ContactOrder,
    },
    created() {
        const OurServices = OurService.find(OurServices => OurServices.id == this.$route.params.id)
        if (OurServices) {
        this.OurServices = OurServices
        }
    },
}
</script>
