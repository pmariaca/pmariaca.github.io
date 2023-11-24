$(document).ready(function () {
   var url = $(location).attr('href');
   var pag = url.split('=');
   if(pag.length==2){
      pag = pag[1].split('#');
      cargaPag(pag[0]);
   }else{
      cargaPag(0)
   }


   // $("#home").on('click', function () { 
   //    $('#inicio')[0].click();//.trigger('click'); 
   // });


   $.get("pages/indice.html").done(function (data) {
      var arr = data.split("\n");
      var lineCount = arr.length;
      for (var i = lineCount; i >= 0; i--) {
         var r = $(arr[i]);
         if (r.length > 0) {
            var fecha = r[0].innerHTML;
            var titulo = r[1].innerHTML;
            var etiqueta = "&nbsp;\n" + r[2].innerHTML;
            var etiqueta = r[2].innerHTML;
            //lista = '<li><button id="pag_' + fecha + '" class="btn btn-link" onclick="cargaPag(' + fecha + ');">' + titulo + '</button></li>';
            //lista = '<li><a id="pag_' + fecha + '" class="btn btn-link" data-bs-toggle="tooltip" data-bs-placement="left" href="?p=' + fecha + '" title="' + etiqueta+ '">' + titulo + '</a></li>';
            lista = '<li><a id="pag_' + fecha + '" class="btn btn-link"  href="?p=' + fecha + '">' + titulo + '</a></li>';
            $("#showList").append(lista);
         }
      }
      //-------------------------------------------
      $("[name='sub']").each(function (i,v){
         var id = $(v).attr('href').split('#')[1];
         $('#'+id).text($(v).text());
         document.getElementById(id).classList.add('subcontent');
         //$('#'+id).addClass('subcontent').text($(v).text());
         // porque a contentillo el css ?
         //console.log(' --->>>>> CARGANDO ',id)
      });
   }).fail(function () { });
});
/** ====================================================== **/


function cargaPag(n) {
   if (n == 0) {
      $("#showCurri").load("pages/pagcurri.html");
      $("#showContent").load("pages/home.html");
   } else {
      $("#showCurri").empty();
      $("#showContent").load("blog/pag_" + n + ".html");
   }
}
