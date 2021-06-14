window.onscroll = function(){
   var top = window.pageYOffset || document.documentElement.scrollTop
       console.log(top);
       if(top >= 100){
          let fixa = document.getElementById('pesquisa')
          fixa.setAttribute('style','position: fixed;z-index:999;margin-top:-100px;width:100%')
       }else{
                   let fixa = document.getElementById('pesquisa')
          fixa.setAttribute('style','position: relative;z-index:0;')
       }
}
