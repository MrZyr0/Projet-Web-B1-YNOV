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

      updateDisplayPlayer(numberPlayerMax, numberPlayer, numberBye, numberBracketSection)

      var tournamentName = document.querySelector(".Onglet_Parametres_Nom-Tournois").value

      updateTournamentName(tournamentName)

      var tournamentDesc = document.querySelector(".Onglet_Parametres_Desc-Tournois").value

      updateTournamentDesc(tournamentDesc)
    }


     var btnCSGO = document.querySelector(".Logo_CSGO")
     var btnHOTS = document.querySelector(".Logo_HOTS")
     var btnHS = document.querySelector(".Logo_HS")
     var btnLOL = document.querySelector(".Logo_LOL")
     var btnOW = document.querySelector(".Logo_OW")
     var btnRL = document.querySelector(".Logo_RL")
     var btnSC2 = document.querySelector(".Logo_SC2")
     var actualLogo = document.querySelector(".Entete_Logo-Jeux")

   btnHS.addEventListener("click", updateGameLogoHS)
   btnOW.addEventListener("click", updateGameLogoOW)
   btnRL.addEventListener("click", updateGameLogoRL)
   btnLOL.addEventListener("click", updateGameLogoLOL)
   btnSC2.addEventListener("click", updateGameLogoSC2)
   btnCSGO.addEventListener("click", updateGameLogoCSGO)
   btnHOTS.addEventListener("click", updateGameLogoHOTS)

    function updateGameLogoHS()
    {
   actualLogo.src = "Contenu/Logos/Logos_Jeux/logo_HS.png"

   btnHS.classList.add("Logo-Selectionne")
   btnOW.classList.remove("Logo-Selectionne")
   btnRL.classList.remove("Logo-Selectionne")
   btnLOL.classList.remove("Logo-Selectionne")
   btnSC2.classList.remove("Logo-Selectionne")
   btnCSGO.classList.remove("Logo-Selectionne")
   btnHOTS.classList.remove("Logo-Selectionne")
 }

    function updateGameLogoOW()
    {
   actualLogo.src = "Contenu/Logos/Logos_Jeux/logo_OW.png"

   btnHS.classList.remove("Logo-Selectionne")
   btnOW.classList.add("Logo-Selectionne")
   btnRL.classList.remove("Logo-Selectionne")
   btnLOL.classList.remove("Logo-Selectionne")
   btnSC2.classList.remove("Logo-Selectionne")
   btnCSGO.classList.remove("Logo-Selectionne")
   btnHOTS.classList.remove("Logo-Selectionne")
 }

    function updateGameLogoRL()
    {
   actualLogo.src = "Contenu/Logos/Logos_Jeux/logo_RL.png"

   btnHS.classList.remove("Logo-Selectionne")
   btnOW.classList.remove("Logo-Selectionne")
   btnRL.classList.add("Logo-Selectionne")
   btnLOL.classList.remove("Logo-Selectionne")
   btnSC2.classList.remove("Logo-Selectionne")
   btnCSGO.classList.remove("Logo-Selectionne")
   btnHOTS.classList.remove("Logo-Selectionne")
 }

    function updateGameLogoLOL()
    {
   actualLogo.src = "Contenu/Logos/Logos_Jeux/logo_LOL.png"

   btnHS.classList.remove("Logo-Selectionne")
   btnOW.classList.remove("Logo-Selectionne")
   btnRL.classList.remove("Logo-Selectionne")
   btnLOL.classList.add("Logo-Selectionne")
   btnSC2.classList.remove("Logo-Selectionne")
   btnCSGO.classList.remove("Logo-Selectionne")
   btnHOTS.classList.remove("Logo-Selectionne")
 }

    function updateGameLogoSC2()
    {
       actualLogo.src = "Contenu/Logos/Logos_Jeux/logo_SC2.png"

       btnHS.classList.remove("Logo-Selectionne")
       btnOW.classList.remove("Logo-Selectionne")
       btnRL.classList.remove("Logo-Selectionne")
       btnLOL.classList.remove("Logo-Selectionne")
       btnSC2.classList.add("Logo-Selectionne")
       btnCSGO.classList.remove("Logo-Selectionne")
       btnHOTS.classList.remove("Logo-Selectionne")
     }


    function updateGameLogoCSGO()
    {
       actualLogo.src = "Contenu/Logos/Logos_Jeux/logo_CS.png"

       btnHS.classList.remove("Logo-Selectionne")
       btnOW.classList.remove("Logo-Selectionne")
       btnRL.classList.remove("Logo-Selectionne")
       btnLOL.classList.remove("Logo-Selectionne")
       btnSC2.classList.remove("Logo-Selectionne")
       btnCSGO.classList.add("Logo-Selectionne")
       btnHOTS.classList.remove("Logo-Selectionne")
     }

    function updateGameLogoHOTS()
    {
       actualLogo.src = "Contenu/Logos/Logos_Jeux/logo_HOTS.png"

       btnHS.classList.remove("Logo-Selectionne")
       btnOW.classList.remove("Logo-Selectionne")
       btnRL.classList.remove("Logo-Selectionne")
       btnLOL.classList.remove("Logo-Selectionne")
       btnSC2.classList.remove("Logo-Selectionne")
       btnCSGO.classList.remove("Logo-Selectionne")
       btnHOTS.classList.add("Logo-Selectionne")
     }



    function updateTournamentName(name)
    {
      var actualName = document.querySelector(".Entete_Titre-Tournois")
      actualName.innerHTML = name
    }

    function updateTournamentDesc(desc)
    {
      var actualDesc = document.querySelector(".Entete_Infos_Desc")
      actualDesc.innerHTML = desc
    }

    function  updateDisplayPlayer(playerMax, player, bye, nbrBrSec)
    {
      var home2 = document.querySelector(".Fenetre-2")
      home2.style.display = "none"
      var zoneInputPlayer = document.querySelector(".Onglets_Joueurs_Liste")
      var zoneSectionBracket = document.querySelector(".Onglet_Arbre")
      var templateInputPlayer = document.querySelector("#Template_Joueur").innerHTML
      var templateBlocPlayerTop = document.querySelector("#Template_Bloc-Joueurs_Joueur-Top").innerHTML
      var templateBlocPlayerMid = document.querySelector("#Template_Bloc-Joueurs_Joueur-Mid").innerHTML
      var templateBlocPlayerBot = document.querySelector("#Template_Bloc-Joueurs_Joueur-Bot").innerHTML
      var templateBracketSection = document.querySelector("#Template_Arbre_Tour").innerHTML
      var templateInZonePlayerInput = document.querySelectorAll(".Onglets_Joueurs_Liste_Pseudo")
      var templateInZonePlayerBloc = document.querySelectorAll(".Bloc-Joueurs")
      var templateConnectorBloc = document.querySelector("#Template_Arbre_InterConnecteurs").innerHTML
      var templateConnectorConnector = document.querySelector("#Template_Arbre_InterConnecteurs_InterConnecteur").innerHTML
      listPlayer = []

      for (var i = 0; i < templateInZonePlayerInput.length; i++)
      {
        templateInZonePlayerInput[i].remove()
      }

      for (var i = 0; i < templateInZonePlayerBloc.length; i++)
      {
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
        var zoneBlocConnector = document.querySelectorAll(".Arbre_Interconnecteurs")

        zoneBlocPlayer[i].classList.add("Bracket_"+i)
        zoneBlocConnector[i].classList.add("Connector_"+i)
      }


      for (var c = 0; c < nbrBrSec; c++)
      {
        var zoneBlocPlayer = document.querySelector(".Bracket_"+c)
        var zoneBlocConnector = document.querySelector(".Connector_"+c)

        if (c != nbrBrSec-1)
        {
          for (var k = 0; k < playerMax/2; k++)
          {
            zoneBlocConnector.insertAdjacentHTML("beforeend", templateConnectorConnector)
          }
        }

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

    //définition variables Accueil

    var btnCreateTournament = document.querySelector(".Fenetre-1_Btn")

    btnCreateTournament.addEventListener("click", showWindow2)

    function showWindow2()
    {
      var home1 = document.querySelector(".Fenetre-1")
      var home2 = document.querySelector(".Fenetre-2")

      home1.style.display = "none"
      home2.style.display = "flex"

    }

})
