document.addEventListener("DOMContentLoaded",function(){
    console.log("[DOM] Loaded")

    var player01 = document.querySelectorAll(".Joueur-1")
    var isPlayer01On = false



    player01.forEach(function(event){
      event.addEventListener("click",highlightP01)
    })

    function highlightP01()
    {
      if (!isPlayer01On) {
        for (var i = 0; i < player01.length; i++) {
          player01[i].style.backgroundColor = "#ff8200"
        }
        isPlayer01On = !isPlayer01On
      } else {
        for (var i = 0; i < player01.length; i++) {
          player01[i].style.backgroundColor = "#272A33"
        }
        isPlayer01On = !isPlayer01On
      }

    }
})
