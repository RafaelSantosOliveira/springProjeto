const showModalDeletar = function(id){
	$('#modalDeletar').modal('show')
	$('#id_deletar').val(id)
}

const deletar = function(path){
	let id = $('#id_deletar').val()
	
	if(id !== 0) {
		window.location.href = '/' + path + '/delete/' + id	
	}
	
}

const editar = function(path){
	let id = $(path.id);

	document.location.href = '/' + path + '/edit' + id
}

