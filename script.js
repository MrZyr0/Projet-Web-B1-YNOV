document.addEventListener("DOMContentLoaded",function(){
    console.log("[DOM] Loaded")

    //définition des variables des joueurs

    var player01 = document.querySelectorAll(".Joueur-1")
    var isPlayer01On = false
    var player02 = document.querySelectorAll(".Joueur-2")
    var isPlayer02On = false
    var player03 = document.querySelectorAll(".Joueur-3")
    var isPlayer03On = false
    var player04 = document.querySelectorAll(".Joueur-4")
    var isPlayer04On = false
    var player05 = document.querySelectorAll(".Joueur-5")
    var isPlayer05On = false
    var player06 = document.querySelectorAll(".Joueur-6")
    var isPlayer06On = false
    var player07 = document.querySelectorAll(".Joueur-7")
    var isPlayer07On = false
    var player08 = document.querySelectorAll(".Joueur-8")
    var isPlayer08On = false

    //prise en charge des cliques sur les différents joueurs

    player01.forEach(function(event){
      event.addEventListener("click",highlightP01)
    })
    player02.forEach(function(event){
      event.addEventListener("click",highlightP02)
    })
    player03.forEach(function(event){
      event.addEventListener("click",highlightP03)
    })
    player04.forEach(function(event){
      event.addEventListener("click",highlightP04)
    })
    player05.forEach(function(event){
      event.addEventListener("click",highlightP05)
    })
    player06.forEach(function(event){
      event.addEventListener("click",highlightP06)
    })
    player07.forEach(function(event){
      event.addEventListener("click",highlightP07)
    })
    player08.forEach(function(event){
      event.addEventListener("click",highlightP08)
    })

    //fonctions permettant l'highlight des joueurs

    function highlightP01()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.backgroundColor = "#dbdd59"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "none"
        player02[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "none"
        player03[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "none"
        player04[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "none"
        player05[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "none"
        player06[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "none"
        player07[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "none"
        player08[i].style.backgroundColor = "#333743"
      }
      isPlayer01On = true
      isPlayer02On = false
      isPlayer03On = false
      isPlayer04On = false
      isPlayer05On = false
      isPlayer06On = false
      isPlayer07On = false
      isPlayer08On = false
    }

    function highlightP02()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "none"
        player01[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.backgroundColor = "#dbdd54"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "none"
        player03[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "none"
        player04[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "none"
        player05[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "none"
        player06[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "none"
        player07[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "none"
        player08[i].style.backgroundColor = "#333743"
      }
      isPlayer01On = false
      isPlayer02On = true
      isPlayer03On = false
      isPlayer04On = false
      isPlayer05On = false
      isPlayer06On = false
      isPlayer07On = false
      isPlayer08On = false
    }


    function highlightP03()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "none"
        player01[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "none"
        player02[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.backgroundColor = "#dbdd54"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "none"
        player04[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "none"
        player05[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "none"
        player06[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "none"
        player07[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "none"
        player08[i].style.backgroundColor = "#333743"
      }
      isPlayer01On = false
      isPlayer02On = false
      isPlayer03On = true
      isPlayer04On = false
      isPlayer05On = false
      isPlayer06On = false
      isPlayer07On = false
      isPlayer08On = false
    }

    function highlightP04()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "none"
        player01[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "none"
        player02[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "none"
        player03[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.backgroundColor = "#dbdd54"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "none"
        player05[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "none"
        player06[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "none"
        player07[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "none"
        player08[i].style.backgroundColor = "#333743"
      }
      isPlayer01On = false
      isPlayer02On = false
      isPlayer03On = false
      isPlayer04On = true
      isPlayer05On = false
      isPlayer06On = false
      isPlayer07On = false
      isPlayer08On = false
    }

    function highlightP05()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "none"
        player01[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "none"
        player02[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "none"
        player03[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "none"
        player04[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.backgroundColor = "#dbdd54"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "none"
        player06[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "none"
        player07[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "none"
        player08[i].style.backgroundColor = "#333743"
      }
      isPlayer01On = false
      isPlayer02On = true
      isPlayer03On = false
      isPlayer04On = false
      isPlayer05On = true
      isPlayer06On = false
      isPlayer07On = false
      isPlayer08On = false
    }

    function highlightP06()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "none"
        player01[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "none"
        player02[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "none"
        player03[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "none"
        player04[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "none"
        player05[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.backgroundColor = "#dbdd54"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "none"
        player07[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "none"
        player08[i].style.backgroundColor = "#333743"
      }
      isPlayer01On = false
      isPlayer02On = false
      isPlayer03On = false
      isPlayer04On = false
      isPlayer05On = false
      isPlayer06On = true
      isPlayer07On = false
      isPlayer08On = false
    }

    function highlightP07()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "none"
        player01[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "none"
        player02[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "none"
        player03[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "none"
        player04[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "none"
        player05[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "none"
        player06[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.backgroundColor = "#dbdd54"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "none"
        player08[i].style.backgroundColor = "#333743"
      }
      isPlayer01On = false
      isPlayer02On = false
      isPlayer03On = false
      isPlayer04On = false
      isPlayer05On = false
      isPlayer06On = false
      isPlayer07On = true
      isPlayer08On = false
    }

    function highlightP08()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "none"
        player01[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "none"
        player02[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "none"
        player03[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "none"
        player04[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "none"
        player05[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "none"
        player06[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "none"
        player07[i].style.backgroundColor = "#333743"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.backgroundColor = "#dbdd54"
      }
      isPlayer01On = false
      isPlayer02On = false
      isPlayer03On = false
      isPlayer04On = false
      isPlayer05On = false
      isPlayer06On = false
      isPlayer07On = false
      isPlayer08On = true
    }

    //définition des variables des onglets

    var tabBracket = document.querySelector(".Onglets_Arbre")
    var isTabBracket = true
    var tabPlayers = document.querySelector(".Onglet_Joueurs")
    var isTabPlayers = false
    var tabOptions = document.querySelector(".Onglet_Parametres")
    var isTabOptions = false
    var tabHelp = document.querySelector(".Onglets_Aide")
    var isTabHelp = false

    //eventlistener des cliques sur les onglets

    tabBracket.addEventListener("click", switchToBracket)
    tabPlayers.addEventListener("click", switchToPlayers)
    tabOptions.addEventListener("click", switchToOptions)
    tabHelp.addEventListener("click", switchToHelp)

    //définition des variables de page

    var pageBracket = document.querySelector(".Arbre-Onglet")
    var pagePlayers = document.querySelector(".Joueurs-Onglet")
    var pageOptions = document.querySelector(".Parametres-Onglet")
    var pageHelp = document.querySelector(".Aide-Onglet")

    //fonctions permettant de switch sur les différents onglets

    function switchToBracket()
    {
      if (isTabBracket)
      {
        console.log("Can't switch to tab bracket, already on it")
      }
      else
      {
        console.log("Switched to tab bracket")

        isTabBracket = true

        if (isTabPlayers)
        {
          pagePlayers.style.transform = "rotateY(90deg)"

          var timerDisplay = setTimeout(function(){
            pagePlayers.style.display = "none"
            pageBracket.style.display = "flex"
            clearTimeout(timerDisplay)
          }, 1000)

          isTabPlayers = false
        }
        else if (isTabOptions)
        {
          pageOptions.style.transform = "rotateY(90deg)"

          var timerDisplay = setTimeout(function(){
            pageOptions.style.display = "none"
            pageBracket.style.display = "flex"
            clearTimeout(timerDisplay)
          }, 1000)

          isTabOptions = false
        }
        else if (isTabHelp)
        {
          pageHelp.style.transform = "rotateY(90deg)"

          var timerDisplay = setTimeout(function(){
            pageHelp.style.display = "none"
            pageBracket.style.display = "flex"
            clearTimeout(timerDisplay)
          }, 1000)

          isTabHelp = false
        }

        var timerDisplay2 = setTimeout(function()
          {
            pageBracket.style.transform = "rotateY(0deg)"
            clearTimeout(timerDisplay2)
          }, 1100)
      }
    }

    function switchToPlayers()
    {
      if (isTabPlayers)
      {
        console.log("Can't switch to tab players, already on it")
      }
      else
      {
        console.log("Switched to tab players")

        isTabPlayers = true

        if (isTabBracket)
        {
          pageBracket.style.transform = "rotateY(90deg)"

          var timerDisplay = setTimeout(function(){
            pageBracket.style.display = "none"
            pagePlayers.style.display = "flex"
            clearTimeout(timerDisplay)
          }, 1000)

          isTabBracket = false
        }
        else if (isTabOptions)
        {
          pageOptions.style.transform = "rotateY(90deg)"

          var timerDisplay = setTimeout(function(){
            pageOptions.style.display = "none"
            pagePlayers.style.display = "flex"
            clearTimeout(timerDisplay)
          }, 1000)

          isTabOptions = false
        }
        else if (isTabHelp)
        {
          pageHelp.style.transform = "rotateY(90deg)"

          var timerDisplay = setTimeout(function(){
            pageHelp.style.display = "none"
            pagePlayers.style.display = "flex"
            clearTimeout(timerDisplay)
          }, 1000)

          isTabHelp = false
        }

        var timerDisplay2 = setTimeout(function()
          {
            pagePlayers.style.transform = "rotateY(0deg)"
            clearTimeout(timerDisplay2)
          }, 1100)


      }
    }

    function switchToOptions()
    {
      if (isTabOptions)
      {
        console.log("Can't switch to tab options, already on it")
      }
      else
      {
        console.log("Switched to tab options")

        isTabOptions = true

        if (isTabPlayers)
        {
          pagePlayers.style.transform = "rotateY(90deg)"

          var timerDisplay = setTimeout(function(){
            pagePlayers.style.display = "none"
            pageOptions.style.display = "flex"
            clearTimeout(timerDisplay)
          }, 1000)

          isTabPlayers = false
        }
        else if (isTabBracket)
        {
          pageBracket.style.transform = "rotateY(90deg)"

          var timerDisplay = setTimeout(function(){
            pageBracket.style.display = "none"
            pageOptions.style.display = "flex"
            clearTimeout(timerDisplay)
          }, 1000)

          isTabBracket = false
        }
        else if (isTabHelp)
        {
          pageHelp.style.transform = "rotateY(90deg)"

          var timerDisplay = setTimeout(function(){
            pageHelp.style.display = "none"
            pageOptions.style.display = "flex"
            clearTimeout(timerDisplay)
          }, 1000)

          isTabHelp = false
        }

        var timerDisplay2 = setTimeout(function()
          {
            pageOptions.style.transform = "rotateY(0deg)"
            clearTimeout(timerDisplay2)
          }, 1100)
      }
    }

    function switchToHelp()
    {
      if (isTabHelp)
      {
        console.log("Can't switch to tab help, already on it")
      }
      else
      {
        console.log("Switched to tab help")

        isTabHelp = true

        if (isTabPlayers)
        {
          pagePlayers.style.transform = "rotateY(90deg)"

          var timerDisplay = setTimeout(function(){
            pagePlayers.style.display = "none"
            pageHelp.style.display = "flex"
            clearTimeout(timerDisplay)
          }, 1000)

          isTabPlayers = false
        }
        else if (isTabBracket)
        {
          pageBracket.style.transform = "rotateY(90deg)"

          var timerDisplay = setTimeout(function(){
            pageBracket.style.display = "none"
            pageHelp.style.display = "flex"
            clearTimeout(timerDisplay)
          }, 1000)

          isTabBracket = false
        }
        else if (isTabOptions)
        {
          pageOptions.style.transform = "rotateY(90deg)"

          var timerDisplay = setTimeout(function(){
            pageOptions.style.display = "none"
            pageHelp.style.display = "flex"
            clearTimeout(timerDisplay)
          }, 1000)

          isTabOptions = false
        }

        var timerDisplay2 = setTimeout(function()
          {
            pageHelp.style.transform = "rotateY(0deg)"
            clearTimeout(timerDisplay2)
          }, 1100)
      }
    }

    //section concernant le nombre de joueur etc...

    var btnAppOptions = document.querySelector(".btn_app_parametres")

    btnAppOptions.addEventListener("click", updatePlayerNumber)

    function updatePlayerNumber()
    {
      var numberPlayer = document.querySelector(".nbjoueurs").value
      var listPlayer = []

      if (numberPlayer<2)
      {
        numberPlayer = "not enough"
        numberBye = "none"
      }
      else if (numberPlayer==2)
      {
        var numberBye = "none"
      }
      else if (numberPlayer<=4)
      {
        var numberBye = 4 - numberPlayer
      }
      else if (numberPlayer<=8)
      {
        var numberBye = 8 - numberPlayer
      }
      else if (numberPlayer<=16)
      {
        var numberBye = 16 - numberPlayer
      }
      else if (numberPlayer<=32)
      {
        var numberBye = 32 - numberPlayer
      }
      else if (numberPlayer<=64)
      {
        var numberBye = 64 - numberPlayer
      }
      else if (numberPlayer<=128)
      {
        var numberBye = 128 - numberPlayer
      }
      else if (numberPlayer<=256)
      {
        var numberBye = 256 - numberPlayer
      }

      console.log("Players: "+numberPlayer)
      console.log("Bye: "+numberBye)
    }

  })
