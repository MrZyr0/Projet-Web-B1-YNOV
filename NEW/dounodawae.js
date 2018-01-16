document.addEventListener("DOMContentLoaded",function(){
    console.log("[DOM] Loaded")

    var tabBracket = document.querySelector(".Nav_Arbre")
    var isTabBracketActive = true
    var tabPlayer = document.querySelector(".Nav_Joueurs")
    var isTabPlayerActive = false
    var tabOption = document.querySelector(".Nav_Parametres")
    var isTabOptionActive = false

    tabBracket.addEventListener("click", switchToBracket)
    tabPlayer.addEventListener("click", switchToPlayer)
    tabOption.addEventListener("click", switchToOption)

    function switchToBracket()
    {
      if (isTabBracketActive == true)
      {
        console.log("already on bracket tab");
      }
      else if (isTabPlayerActive == true)
      {
        tabBracket.classList.toggle("Nav_Active")
        tabPlayer.classList.toggle("Nav_Active")
        isTabPlayerActive = false
        isTabBracketActive = true
      }
      else if (isTabOptionActive == true)
      {
        tabBracket.classList.toggle("Nav_Active")
        tabOption.classList.toggle("Nav_Active")
        isTabOptionActive = false
        isTabBracketActive = true
      }
    }

    function switchToPlayer()
    {
      if (isTabBracketActive == true)
      {
        tabBracket.classList.toggle("Nav_Active")
        tabPlayer.classList.toggle("Nav_Active")
        isTabBracketActive = false
        isTabPlayerActive = true
      }
      else if (isTabPlayerActive == true)
      {
        console.log("already on player tab")
      }
      else if (isTabOptionActive == true)
      {
        tabBracket.classList.toggle("Nav_Active")
        tabOption.classList.toggle("Nav_Active")
        isTabOptionActive = false
        isTabPlayerActive = true
      }
    }

    function switchToOption()
    {
      if (isTabBracketActive == true)
      {
        tabBracket.classList.toggle("Nav_Active")
        tabPlayer.classList.toggle("Nav_Active")
        isTabBracketActive = false
        isTabOptionActive = true
      }
      else if (isTabPlayerActive == true)
      {
        tabPlayer.classList.toggle("Nav_Active")
        tabOption.classList.toggle("Nav_Active")
        isTabPlayerActive = false
        isTabOptionActive = true
      }
      else if (isTabOptionActive == true)
      {
        console.log("already on option tab")
      }
    }
})
