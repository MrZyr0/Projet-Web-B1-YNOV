document.addEventListener("DOMContentLoaded",function(){
    console.log("[DOM] Loaded")

    //définition des variables des onglets

    var tabBracket = document.querySelector(".Nav_Arbre")
    var isTabBracketActive = true
    var tabPlayer = document.querySelector(".Nav_Joueurs")
    var isTabPlayerActive = false
    var tabOption = document.querySelector(".Nav_Parametres")
    var isTabOptionActive = false

    //définition des events listener

    tabBracket.addEventListener("click", switchToBracket)
    tabPlayer.addEventListener("click", switchToPlayer)
    tabOption.addEventListener("click", switchToOption)

    //définition des variables de page

    var pageBracket = document.querySelector(".Onglet_Arbre")
    var pagePlayer = document.querySelector(".Onglet_Joueurs")
    var pageOption = document.querySelector(".Onglet_Parametres")

    //fonctions de changement de page

    function switchToBracket()
    {
      if (isTabPlayerActive == true)
      {
        tabBracket.classList.toggle("Nav_Actif")
        tabPlayer.classList.toggle("Nav_Actif")

        pageBracket.style.display = "flex"
        pagePlayer.style.display = "none"

        isTabPlayerActive = false
        isTabBracketActive = true
      }
      else if (isTabOptionActive == true)
      {
        tabBracket.classList.toggle("Nav_Actif")
        tabOption.classList.toggle("Nav_Actif")

        pageBracket.style.display = "flex"
        pageOption.style.display = "none"

        isTabOptionActive = false
        isTabBracketActive = true
      }
    }

    function switchToPlayer()
    {
      if (isTabBracketActive == true)
      {
        tabBracket.classList.toggle("Nav_Actif")
        tabPlayer.classList.toggle("Nav_Actif")

        pagePlayer.style.display = "flex"
        pageBracket.style.display = "none"

        isTabBracketActive = false
        isTabPlayerActive = true
      }
      else if (isTabOptionActive == true)
      {
        tabPlayer.classList.toggle("Nav_Actif")
        tabOption.classList.toggle("Nav_Actif")

        pagePlayer.style.display = "flex"
        pageOption.style.display = "none"

        isTabOptionActive = false
        isTabPlayerActive = true
      }
    }

    function switchToOption()
    {
      if (isTabBracketActive == true)
      {
        tabBracket.classList.toggle("Nav_Actif")
        tabOption.classList.toggle("Nav_Actif")

        pageOption.style.display = "flex"
        pageBracket.style.display = "none"

        isTabBracketActive = false
        isTabOptionActive = true
      }
      else if (isTabPlayerActive == true)
      {
        tabPlayer.classList.toggle("Nav_Actif")
        tabOption.classList.toggle("Nav_Actif")

        pageOption.style.display = "flex"
        pagePlayer.style.display = "none"

        isTabPlayerActive = false
        isTabOptionActive = true
      }
    }

    //définition de la variable des boutons appliqués

    var btnAppOption = document.querySelector(".Onglet_Parametres_Appliquer")
    //var btnAppPlayer =

    //event listeners pour les boutons

    btnAppOption.addEventListener("click", updateOption)


    //fonctions d'update

    function updateOption()
    {
      var numberPlayer = document.querySelector(".Onglet_Parametres_Nb-Joueurs").value

      if (numberPlayer>2)
      {
        if (numberPlayer<=4)
        {
          var numberBye = 4 - numberPlayer
          var numberPlayerMax = 4
          var numberBracketSection = 3
        }
        else if (numberPlayer<=8)
        {
          var numberBye = 8 - numberPlayer
          var numberPlayerMax = 8
          var numberBracketSection = 4
        }
        else if (numberPlayer<=16)
        {
          var numberBye = 16 - numberPlayer
          var numberPlayerMax = 16
          var numberBracketSection = 5
        }
        else if (numberPlayer<=32)
        {
          var numberBye = 32 - numberPlayer
          var numberPlayerMax = 32
          var numberBracketSection = 6
        }
        else if (numberPlayer<=64)
        {
          var numberBye = 64 - numberPlayer
          var numberPlayerMax = 64
          var numberBracketSection = 7
        }
        else if (numberPlayer<=128)
        {
          var numberBye = 128 - numberPlayer
          var numberPlayerMax = 128
          var numberBracketSection = 8
        }
        else if (numberPlayer<=256)
        {
          var numberBye = 256 - numberPlayer
          var numberPlayerMax = 256
          var numberBracketSection = 9
        }
      }

      console.log("Players: "+numberPlayer)
      console.log("Bye: "+numberBye)
      updateDisplayPlayer(numberPlayerMax, numberPlayer, numberBye, numberBracketSection)
    }

    function  updateDisplayPlayer(playerMax, player, bye, nbrBrSec)
    {
      var zoneInputPlayer = document.querySelector(".Onglet_Joueurs")
      var templateInputPlayer = document.querySelector("#Template_Joueur").innerHTML
      var templateBlocPlayer = document.querySelector("#Template_Bloc-Joueurs").innerHTML
      var templateInZonePlayerInput = document.querySelectorAll(".Onglets_Joueurs_Liste_Pseudo")
      var templateInZonePlayerBloc = document.querySelectorAll(".Bloc-Joueurs")
      listPlayer = []

      for (var i = 0; i < templateInZonePlayerInput.length; i++)
      {
        templateInZonePlayerInput[i].remove()
      }

      for (var i = 0; i < templateInZonePlayerBloc.length; i++) {
        templateInZonePlayerBloc[i].remove()
      }

      for (var j = 0; j < player; j++)
      {
        zoneInputPlayer.insertAdjacentHTML("afterbegin", templateInputPlayer)

        listPlayer[i] = 1

        if (i>player)
        {
          listPlayer[i] = 0
        }
      }

      for (var i = 0; i < nbrBrSec; i++)
      {
        var newSection = document.createElement("div")
        newSection.className = "Arbre_tour_"+i+" Bracket" 

        document.querySelector(".Onglet_Arbre").appendChild(newSection)

        for (var j = 0; j < playerMax; j++)
        {
          var zoneBlocPlayer = document.querySelector(".Arbre_tour_"+i)
          zoneBlocPlayer.insertAdjacentHTML("afterbegin", templateBlocPlayer)
        }
        playerMax = playerMax/2
      }
    }

})
