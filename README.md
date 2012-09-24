c-bootstrap-createmodal
=======================

Bootstrap Addon for using twitter bootstrap javascript for helping to create modal thought js class, html less and addition custom parameter.

		Parameter :
			Override bootstrap parameter : 
				backdrop(bool): (optional) Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click. default: true
				keyboard(bool): (optional) Closes the modal when escape key is pressed, default: true
				remote(string): (optional) path or url of content, default: false 
			Additional parameter: 
				id(string): id of modal
				modalwidth(integer): (optional)modal's width, must be > 220, default 560
				header(string): String of modal's header
				content(bool or string): (optional)String of contents, Its can be HTML Tag
				btn[{id(string), classname(string), txt(string)},...]: (optional) Object of buttons, its has properties: id(id of button), classname(additional class of button except 'btn', txt(Label of button))
				closebtntxt(string): (optional)Label of close button, default: 'Close'
				Example: 
		$('#logout-btn').createModal({
			id : '#logout-comfirmation-modal',
			header : 'Logout Confirmation',
			modalwidth: 600,
			content : 'Thank you for your hard work, Do you want to logout?',
			btn : [{ 
				id : 'ok',
				classname : 'btn-inveres',
				txt : 'Im sure'}
			]
		});

PS. Its not reqiure to create html tag for modal, Use this addon function only.
		
