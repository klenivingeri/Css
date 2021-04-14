window.onscroll = function(){
   var top = window.pageYOffset || document.documentElement.scrollTop
       console.log(top);
       if(top >= 30){
          let fixa = document.getElementById('pesquisa')
          fixa.setAttribute('style','position: fixed;z-index:999;margin-top:-30px;width:100%;height: 80px;')
       }else{
          let fixa = document.getElementById('pesquisa')
          fixa.setAttribute('style','position: relative;z-index:0;')
       }
}