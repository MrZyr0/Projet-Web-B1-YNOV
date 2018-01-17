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
      var zoneInputPlayer = document.querySelector(".Onglets_Joueurs_Liste")
      var zoneSectionBracket = document.querySelector(".Onglet_Arbre")
      var templateInputPlayer = document.querySelector("#Template_Joueur").innerHTML
      var templateBlocPlayerTop = document.querySelector("#Template_Bloc-Joueurs_Joueur-Top").innerHTML
      var templateBlocPlayerMid = document.querySelector("#Template_Bloc-Joueurs_Joueur-Mid").innerHTML
      var templateBlocPlayerBot = document.querySelector("#Template_Bloc-Joueurs_Joueur-Bot").innerHTML
      var templateBracketSection = document.querySelector("#Template_Arbre_Tour").innerHTML
      var templateInZonePlayerInput = document.querySelectorAll(".Onglets_Joueurs_Liste_Pseudo")
      var templateInZonePlayerBloc = document.querySelectorAll(".Bloc-Joueurs")
      var templateConnectorBloc = document.querySelector("#Template_Arbre_InterConnecteur").innerHTML
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
        zoneSectionBracket.insertAdjacentHTML("beforeend", templateBracketSection)
        zoneSectionBracket.insertAdjacentHTML("beforeend", templateConnectorBloc)

        var zoneBlocPlayer = document.querySelectorAll(".Arbre_Tour")

        zoneBlocPlayer[i].classList.add("Bracket_"+i)
      }


      for (var c = 0; c < nbrBrSec; c++)
      {
        var zoneBlocPlayer = document.querySelector(".Bracket_"+c)

        for (var j = 0; j < playerMax; j++)
        {
          if (c == 0)
          {
            zoneBlocPlayer.insertAdjacentHTML("beforeend", templateBlocPlayerTop)
            var listPlayerNumber = document.querySelectorAll(".Bloc-Joueurs")

            listPlayerNumber[j].classList.add("Joueur"+j)
          }
          else if (c > 0 && c < nbrBrSec-1)
          {
            zoneBlocPlayer.insertAdjacentHTML("beforeend", templateBlocPlayerMid)
          }
          else if (c == nbrBrSec-1)
          {
            zoneBlocPlayer.insertAdjacentHTML("beforeend", templateBlocPlayerBot)
          }
        }
        playerMax = playerMax/2
      }
    }
})
