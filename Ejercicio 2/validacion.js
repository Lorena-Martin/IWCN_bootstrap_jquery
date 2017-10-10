$(document).ready(function(){
	var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	$(".boton").click(function(){
		$(".error").remove();
		var d = new Date();
		if($(".nombre").val() != "" && $(".correo").val() != "" && (emailreg.test($(".correo").val())) && $(".lista").val() != "Seleccione el correo" && $(".asunto").val() != "" && $(".mensaje").val() != ""){
            alert("El mensaje se ha enviado correctamente a "+$(".lista").val()+" el día "+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+" a las "+d.getHours()+":"+d.getMinutes());
			return false;
		}
		if($(".nombre").val() == ""){
			$(".nombre").focus().after("<span class='error'>Ingrese su nombre</span>");
			return false;
		}else if($(".correo").val() == "" || !(emailreg.test($(".correo").val()))){
				$(".correo").focus().after("<span class='error'>Ingrese su correo electrónico</span>");
				return false;
		}else if($(".lista").val() == "Seleccione el correo"){
			$(".lista").focus().after("<span class='error'>Seleccione el correo electrónico</span>");
			return false;
		}else if ($(".asunto").val() == ""){
			$(".asunto").focus().after("<span class='error'>Ingrese el asunto</span>");
			return false;
		}else if($(".mensaje").val() == ""){
			$(".mensaje").focus().after("<span class='error'>Ingrese el mensaje</span>");
			return false;
		}
	});
	$(".nombre, .asunto, .mensaje").keyup(function(){
		if($(this).val() != ""){
			$(".error").fadeOut();
			return false;
		}
	});
	$(".correo").keyup(function(){
		if ($(this).val() != "" && emailreg.test($(this).val())){
			$(".error").fadeOut();
			return false;
		}
	});
});