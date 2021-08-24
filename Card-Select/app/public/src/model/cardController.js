class CardController{
  constructor(){
    this.galeryEl = document.querySelector('.galery');
    this.selectAll()
  }

  newButton(text, attr){
    let $button = document.createElement("button");
    $button.textContent = `${attr}`
    $button.classList.add('btn', `btn-${text == 'Atk' ? 'danger':'success' }`, 'flex-fill','btn-sm' )
    
    $button.addEventListener('click', e =>{
      let digimon = JSON.parse($button.parentElement.parentElement.dataset.digimon)
      console.log(digimon)
    })

    return $button
  }

  Card(card = false){

    for(let i in card){
      let data = card[i]
      let cardEl = document.createElement('div');
      let cardHeaderEl = document.createElement('div');
      let cardBodyEl = document.createElement('div');
      let cardFooterEl = document.createElement('div');
      cardEl.dataset.digimon = JSON.stringify(data)
      cardEl.classList.add('card', 'mb-2', 'mx-1', 'shadow')
      cardEl.style.width = "150px";
      
      cardHeaderEl.classList.add('card-header')
      cardHeaderEl.innerHTML = `<span class="card-title">${data.name}</span>`;
      
      cardBodyEl.classList.add('card-body')
      cardBodyEl.innerHTML = `<img src="${data.img}"  class="card-img-top" /> 
      <span class="badge bg-info text-dark float-center mt-1">${data.level}</span>`;
      
      cardFooterEl.classList.add('card-footer','d-flex', 'gap-1','p-1')
      cardFooterEl.style.background = "transparent;"
      

      cardFooterEl.appendChild(this.newButton('Atk', data.atk))
      cardFooterEl.appendChild(this.newButton('Def', data.def))

      cardEl.appendChild(cardHeaderEl) 
      cardEl.appendChild(cardBodyEl) 
      cardEl.appendChild(cardFooterEl) 

      this.galeryEl.appendChild(cardEl) 

    }
    
  } //Card

  async selectAll(){
    try{
        const response = await fetch(`http://localhost:3000/users`)
        const data = await response.json()
        this.addAttr(data)
       

    }catch (error){
        console.log(error, 'SelectAll')
    }
  } //selectAll

  async selectOne(){
    try{
        const response = await fetch(`http://localhost:3000/users/name/Agumon`)
        const data = await response.json()
       this.Card(data);

    }catch (error){
        console.log(error, 'SelectAll')
    }
  } //selectOne

  addAttr(data){

    data.map(digimon => {
      digimon.def = this.randon();
      digimon.atk = this.randon();
      if(digimon.name == 'Magnamon'){
        console.log(digimon.name)
        digimon.img = 'https://i.pinimg.com/originals/4b/7e/4f/4b7e4fe354b7238b149aa3722918800b.jpg'
      }

      switch (digimon.level) {
        case 'In Training':
          digimon.def += 5
          digimon.atk += 5
          digimon.stage = 1
          break;
        case 'Rookie':
          digimon.def += 10
          digimon.atk += 10
          digimon.stage = 2
          break;
        case 'Champion':
          digimon.def += 20
          digimon.atk += 20
          digimon.stage = 3
          break;
        case 'Ultimate':
          digimon.def += 30
          digimon.atk += 30
          digimon.stage = 4
          break;
        case 'Mega':
          digimon.def += 40
          digimon.atk += 40
          digimon.stage = 5
          break;
        case 'Armor':
          digimon.def += 50
          digimon.atk += 50
          digimon.stage = 6
          break;
        default:
          break;
      }

    })

    console.log(data)
    this.Card(data)
  }

  randon(){
    let attr = Math.floor(Math.random() * 10) + 1
    return attr;
  }

  
}