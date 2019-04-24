<template>
    <div>
        <ul v-for="(item, index) in menudata" :key="index">
            <li v-if="!item.children">
                <router-link :to="item.url">
                    <div class="submenu">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="item.icon"></use>
                        </svg>
                        {{item.name}}
                    </div>
                </router-link>
            </li>
            <li v-else>
                <div class="submenu" @click="isToggle(item.name)">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="item.icon"></use>
                    </svg>
                    {{item.name}}
                    <i :class="item.name === toggleName?'icon-up-circle':'icon-down-circle'" class="iconfont slidedownIcon"></i>
                </div>
                <listRecursive v-show="item.name === toggleName" :menudata="item.children"></listRecursive>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['menudata'],
    name: 'listRecursive',
    data(){
		return{
            currentURL:'/home',//当前显示的url
            toggleName: '',  // 菜单子项目名称
            defaultActive:true,
            isShow: false,
		}
    },
    methods:{
        isToggle(name){
            name!=this.toggleName ? this.toggleName=name : this.toggleName=''; 
        }
    }
}
</script>

<style scoped>
.submenu{
    height: 40px;
	line-height: 40px;
    border-bottom: 2px solid white;
	padding-left: 15px;
}
.submenu :hover{
	background: #80BEAF;
	color: white;
} 
.icon{
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.icon:hover {
  font-size: 24px;
}
</style>


