<template>
    <div>
        <video src="@/assets/videos/What a Pikachu World.mp4" width='890px' height='500px' controls muted autoplay></video>
        <button @click="showPopOver=!showPopOver">点击弹出框</button>
        <popover :showPopOver="showPopOver" @on-close="closePopOver">
            <div slot="title">Bonjour</div>
        </popover>
    </div>
</template>

<script>
import popover from '@/components/PopOver'
export default {
    components:{
        popover,
    },
    data(){
        return{
            showPopOver: false,
        }
    },
    methods:{
        closePopOver(){
            this.showPopOver=false;
        }
    }
}
</script>

<style scoped>
video {
    border: 2px solid #EF9C6C;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>

