<template>
    <section class="pt-8 pb-16">
        <div class="container">
            <div class="flex mb-8">
                <h3 class="text-3xl font-medium mr-16 text-blue-500">Статистика</h3>
                <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Maecenas convallis vitae dui amet scelerisque.</p>
            </div>
            <div class="flex py-8 items-center">
                <div class="w-[30%]">
                    <Icon name="statistic"/>
                </div>
                <div class="flex flex-col w-[70%] pl-20">
                    <div class="flex justify-between" v-for="(item, i) in statistic" :key="i">
                        <div class="flex w-full mb-10 pr-6">
                            <div class="w-4/5 pr-4">
                                <span>{{ item.title }}</span>
                            </div>
                            <div class="w-1/5">
                                <span>{{ item.valueTile }}</span>
                            </div>
                        </div>
                        <div class="h-[7px] w-[350px] bg-[#DBDFF1] rounded-xl">
                            <div></div>
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
                statistic: [
                    {
                        title: 'Выявлено нарушений',
                        valueTile: '0000',
                        value: '70'
                    },
                    {
                        title: 'Направлено исков, заявлений в суд',
                        valueTile: '0000',
                        value: '70'
                    },
                    {
                        title: 'Внесено представлений',
                        valueTile: '0000',
                        value: '70'
                    },
                    {
                        title: 'Привлечено к дисциплинарной ответственности',
                        valueTile: '0000',
                        value: '70'
                    },
                ]
            }
        }
    }
</script>