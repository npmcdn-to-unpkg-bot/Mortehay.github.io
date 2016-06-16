//var  filmName;

//links to external database




$( document ).ready(function(){

 $('#text').helper();
 
});	
	
	
 
//----------------------------------------------------


//jquery plugins--------------------------------------
(function($){
//checker-----------------------------------------------
$.fn.helper = function(){
  
  var parsedResponse;
  this.on({
    keypress: function(){
      jQuery.get('http://localhost/test12/php/films_db_response.php?q=' + $(this).val(), function (response) {
        // use response here; jQuery passes it as the first parameter
          //console.log( "success", JSON.parse(response));
          parsedResponse = JSON.parse(response);
          $('#txtHint').html(parsedResponse.film_name);
          console.log(parsedResponse.film_name);
          $('#search').on('click', function() {
            var info=[];
            var html=$('#template').html();
            //console.log('parsedResponse',parsedResponse);
            info.push(parsedResponse);
            //console.log('info',info);
            var content = tmpl(html, {
            data: info
          });
          console.log('content', content);
          $('#template').append(content);

          });
           
        
      });
    }
  })
  
};



//----------------------------------------------------- 
	
})(jQuery);