$(document).ready(function() {
    $.getJSON('data/pokens.json', function(data) {
      var trainersList = $('#trainers-list');
  
      $.each(data, function(index, trainer) {
        var trainerDiv = $('<div class="trainer"></div>');
        trainerDiv.append('<h2>' + trainer.entrenador + '</h2>');
  
        var pokemonList = $('<ul class="pokemon-list"></ul>');
  
        $.each(trainer.pokemons, function(index, pokemon) {
          var pokemonItem = $('<li></li>');
          pokemonItem.addClass('pokemon-type-' + pokemon.tipo.toLowerCase()); 
  
  
          var typeColor = getColorByTipo(pokemon.tipo);
  
          pokemonItem.css('background-color', typeColor);
  
          pokemonItem.append('<img src="data/' + pokemon.foto + '" alt="' + pokemon.nombre + '">');
          pokemonItem.append('<p class="pokemon-name">' + pokemon.nombre + '</p>');
          pokemonList.append(pokemonItem);
        });
  
        trainerDiv.append(pokemonList);
        trainersList.append(trainerDiv);
      });
    });
  });
  
  
  function getColorByTipo(tipo) {
    switch (tipo.toLowerCase()) {
      case 'fuego':
        return '#FF0000'; 
      case 'agua':
        return '#0000FF'; 
      case 'planta':
        return '#008000'; 
      case 'electrico':
        return '#FFFF00'; 
      case 'normal':
        return '#AAAAAA'; 
      default:
        return '#000000'; 
    }
  }
  