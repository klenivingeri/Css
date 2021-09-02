export default class Kudo{
  constructor(data){
    this.selectNameEl = document.getElementById('select-name');
    this.galeryEl = document.getElementById('galery');
    this.dataSelect = []

    this.data = data;
    
    this.build();

  }
  build(){
    this.getSelectName()
    
  } // build

  getData(){
    return  this.data;
  } // getData

  getSelectName(){
    this.insertElement(false)
    this.selectNameEl.addEventListener('change', e => {
      this.isActive = document.querySelectorAll('.card');
      [...this.isActive].forEach(card =>{
        if(e.target.value ==card.dataset.nome ){
          card.classList.add("active")
          
        }else if(e.target.value == 'all'){
          card.classList.add("active")
        }else{
          card.classList.remove("active")
        }
      })
 
      
    })
    
  } // getSelectName

  insertElement(selectName){ 
    this.data.forEach(card => {
      if(!this.dataSelect.find(value => value == card.nome)){
        this.selectNameEl.appendChild(this.createElementOption(card))
      }
      this.galeryEl.appendChild(this.insertElementCard(card))
      this.dataSelect.push(card.nome)
    });

  } // insertSelectOption

  createElementOption(card){
    let option = document.createElement('option')
    option.setAttribute('value', card.de)
    option.innerHTML = card.nome
    return option;
  } // createElementOption

  insertElementCard(card, selectName){
    let div = document.createElement('div')

    div.setAttribute('class','card active')
    div.setAttribute('id','card')
    div.dataset.nome = card.para
    div.innerHTML = `
    <div class="card-body" style="background-image:url('./img/${this.getImg(card.type)}.png');background-size: contain;background-repeat:no-repeat;">
			<p>De: ${card.de}</p>
			<p>Para: ${card.para}</p>
			<p>${card.msg}</p>
		</div>
    `
    return div

  }
  getImg(type){
    let imagem = ''
    switch (type) {
      case 'Obrigado':
        imagem = 'obrigado'
        break;
        case 'Ótimo trabalho':
        imagem = 'otimo-trabalho'
        break;
        case 'Sensacional':
        imagem = 'sensacional'
        break;
        case 'Parabéns':
        imagem = 'parabens'
        break;
        case 'Bom trabalho':
        imagem = 'bom-trabalho'
        break;
    
      default:
        break;
    }
    return  imagem
  }
  getNameSelectCard(){

  }
  
}

