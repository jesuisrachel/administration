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
import SideMenu from '@/components/SideMenu' 
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
    position: fixed;
    left: 0;
}
.Right{
    width: 85%;
    height: 100%;
    float: right;
}
.Top{
    width: 100%;
    background: #EF9C6C;
    height: 5%;
    position: fixed;
    top: 0;
}
.Content{
    width: 100%;
    background: #D1DCE2;
    min-height: 90%;
}
.Bottom{
    width: 100%;
    background: #EF9C6C;
    height: 5%;
    position: fixed;
    bottom: 0;
}
</style>


