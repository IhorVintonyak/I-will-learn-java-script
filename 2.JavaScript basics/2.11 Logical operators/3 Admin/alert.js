let name= prompt("Кто там?","");

if (name=="Админ"){
	let password= prompt("Пароль?","");
	if (password=="Я Главный"){
		alert("Здравствуйте!");
	}
	else{
		alert("Неверный пароль");
	}
} else{
	alert("Я вас не знаю");
}
