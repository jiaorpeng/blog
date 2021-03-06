$(function(){
	$('#username').focus().blur(checkName);
	$('#password').blur(checkPassword);
});

function checkName(){
	var name = $('#username').val();
	if(name == null || name == ""){
		//提示错误
		$('#count-msg').html("用户名不能为空");
		return false;
	}
	var reg = /^\w{5,20}$/;
	if(!reg.test(name)){
		$('#count-msg').html("输入5-20个字母或数字或下划线");
		return false;
	}
	$('#count-msg').empty();
	return true;
}

function checkPassword(){
	var password = $('#password').val();
	if(password == null || password == ""){
		//提示错误
		$('#password-msg').html("密码不能为空");
		return false;
	}
	var reg = /^\w{5,20}$/;
	if(!reg.test(password)){
		$('#password-msg').html("输入5-20位的密码");
		return false;
	}
	$('#password-msg').empty();
	return true;
}