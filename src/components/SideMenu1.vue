<template><!--使用递归的方法实现导航栏-->
	<div>
		<div class="menuTop">
            <img src="../assets/logo.png" alt="LOGO">
			<span>Administration</span>
        </div>
		<div class="menu">
			<listRecursive :menudata="menulist"></listRecursive>
		</div>
  	</div>
</template>

<script>
import listRecursive from '@/components/listRecursive'
import {MenuList} from '@/components/SideMenuList1'
export default {
    components:{
        listRecursive
    },
	data(){
		return{
			menulist: MenuList,
		}
	},
	methods:{
	
	}
}
</script>


<style>
.menuTop{
	margin: 15px;
	height: 50px;
	color: white;
	font-size: 1.2em;
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
/* .menu div{
	height: 40px;
	line-height: 40px;
  border-bottom: 2px solid white;
	padding-left: 15px;
}
.menu div:hover{
	background: #80BEAF;
	color: white;
} */
.slidedownIcon{
	float: right;
	margin-right: 15px; 
}
.notActive{
	background: #b7f5da;
}
a{
	text-decoration: none;
	color: #3e5266;
}	
.active{
	background: #80BEAF;
}
</style>


