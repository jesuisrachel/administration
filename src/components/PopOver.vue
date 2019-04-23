<template>
<div class="shadow" v-show="showPopOver">
    <div class="size">
        <slot name="title">弹出框标题</slot>
        <div>
            <button @click="$emit('on-close')">确认</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:{
        showPopOver:{
            type: Boolean,
            default: false,
            required: true
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.shadow{
    background: rgba(0,0,0, 0.8);
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.size{
    width: 890px;
    height: 500px;
    border: 5px solid red;
    background: red;
    position: absolute;
    z-index: 999;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>

