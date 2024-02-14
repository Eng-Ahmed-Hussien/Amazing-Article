const acc = document.getElementsByClassName("accordion");
      open = document.getElementById('open'),
      close = document.getElementsByClassName('close'),
      container = document.querySelector('.container');
      var i,
          k;
      
       function getYear() {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        document.querySelector("#displayYear").innerHTML = currentYear;
      }

     getYear();
      open.addEventListener('click', () => container.classList.add('show-nav'));
      for (k = 0; k < close.length; k++) {
        close[k].addEventListener("click", () =>
          container.classList.remove('show-nav')
        );
      }
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var icon = this.querySelector('svg');
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display =icon.style.display= "none";
          } else {
            panel.style.display =icon.style.display = "block";
          }
        });
      }
      


     