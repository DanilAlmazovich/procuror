<template>
    <section class="pb-16 pt-8">
        <div class="container px-10">
            <div class="flex px-10">
                <div class="w-[45%] pr-10">
                    <h3 class="text-4xl font-medium mb-4">МУЗЕЙ КЫРГЫЗСКОЙ ПРОКУРАТУРЫ</h3>
                    <p class="text-lg text-[#555F71] mb-10">Dynamic color plays a key role in Material You, creating individualized and expressive experiences for your users and opening up new possibilities for the role of color in your app. </p>
                    <button class="flex items-center bg-blue-500 text-white py-2 px-6 rounded-[2.5rem]">
                        <span class="mr-1">Подробнее</span>
                        <Icon class="w-4 h-4 fill-current" name="mini-arrow"/>
                    </button>
                </div>
                <div class="w-[55%] pl-10">
                    <div class="flex items-center justify-between w-full relative">
                        <div class="w-[48%] flex items-center rounded-lg overflow-hidden"
                             :class="{'w-[70%] absolute left-0 right-0 m-auto': i === selectedImage }"
                             v-for="(item, i) in images" :key="i">
                            <img class="w-full h-auto" :src="item.image" alt="">
                        </div>
                        <div class="absolute left-0 right-0 m-auto bottom-0 w-full flex justify-center">
                            <button class="w-8 h-8 transform rotate-180 mr-1" @click.prevent="selectImageLeft()">
                                <icon class="w-8 h-8 fill-current text-white" name="mini-arrow"/>
                            </button>
                            <button class="w-8 h-8 ml-1" @click.prevent="selectImageRight()">
                                <Icon class="w-8 h-8 fill-current text-white" name="mini-arrow"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                selectedImage: 0,
                images: [
                    {
                        image: require('@/static/images/museum.png')
                    },
                    {
                        image: require('@/static/images/museum-1.png')
                    },
                    {
                        image: require('@/static/images/museum-2.png')
                    }
                ]
            }
        },
        methods: {
            selectImageLeft() {
                if(this.selectedImage <= 0) {
                    this.selectedImage = this.images.length - 1
                } else {
                    this.selectedImage--
                }
            },
            selectImageRight() {
                if(this.selectedImage >= this.images.length - 1) {
                    this.selectedImage = 0
                } else {
                    this.selectedImage++
                }
            }
        }
    }
</script>