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
})
