const express = require('express');

const app = express();

const recipes = [
  {
    id: 12345,
    name: 'farofa de bacon',
    ingredients: ['farofa', 'bacon']
  },
  {
    id: 12346,
    name: 'ovo mexido',
    ingredients: ['ovo']
  }
]

app.delete('/recipe/:id', (req, res) => {
  const result = deleteRecipes(req.params.id);

  res.send(result);
});


function deleteRecipes(id) {
  const result = recipes.find((i) => i.id === parseInt(id, 10));

  if(!result) {
    return 'recipe not found'
  } else {
    return result
  }
}

app.listen(3001, () => {
  console.log('Hello');
});
