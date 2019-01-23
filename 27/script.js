      var names = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner"];
      for (var i = 0; i < names.length; i++) {
        var li = $('<li class="list-group-item"></li>').text(names[i])
        $('ul').append(li)
      }
      var index = [];
      $('input').on('keyup', () => {
          for (var i = 0; i < names.length; i++) {
            $('ul > li').eq(i).show()
          }
        var index = [];
        for (var i = 0; i < names.length; i++) {
          var name = names[i].toLowerCase(),
              value = $('input').val()
          if(name.indexOf(value.toLowerCase()) == -1){
            index.push(i)
          }
          if(i == names.length-1){
            for (var j = 0; j < index.length; j++) {
              $('ul > li').eq([index[j]]).hide()
            }
          }
        }
      })
