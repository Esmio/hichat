document.getElementById('loginBtn').addEventListener('click', function() {
	var nickName = document.getElementById('nicknameInput').value;
	if(nickName.trim().length != 0 ) {
		that.socket.emit('login', nickName);
	} else {
		document.getElementById('nicknameInput').focus();
	}
}, false);

this.socket.on('nickExisted', function() {
	document.getElementById('info').textContent = "nickname is taken, choose another pls!"
})

this.socket.on('loginSuccess', function() {
     document.title = 'hichat | ' + document.getElementById('nicknameInput').value;
     document.getElementById('loginWrapper').style.display = 'none';//隐藏遮罩层显聊天界面
     document.getElementById('messageInput').focus();//让消息输入框获得焦点
 });