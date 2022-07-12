<template>
    <div class="flex">
        <button class="border border-solid border-[#555F71] text-[#555F71] h-10 px-4 rounded-lg flex items-center mr-4">
            <span class="mr-2">{{ date }}</span>
            <Icon class="fill-current w-5 h-5" name="calendar"/>
        </button>
        <button class="border border-solid border-[#555F71] text-[#555F71] w-10 h-10 rounded-full flex items-center justify-center mr-4">
            <Icon class="fill-current w-5 h-5" name="photo"/>
        </button>
        <button class="border border-solid border-[#555F71] text-[#555F71] w-10 h-10 rounded-full flex items-center justify-center mr-4">
            <Icon class="fill-current w-5 h-5" name="video"/>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            date: {
                type: String,
                default: ''
            }
        }
    }
</script>