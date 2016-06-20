//var  filmName;
var i=0;
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
      jQuery.get('http://andruxa.tk/films_db_response.php?q=' + $(this).val(), function (response) {
        // use response here; jQuery passes it as the first parameter
          //console.log( "success", JSON.parse(response));
          parsedResponse = JSON.parse(response);
          $('#txtHint').html(parsedResponse.film_name);
          //console.log(parsedResponse.film_name);
         
          return parsedResponse;
          
        
      });
      //console.log('parsedResponse',parsedResponse);
       
    }
  })
  $('#search').on('click', function() {
      $('#result').empty();
      var info=[];
      var html=$('#template').html();
      //console.log('parsedResponse',parsedResponse);
      info.push(parsedResponse);
      //console.log('info',info);
      content = tmpl(html, {
          data: info

        });
      console.log('content', content);
      $('#result').append(content);
      console.log(i++);
   

    });
   
          

};



//----------------------------------------------------- 
	
})(jQuery);