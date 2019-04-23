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
							<router-link :to="item.url">
								<div>
									<svg class="icon" aria-hidden="true">
										<use :xlink:href="item.icon"></use>
									</svg>
									{{item.name}}
								</div>
							</router-link>
						</template>
						<template v-else-if="item.children"><!--两级目录-->
							<div @click="isToggle(item.name)">
								<svg class="icon" arial-hidden="true">
									<use :xlink:href="item.icon"></use>
								</svg>
								{{item.name}}
								<i :class="item.name === toggleName?'icon-up-circle':'icon-down-circle'" class="iconfont slidedownIcon"></i>
							</div>
							<transition name="sliderToggle" mode="out-in">
								<ul v-show="item.name === toggleName" id="submenu">
									<template v-for="(subitem, subindex) in item.children">
										<li :class="currentURL===subitem.url ?'active': 'notActive'" :key="subindex">
											<router-link :to="subitem.url">
												<div>
													<svg class="icon" arial-hidden="true">
														<use :xlink:href="subitem.icon"></use>
													</svg>
													{{subitem.name}}
												</div>
											</router-link>
										</li>
									</template>
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
            currentURL:'/home',//当前显示的url
            toggleName: '',  // 菜单子项目名称
            defaultActive:true,
		}
	},
	mounted(){
		this.currentURL = sessionStorage.getItem('currentURL');
		console.log(this.currentURL);
		this.toggleName = sessionStorage.getItem('toggleName');
	},
	watch:{
		'$route'(){
			this.currentURL = this.$route.fullPath;
			sessionStorage.setItem('currentURL', this.currentURL);
			console.log(this.currentURL);
		}	
	},
	methods:{
		isToggle(name){
			name!=this.toggleName ? this.toggleName=name : this.toggleName=''; 
			sessionStorage.setItem('toggleName', this.toggleName);
			//unkownHeight slide down
			// var submenu = document.getElementById("submenu");
			// submenu.style.height = 'auto';
			// let height= window.getComputedStyle(submenu, null)['height'];
			// submenu.style.height = '0';
			// setTimeout(function () {
      //       submenu.style.height = height;
      //       // el.style.paddingTop = paddingTop;
      //       submenu.style.opacity = 1;
      //     }, 3000);
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
.sliderToggle-enter-active,
.sliderToggle-leave-active {
  transition: all 0.3s linear;
  height: 100%;
  height: auto;
  overflow: hidden;
}
.sliderToggle-enter,
.sliderToggle-leave-to {
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 0;
  height: 0;
  opacity: 0;
}
.icon {
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


