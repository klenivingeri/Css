class CardController{
  constructor(){
    this.name = 'Erick';
    this.img = 'Link da imagem';
    this.level = 'Junior';
    this.galeryEl = document.querySelector('.galery');

    this.selectCard();
    this.selectAll();
  }

  selectCard(card = false){

    for(let i in card){
      let data = card[i]
      let cardEl = document.createElement('div');
      cardEl.innerHTML = `Name: ${data.name}<br/> Img: ${data.img}<br/> Level:${data.level}`;
      this.galeryEl.appendChild(cardEl) 
    }
    
  }

  async selectAll(){
    try{
        const response = await fetch(`http://localhost:3000/users`)
        const data = await response.json()
       this.selectCard(data);

    }catch (error){
        console.log(error, 'SelectAll')
    }
}
}