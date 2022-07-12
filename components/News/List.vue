<template>
    <div class="p-4 mb-6 rounded-lg shadow-md cursor-pointer">
        <span class="text-xl">{{ item.title }}</span>
        <p class="text-sm mb-6 mt-2">{{ item.description }}</p>
        <NewsActions :date="item.date"/>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                default: null
            }
        },
        data() {
            return {

            }
        }
    }
</script>