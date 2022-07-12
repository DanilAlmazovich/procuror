<template>
    <section class="pb-16 pt-8">
        <div class="container">
            <div class="flex justify-between">
                <div class="flex flex-col items-center shadow-md p-4 rounded-lg w-[24%]" v-for="(item, i) in info" :key="i">
                    <img class="w-16 h-16 mb-4" src="../../static/images/emblem.png" alt="">
                    <span class="text-5xl font-medium mb-6">{{ item.year }}</span>
                    <span class="text-xl font-medium mb-4">{{ item.title }}</span>
                    <p class="text-lg text-[#797E8B]">{{ item.description }}</p>
                    <div class="flex justify-end w-full pt-4">
                        <button class="w-6 h-6">
                            <icon class="w-full h-full fill-current" name="arrow"></icon>
                        </button>
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
                info: [
                    {
                        year: '1993',
                        title: 'Конституция Кыргызской Республики',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    },
                    {
                        year: '2010',
                        title: 'Конституция Кыргызской Республики',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    },
                    {
                        year: '2017',
                        title: 'Конституция Кыргызской Республики',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    },
                    {
                        year: '2021',
                        title: 'Конституция Кыргызской Республики',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    }
                ]
            }
        }
    }
</script>