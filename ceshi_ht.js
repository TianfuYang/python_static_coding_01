var id_num = 4;

function bigImg(x) {
	//console.log(window.location.pathname)
	//console.log(window.location.href,x)
	//console.log('显示小程序码提示文字')
	var tag_tishi = document.getElementById(x.id + "_txt");
	// tag_tishi.innerHTML = "~>~点击小程序码<br>可以增加代码行~>~";
	// tag_tishi.parentNode.style.background = "#ff60ea";
	document.getElementById("name_tishi").innerHTML ="编程遇到问题，欢迎B站私信浪老师"
	document.getElementById("name_tishi").setAttribute('style','color:goldyellow')
}

function bigImg_out(x) {
	//console.log(window.location.pathname)
	//console.log(window.location.href)
	//console.log('显示小程序码提示文字')
	confirm("长按识别下方小程序码即可前往练习哦");
	// alert("长按识别下方小程序码即可前往练习哦")
	document.getElementById("name_tishi").innerHTML ="微信内长按识别进入练习"
	document.getElementById("name_tishi").setAttribute('style','color:red')
}
function bigImg_out2(x) {
	//console.log(window.location.pathname)
	//console.log(window.location.href)
	//console.log('显示小程序码提示文字')
	// alert("长按识别下方小程序码即可前往练习哦")
	var say_hi=["~很高兴见到你哦~","~要不点击代码框前的文字看一下？~","点击右上角的导航键可以私信哦","~浪老师会再直播吗~","--欢迎大家提出宝贵建议--","~每天的夕阳也会有变化呢~","分享代码给朋友秀一下吧","~遇到问题不要慌~","~优雅、简洁、明确~","~踩着bug的肩膀成长~","~你好棒呀~","~要不去B站看看浪老师？","~一定要坚持哦~","~你想知道我有多少变化吗~","^_^"]
	var index = Math.floor(Math.random()*(say_hi.length))
	//console.log(say_hi.length,index)
	document.getElementById("name_tishi").innerHTML =say_hi[index]
	document.getElementById("name_tishi").setAttribute('style','color:#e12567')
}

function tishi(x) {
	//console.log('修改删除提示颜色',x)
	var tag_tishi = document.getElementById(x.id);
	tag_tishi.style.color = "red";
}

function tishi_del(x) {
	//console.log('恢复删除按钮颜色',x)
	var tag_tishi = document.getElementById(x.id);
	if (x.id == "ti_shi_1") {
		tag_tishi.style.color = "#084804b8";
	} else {
		tag_tishi.style.color = " #a52a2ab8";
	}
}
var python_lib_names_str = ""
function check_libs() {
	var cur_url = decodeURI(window.location.href)
	//console.log("indexOf('?')--", cur_url.indexOf("?"))
	//console.log("indexOf('&')--", cur_url.indexOf("&"))
	//console.log("last_indexOf('&')--", cur_url.lastIndexOf("&"))
	if (cur_url.indexOf("&") != -1) {
	//console.log('传送内容',cur_url.slice(cur_url.indexOf("&")+1,cur_url.lastIndexOf("&")))
	document.getElementById(3).getElementsByClassName("cm-content")[0].innerText=cur_url.slice(cur_url.indexOf("&")+1,cur_url.lastIndexOf("&"))	}
	// 如果url里没有参数 那什么库也不加载
	all_lib_url = cur_url.slice(cur_url.indexOf("?")+1,end_str)
	if (cur_url.indexOf("?") != -1 && cur_url.indexOf("?#_#") == -1 ) {
		document.getElementById("name_tishi").innerHTML ="将该分享页面的网址发给朋友，朋友也能看到相同代码哦"
		document.getElementById(1).getElementsByClassName("cm-content")[0].innerText ="print('hello,这是分享的代码哦~') # 点击右侧即可运行"
		var end_str = cur_url.indexOf("&") == -1 ?cur_url.length:cur_url.indexOf("&")
		var python_lib_k = cur_url.slice(cur_url.indexOf("?")+1,end_str)

		var python_libs = python_lib_k.split("=")[1].split("+")
		var lib_num = python_libs.length
		//console.log('带参数过来的', python_lib_k, python_libs, lib_num)
		if (lib_num > 0) {
			var lib_str = ''
			var lib_str_full='# 导入需要的python库'
			var tag = document.getElementById("python_lib")
			for (var i = 0; i < lib_num; i++) {
				var lib_str = lib_str + "- " + python_libs[i] + "\n"
				var lib_str_full =lib_str_full+"\n"+"import "+python_libs[i]
				python_lib_names_str = python_lib_names_str + python_libs[i]+(i==lib_num-1?"":"+")
			}
			var tag_py = '<py-env id="python_lib2">' + lib_str + '</py-env>'
			tag.innerHTML = tag_py
			document.getElementById("li_id_2").innerHTML ='<py-repl>'+lib_str_full+'</py-repl>';
			
			//console.log('这是lib_str', lib_str)
		} else {
			//console.log("空跳过来了")
		}
	} else {
		//console.log("无参进来的")
	}
}

function myFunction() {
	
	document.getElementById("div_input").style.display ="block"
}
function cancel_myFunction() {
	
	document.getElementById("div_input").style.display ="none"
}

function load_new_lib(x) {
	//console.log(x)
	var lib_names= document.getElementsByName("input_lib_names")[0].value.replace(/\s+/g,"");
	//console.log(lib_names)
	// var txt;
	var cur_url = window.location.hostname.length>1?window.location.pathname:window.location.href.split("?")[0]
	// var lib_names = prompt("请输入您需要的第三方python库的名字,不同的库用+号连接 例如：", "numpy+matplotlib");
	if (lib_names == null || lib_names == "") {
		//console.log("用户取消输入")
		alert("您没有输入哦")
		document.getElementById("div_input").style.display ="none"
	} else {
		txt = "你输入的是，" + lib_names + "!";
		var key_name = python_lib_names_str.length>0?python_lib_names_str+"+"+lib_names:lib_names
		//document.getElementById("demo").innerHTML = txt;
		//console.log("要跳转的地址是：" + cur_url + '?key=' + key_name)
		document.getElementById("div_input").style.display ="none"
		window.open(cur_url + '?key=' + key_name, '_blank')
	}

}

var div_click_num = 0;
var sum_show_num = 0
function show_menu(x){
	var x = x;
	//console.log('show_menu:===',x,div_click_num,sum_show_num)
	//console.log(document.getElementById("div_id_" + x).style.display =="flex")
	bool_div = document.getElementById("div_id_" + x).style.display =="flex"
	if (bool_div == false){
		document.getElementById("div_id_" + x).style.display ="flex"
		sum_show_num= sum_show_num+1
		if(sum_show_num >1){
			//console.log('进来了 ！=0')
			try {
			document.getElementById("div_id_" + div_click_num).style.display ="none"
			sum_show_num= sum_show_num-1
			}catch{
				//console.log('报错2：',x,div_click_num,sum_show_num)
			}
		}
		
	}else{
		document.getElementById("div_id_" + x).style.display ="none"
		sum_show_num= sum_show_num-1
	}
	div_click_num = x
	//console.log('sum_show_num):::',sum_show_num)
}

// 清除当前代码编辑框内的代码
function clean_code(x) {
	//console.log(444,x)
	var r = confirm("你要清除代码框 " + x + " 内的文本吗？");
	if (r == true) {
		//console.log("您按了确认！",x);
		var tag = document.createElement('py-repl');
		var tag_clearn = document.getElementById("li_id_" + x);
		document.getElementById("div_id_" + x).style.display ="none"
		sum_show_num= sum_show_num-1
		// 重置内容
		tag_clearn.innerHTML = '<py-repl></py-repl>'
	} else {
		alert("您按了取消！")
	}
}

// 删除当前代码编辑框
function remove_code(x) {
	//console.log("删除代码框 id=",x)
	var r = confirm("该操做会删除代码框 " + x + " ，确定删除吗？");
	if (r == true) {
		//console.log("您按了确认！",x);
		var tag_remove = document.getElementById(x);
		document.getElementById("div_id_" + x).style.display ="none"
		sum_show_num= sum_show_num-1
		// 移除内容 parent.removeChild(child);
		tag_remove.remove()
		
	} else {
		alert("您按了取消！")
	}

}

// 创建新的代码编辑框	
function c_img(x) {
	//console.log("用户点击了小程序码，创建新的代码框")
	// 创建新标签 document.createElement('标签名')
	var tag = document.createElement('ul');
	tag.setAttribute('id', id_num)
	document.getElementById("name_tishi").innerHTML ="微信长按可识别哦"
	document.getElementById("name_tishi").setAttribute('style','color:green')
	// 给新标签增加内容
	tag.innerHTML = '<div style="display: none;justify-content: space-around;margin-top: 20px;" id="div_id_'+id_num+'"><button class="button button2" onclick="clean_code('+id_num+')">清除</button><button class="button button1" onclick="remove_code('+id_num+')">删除</button><button class="button button3" onclick="insert_code('+id_num+')">插入一行</button><button class="button button4" onclick="copy_code('+id_num+')">分享</button><button class="button button5" onclick="show_menu('+id_num+')">关闭</button></div><button onclick="show_menu('+id_num+')" draggable="true" ondragend="remove_code('+id_num+')" id="ti_shi_'+id_num+'" onmouseover="tishi(this)" onmouseout="tishi_del(this)" style="float: left;color: #a52a2ab8;font-size: 0.8rem;margin-top: 0.3rem;">代码-'+id_num+'> </button><li id="li_id_'+id_num+'"><py-repl></li>'
	
	//给新标签增加内容  
	// tag.innerHTML = '<button id=ti_shi_' + id_num + ' draggable="true" ondragend="remove_code(' + id_num +
	// 	')" onmouseover="tishi(this)"  onmouseout ="tishi_del(this)"   onclick="clean_code(' + id_num +
	// 	')" style="float: left;color: #a52a2ab8;font-size: 0.8rem;margin-top: 0.3rem;">代码-' + id_num +
	// 	'> </button><li id =li_id_' + id_num + '><py-repl></li>'
	// 获取标签
	var tag2 = document.getElementById('daimakuang');
	// ID 计数 加1
	id_num = this.id_num + 1
	// 增加属性
	// tag.setAttribute('class','one')
	// 追加标签  
	//把tag追加到tag2标签内部底部
	tag2.appendChild(tag)
	
}

function copy_code(id) {
	
	var code_txt =  encodeURI(document.getElementById(id).getElementsByClassName("cm-content")[0].innerText)
	// console.log('分享字符长度：',code_txt.length,code_txt.replace(/\s+|%0A+/g,""),code_txt,code_txt.replace(/\s+|%0A+/g,"").length)
	if(code_txt.replace(/\s+|%0A+/g,"").length>0){
	var cur_url = window.location.hostname.length>1?window.location.pathname:window.location.href.split("?")[0]

	// var cur_url = window.location.href
	//console.log('已经复制好了,准备跳转',code_txt)
	document.getElementById("div_id_" + id).style.display ="none"
	sum_show_num= sum_show_num-1
	var key_name = python_lib_names_str.length>0?'?key='+python_lib_names_str:"?#_#"
	//console.log('跳转链接',cur_url+ key_name+'&'+code_txt)
	
	window.open(cur_url+key_name+'&'+code_txt+'&_', '_blank')
	// if (navigator && navigator.clipboard && navigator.clipboard.writeText)
	//     return navigator.clipboard.writeText(code_txt);
	//   return Promise.reject('The Clipboard API is not available.');
	}else{
		alert("要分享的代码框 "+id+" 是空的!")
	}
}
function insert_code(id){
	var node=document.getElementById(id);
	var tag = document.createElement('ul');
	tag.setAttribute('id', id_num)
	// 给新标签增加内容
	tag.innerHTML = '<div style="display: none;justify-content: space-around;margin-top: 20px;" id="div_id_'+id_num+'"><button class="button button2" onclick="clean_code('+id_num+')">清除</button><button class="button button1" onclick="remove_code('+id_num+')">删除</button><button class="button button3" onclick="insert_code('+id_num+')">插入一行</button><button class="button button4" onclick="copy_code('+id_num+')">分享</button><button class="button button5" onclick="show_menu('+id_num+')">关闭</button></div><button onclick="show_menu('+id_num+')" draggable="true" ondragend="remove_code('+id_num+')" id="ti_shi_'+id_num+'" onmouseover="tishi(this)" onmouseout="tishi_del(this)" style="float: left;color: #a52a2ab8;font-size: 0.8rem;margin-top: 0.3rem;">代码-'+id_num+'> </button><li id="li_id_'+id_num+'"><py-repl></li>'
	node.parentNode.insertBefore(tag,node.nextElementSibling);
	id_num = this.id_num + 1
	document.getElementById("div_id_" + id).style.display ="none"
	sum_show_num= sum_show_num-1
	}
	
function zhuanfa(){
	var html_zhuan = document.body
	//console.log(html_zhuan)
	
}