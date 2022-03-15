function renderAverageCostPerDesigner(inventory) {
    let shoeArr = [];
    
    inventory.forEach((designerObj)=>{
      let sumPrice = 0;
      designerObj.shoes.forEach(shoeObj => {
          sumPrice += shoeObj.price;
      });
      shoeArr.push({
          'name': designerObj.name,
          'averagePrice': sumPrice / designerObj.shoes.length
      }) 
      
    });
  
    return shoeArr;
  }
  
  
  var currentInventory = [
      {
        name: 'Brunello Cucinelli',
        shoes: [
          {name: 'tasselled black low-top lace-up', price: 1000},
          {name: 'tasselled green low-top lace-up', price: 1100},
          {name: 'plain beige suede moccasin', price: 950},
          {name: 'plain olive suede moccasin', price: 1050}
        ]
      },
      {
        name: 'Gucci',
        shoes: [
          {name: 'red leather laced sneakers', price: 800},
          {name: 'black leather laced sneakers', price: 900}
        ]
      }
    ];
  
    console.log(renderAverageCostPerDesigner(currentInventory));