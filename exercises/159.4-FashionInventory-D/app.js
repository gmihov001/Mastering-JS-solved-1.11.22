function getLaceNameDataForShoes(array) {
  let laced = []
  array.forEach(
    (designer) => {
      designer.shoes.forEach(shoe => {
        if(shoe.name.includes("lace")){
          let newObj = {};
          newObj.nameWords = shoe.name.split(' ');
          newObj.nameWords.forEach((word, wordIndex) => {
            if(word.includes('lace')) newObj.targetWordIndex = wordIndex;
          });
          laced.push(newObj);
        }  
      });
    }
  );
  return laced;
}

var inventory = [
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

 console.log(getLaceNameDataForShoes(inventory));