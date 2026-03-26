    function showCard(num)
    {
      document.getElementById("card1").classList.remove("active");
      document.getElementById("card2").classList.remove("active");
      document.getElementById("card3").classList.remove("active");

      document.getElementById("card" + num).classList.add("active");
    }

    window.onload=function(){
      showCard(3);
    }


          const btn = document.getElementById('btn-submit');
      const input = document.getElementById('answer');
      btn.addEventListener('click', function()
      {
        input.value="";
      });