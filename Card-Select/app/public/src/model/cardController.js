class CardController{
  constructor(){
    this.galeryEl = document.querySelector('.galery');
    this.selectAll()
  }

  Card(card = false){

    for(let i in card){
      let data = card[i]
      let cardEl = document.createElement('div');
      cardEl.innerHTML = `<div class="card mb-2 mx-1 shadow-sm" style="width: 15rem;">
      <div class="card-header">
        <h5 class="card-title">Name: ${data.name} </h5>
      </div>
      <div class="card-body">
        <img src="${data.img}"  class="card-img-top" /> 
        <span class="badge bg-info text-dark float-end">${data.level}</span>
      </div>

      
      <div class="card-footer" style="background:transparent;">
      <div class="d-flex gap-1">
        <button type="button" class="btn btn-danger flex-fill">${data.atk}</button>
        <button type="button" class="btn btn-success flex-fill">${data.def}</button>
    
      </div>
      </div>
      
      </div>`;
      this.galeryEl.appendChild(cardEl) 

    }
    
  } //Card

  async selectAll(){
    try{
        const response = await fetch(`http://localhost:3000/users`)
        const data = await response.json()
        this.addAtack(data)
       

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

  addAtack(data){

    data.map(digimon => {
      digimon.def = this.randon();
      digimon.atk = this.randon();

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