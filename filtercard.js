//need a list of filtered parks. empty cards container. then we add new cards based on parks parameter.
function renderParksCards(parks) {
    let cardsMain = document.getElementById('cardsContainer')
    //emptying cards container
    cardsMain.replaceChildren()
    //wrapping cardTemplate in a loop.
    let length = parks.length;
    for (let i = 0; i < length; i++) {
    let park = parks[i]
  //card to include images, description, and to display etc
        const cardTemplate = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="/images/Adams-StoryImage_2.jpg"> 
        <div class="card-body">
          <h5 class="card-title">${park.LocationName}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
      
         //innerHTML
       cardsMain.insertAdjacentHTML("beforeend", cardTemplate)
    }
   
 }
 