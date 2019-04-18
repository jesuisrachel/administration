<template>
	<div>
		<div class="menuTop">
            <img src="../assets/logo.png" alt="LOGO">
			<span>Administration</span>
        </div>
		<div class="menu">
			<ul>
                <template v-for="(item, index) in menulist">
                    <li :class="currentURL===item.url ?'active': ''" :key="index">
                        <template v-if="item.url"><!--单级目录-->
                            <div>{{item.name}}</div>
                        </template>
                        <template v-else-if="item.children"><!--两级目录-->
                            <div @click="isToggle(item.name)">{{item.name}}</div>
                            <transition name="sliderToggle" mode="out-in" :style="{'transform':'translateY('+subMenuHeight+'%)'}">
                                <ul v-show="item.name === toggleName" >
                                    <li v-for="(subitem, subindex) in item.children" :key="subindex">
                                        <div>{{subitem.name}}</div>
                                    </li>
                                </ul>
                            </transition>
                        </template>
                    </li>
                </template>
			</ul>
		</div>
  	</div>
</template>

<script>
import {MenuList} from './SideMenuList'
export default {
	data(){
		return{
            menulist: MenuList,//目录数据
            currentURL:'',//当前显示的url
            toggleName: '',  // 菜单子项目名称
            defaultActive:true,
            subMenuHeight:0,
		}
	},
	methods:{
		isToggle(name){
            //name!=this.toggleName ? this.toggleName=name : this.toggleName='';
            if(name!=this.toggleName){
                this.toggleName=name;
                this.subMenuHeight=100;
            }else{
                this.toggleName='';
                this.subMenuHeight=0;
            }
        }
	}
}
</script>


<style scoped>
.menuTop{
	margin: 15px;
	height: 50px;
	color: white;
	font-size: 28px;
	font-weight: bolder;
}
.menuTop img{
	width: 50px;
	height: 50px;
	vertical-align:middle;
}
.menu span{
	height: 50px;
	vertical-align: middle;
	line-height: 50px;
}
.menu{
	margin: 15px 0;
	text-align: left;
}
.menu ul{
	list-style: none;
	margin: 0;
	padding: 0;
	font-weight: bolder;
	color: #3e5266;
	width: 100%;
}
.menu div{
	height: 40px;
	line-height: 40px;
    border-bottom: 2px solid white;
	padding-left: 15px;
}
.menu div:hover{
	background: #80BEAF;
	color: white;
}
.menu ul>li>ul>li>div{
	background: #b7f5da;
}
.sliderToggle-enter-active,
.sliderToggle-leave-active {
  transition: all 1s linear;
  transform: translateY(100%);
  overflow: hidden;
}
.sliderToggle-enter,
.sliderToggle-leave-to {
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 0;
  height: 0;
  /* opacity: 0; */
}
</style>


