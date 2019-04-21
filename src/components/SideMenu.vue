<template>
	<div>
		<div class="menuTop">
            <img src="../assets/logo.png" alt="LOGO">
			<span>Administration</span>
        </div>
		<div class="menu">
			<ul>
				<li><div>福瑞部落格</div>
					<ul>
						<li><div @click="isShow=!isShow, selectMenu()" :class="{active:isShow}">相册</div></li>
						<li><div @click="isShow=!isShow, selectMenu()" :class="{active:isShow}">博文</div></li>
					</ul>
				</li>
				<li><div>福瑞的家</div>
					<ul>
						<li><div>福瑞</div></li>
						<li><div>福吉</div></li>
						<li><div>福临</div></li>
						<li><div>福尔康</div></li>
						<li><div>福尔泰</div></li>
					</ul>
				</li>
				<li><div>福家种族分类</div>
					<ul>
						<li><div>橘猫</div></li>
						<li><div>银渐层</div></li>
						<li><div>金渐层</div></li>
					</ul>
				</li>
			</ul>
		</div>
  	</div>
</template>

<script>
export default {
	data(){
		return{
			isShow: false
		}
	},
	methods:{
		selectMenu(){
			console.log(this.isShow);
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
.menu ul>li:hover>ul>li>div{
	display: block;
}
.menu ul>li>ul>li>div{
	background: #b7f5da;
	display: none;
}
.active{
	background: red !important;
}
</style>


