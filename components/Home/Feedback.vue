<template>
    <section class="pt-8 pb-16">
        <div class="container">
            <h3 class="text-3xl font-medium text-blue-500 mb-14">Обращение в прокуратуру</h3>
            <Flickity ref="flickity" :options="flickityOptions">
                <div class="h-[220px] w-full overflow-hidden object-cover relative" v-for="n in 4">
                    <img class="w-full h-full object-cover" src="../../static/images/feedback-home.jpg" alt="">
                    <div class="absolute left-0 top-0 bottom-0 m-auto px-10 py-8">
                        <h4 class="text-4xl font-medium text-white mb-2">Советы прокурора</h4>
                        <span class="text-3xl text-white">Мобильное приложение</span>
                        <Download class="pt-6"/>
                    </div>
                </div>
            </Flickity>

        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                flickityOptions: {
                    prevNextButtons: false,
                    wrapAround: true,
//                    lazyLoad: true
                }
            }
        }
    }
</script>
<style src="flickity/dist/flickity.css"></style>