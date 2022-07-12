<template>
    <section class="py-8">
        <div class="container">
            <Breadcrumbs class="mb-12" page="Новости"/>
            <h3 class="text-3xl font-medium text-blue-500 mb-8">Новости</h3>
            <div class="flex mb-14">
                <nuxt-link class="mr-4 py-2 px-6 rounded-[2.5rem]"
                           :class="{'text-white bg-blue-500': link.slug === $route.params.slug}"
                           v-for="(link, i) in links" :key="i"
                           :to="`/news/${link.slug}`">
                    {{ link.title }}
                </nuxt-link>
            </div>
            <div class="flex">
                <div class="w-[73%]">
                    <NewsContent/>
                </div>
                <div class="w-[27%] pl-8">
                    <NewsNavbar/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    {
                        slug: 'slug1',
                        title: 'Генеральная прокуратура'
                    },
                    {
                        slug: 'slug2',
                        title: 'Региональные новости'
                    },
                    {
                        slug: 'slug3',
                        title: 'Печатные издания'
                    },
                    {
                        slug: 'slug4',
                        title: 'Медиафайлы'
                    },
                    {
                        slug: 'slug5',
                        title: 'Инфографика'
                    },
                    {
                        slug: 'slug6',
                        title: 'Эфир'
                    }
                ]
            }
        },
    }
</script>