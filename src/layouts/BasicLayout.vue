<template>
    <div>
        <div class="Left">
            <SideMenu/>
        </div>
        <div class="Right">
            <div class="Top">
                <GlobalHeader/>
            </div>
            <div class="Content">
                <router-view/>
            </div>
            <div class="Bottom">
                <GlobalFooter/>
            </div>
        </div>
    </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader' 
import SideMenu from '@/components/SideMenu1' 
import GlobalFooter from '@/components/GlobalFooter' 
export default {
  components: {
      GlobalHeader,
      SideMenu,
      GlobalFooter
  }
}
</script>

<style scoped>
.Left{
    background: #B3DDD1;
    width: 15%;
    height: 100%;
    position: absolute;
    left: 0;
}
/* .Right{
    width: 85%;
    height: 100%;
} */
.Top, .Bottom{
    background: #EF9C6C;
    height: 5%;
    position: absolute;
    right: 0;
    left: 15%;
}
.Top{
    top: 0;
}
.Content{
    background: #D1DCE2;
    position: absolute;
    overflow: auto;
    right: 0;
    left: 15%;
    top: 5%;
    bottom: 5%;
}
.Bottom{
    bottom: 0;
}
</style>


