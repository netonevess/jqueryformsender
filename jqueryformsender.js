function formtoajax(target,onsuccess){
	target.on('submit',function(event){
		event.preventDefault();
		var url = target.attr("action");
		var params = target.serialize();

		if($(this).attr('method') === 'post'){
			if($(this).attr('enctype') === 'multipart/form-data'){
				var form = $(this)[0];
                // crie um FormData {Object}
                var data = new FormData(form);
				$.ajax({
					type: "POST",
                    enctype: 'multipart/form-data',
                    url: url,
                    data: data,
                    processData: false, // impedir que o jQuery tranforma a "data" em querystring
                    contentType: false, // desabilitar o cabeçalho "Content-Type"
                    cache: false, // desabilitar o "cache"
                    timeout: 600000, // definir um tempo limite (opcional)
                    // manipular o sucesso da requisição
                    success: onsuccess,
                    // manipular erros da requisição
                    error: onsuccess
				});
			}else{
				$.post(url, params, onsuccess);
			}
		}
		if($(this).attr('method') === 'get'){
			$.get(url, params, onsuccess);
		}
	});
}