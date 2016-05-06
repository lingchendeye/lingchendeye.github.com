$(function () {
	//轮播图初始化方法
	var bullets = document.getElementById('position').getElementsByTagName('li');
	var swipe = Swipe(document.getElementById('swipe-container'),{
		auto: 2000,//可选选项，自动滑动
		continuous: true,
		disableScroll: false,
		callback: function(index, elem) {
			var i = bullets.length;
			while (i--) {
				bullets[i].className = ' ';
			}
			bullets[index].className = 'cur';
		}
	});
});

//在输入框中添加删除的图标
$(".js-add-del input").focus(function(){
	$(this).next().addClass("customer-del-img");
}).blur(function(){
	$(this).next().removeClass("customer-del-img");
});

//点击删除的图标，清除文本框的内容
$(".js-del").click(function(){
	console.log("click");
	$(this).prev().val('');
	$(this).prev().focus();
});

//校验码
// // $(".js-tel").blur(function(){
// 	if(($(".js-tel").val()!=null)&&($(".js-tel").val().length==11))
// 	{
// 		$(".js-identify").css("display","block");		
// 	}
// 	else
// 	{
// 		$(".js-identify").css("display","none");
// 	}
// // });

