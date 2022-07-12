<template>
    <section class="py-12">
        <div class="container">
            <h3 class="text-3xl text-center font-medium mb-12">Генеральные прокуроры</h3>
            <div class="flex flex-wrap justify-between py-12">
                <div class="w-[24%] mb-10" v-for="(item, i) in items" :key="i">
                    <div class="mb-2">
                        <img class="w-full h-auto" src="../../static/images/about-image.png" alt="">
                    </div>
                    <div class="flex items-center">
                        <span class="mr-2">{{ item.name }}</span><span class="text-xl font-medium">{{ item.date }}</span>
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
                items: [
                    {
                        name: 'Баекова Чолпон',
                        date: '1990 — 1993'
                    },
                    {
                        name: 'Шаршеналиев Асанбек',
                        date: '1990 — 1993'
                    },
                    {
                        name: 'Абышкаев Чубак',
                        date: '1990 — 1993'
                    },
                    {
                        name: 'Абдылдаев Мыктыбек',
                        date: '1990 — 1993'
                    },
                    {
                        name: 'Баекова Чолпон',
                        date: '1990 — 1993'
                    },
                    {
                        name: 'Шаршеналиев Асанбек',
                        date: '1990 — 1993'
                    },
                    {
                        name: 'Абышкаев Чубак',
                        date: '1990 — 1993'
                    },
                    {
                        name: 'Абдылдаев Мыктыбек',
                        date: '1990 — 1993'
                    },
                ]
            }
        }
    }
</script>