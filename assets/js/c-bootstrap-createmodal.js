/* ============================================================
 * Create by yuthno
 * 21/09/2012
 * Modal html code creater and initialize bootstrap modal
 * How to use:
		$('#logout-btn').createModal({   Object
			id : '#logout-comfirmation-modal',
			backdrop: true,
			keyboard: true,
			header : 'Logout Confirmation',
			content : 'Thank you for your hard work, Do you want to logout?',
			remote : false,  remote for bootstrap modal, false: use content for show, url text for remote url
			btn : [{  //add button for footer, Close button alreasy has
				id : 'OK',
				classname : 'btn-inveres',
				txt : 'Im sure'}
			],
			closebtntxt: 'Cancel'  //default : Close
			
		});
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* CREATEMODAL PUBLIC CLASS DEFINITION
  * ============================== */

  var CreateModal = function (element, options) {
    this.element = element;
    this.options = options;
	this.init();
  }
  
  /*
	bootstrap argument: backdrop(bool), keyboard(bool), remote(bool or string of path)
	custom argument: id(string), header(string), content(bool or string), btn[{id(string), classname(string), txt(string)},...], closebtntxt(string)
  
  */
  
  
  CreateModal.prototype = {
	constructor: CreateModal,
	
	init: function () {
	
		var html = 	'<div id="'+this.options.id+'" class="modal hide fade">';
		html +=	'<div class="modal-header">';
		html +=	'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
		html += '<h3>'+this.options.header+'</h3>';
		html +=	'</div>';
		html +=	'<div class="modal-body">';
		html +=	(typeof this.options.content == 'string')? this.options.content : '';  //if html string show content else false use remote url
		html +=	'</div>';
		html +=	'<div class="modal-footer">';
		$.each(this.options.btn, function(index, btn){
			html += '<a href="#" id="'+btn.id+'" class=" btn ' +btn.classname+'">'+btn.txt+'</a>';
		});
		html +=	'<a data-dismiss="modal" aria-hidden="true" href="#" class="btn">';
		html += (this.options.closebtntxt)?this.options.closebtntxt:'Close'+'</a>';
		html +=	'</div>';
		html +=	'</div>';
		
		
		
		var modalOptions = {
			backdrop: (this.options.backdrop)?this.options.backdrop:true,
			keyboard: (this.options.keyboard)?this.options.keyboard:true,
			show : true,
			//remote : (this.options.remote)?this.options.remote:false //this no working from bootstrap modal
		};
		
		var th = this;
		this.element.click(function(){
			
			$("'" + html + "'").insertAfter('body');
			$('#' + th.options.id).modal(modalOptions);
			
			if(th.options.remote){
				$('#' + th.options.id + ' .modal-body').load(th.options.remote);
			}
			
			if(th.options.modalwidth != undefined){
				//calculate for center of modal
				//width+24 => left-1  start with width = 220, left = 65 
				var left = 65-((th.options.modalwidth - 220)/24);
				$('#' + th.options.id).css('width', th.options.modalwidth+'px');
				$('#' + th.options.id).css('left', left+'%');
			}
			
			/* remove div of modal after hidden */
			$('#' + th.options.id).on('hidden', function () {
				// remove element
				$(this).remove();
			});
		});
	
		
	}

  
  }


 /* CREATEMODAL PLUGIN DEFINITION
  * ======================== */

  $.fn.createmodal = function (options) {
    return this.each(function () {
      var $this = $(this) 
        , data = $this.data('createmodal')
      if (!data) $this.data('createmodal', (data = new CreateModal($this, options)))
    })
  }

  $.fn.createmodal.Constructor = CreateModal



}(window.jQuery);