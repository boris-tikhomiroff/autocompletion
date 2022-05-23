document.addEventListener("DOMContentLoaded", () => {
  /* ------------------------------------------------
                  AUTOCOMPLETE
  --------------------------------------------------- */
  let searchInput = document.querySelector("input[type=text]");
  let result = document.querySelector(".search__result");
  let specificResult = document.querySelector("ul");
  let approximateResult = document.querySelector("ul:not(ul:first-child)");

  function cleanSearch() {
    while (
      specificResult.hasChildNodes() ||
      approximateResult.hasChildNodes()
    ) {
      specificResult.innerHTML = "";
      approximateResult.innerHTML = "";
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function autocomplete() {
    cleanSearch();

    fetch("./SearchController.php", {
      method: "POST",
      body: searchInput.value,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Problème - code d'état HTTP : " + response.status);
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
        let value = searchInput.value;

        if (value.length != 0) {
          result.classList.add("active");
          if (response.length == 0) {
            let resultNotFound = document.createElement("li");
            resultNotFound.innerHTML = "No results found.";
            specificResult.appendChild(resultNotFound);
            console.log("no results");
          } else {
            for (let i in response) {
              let title = response[i].titre.toLowerCase();
              // function createSuggestion() {
              //   const link = document.createElement("a");
              //   let resultFind = document.createElement("li");
              //   link.href = "element.php?id=" + response[i].id;
              //   link.innerHTML = capitalizeFirstLetter(title);
              //   specificResult.appendChild(resultFind);
              //   resultFind.appendChild(link);
              // }
              if (title.startsWith(value)) {
                // createSuggestion();
                const link = document.createElement("a");
                let resultFind = document.createElement("li");
                link.href = "element.php?id=" + response[i].id;
                link.innerHTML = capitalizeFirstLetter(title);
                specificResult.appendChild(resultFind);
                resultFind.appendChild(link);
              } else {
                // createSuggestion();
                const link = document.createElement("a");
                let resultFind = document.createElement("li");
                link.href = "element.php?id=" + response[i].id;
                link.innerHTML = capitalizeFirstLetter(title);
                approximateResult.appendChild(resultFind);
                resultFind.appendChild(link);
              }
            }
          }
        } else {
          result.classList.remove("active");
          cleanSearch();
        }
      })
      .catch((e) => {
        console.log(e.toString());
      });
  }

  /* ------------------------------------------------
                    DARKMODE
  --------------------------------------------------- */
  const darkMode = document.querySelector(".darkmode");

  function toggleTheme() {
    let page = document.querySelector(".page");
    if (page.dataset.theme == "" || page.dataset.theme == "light") {
      page.setAttribute("data-theme", "dark");
    } else {
      page.setAttribute("data-theme", "light");
      // cursor.style.background = "black";
    }
  }

  /* ------------------------------------------------
                    CURSOR
  --------------------------------------------------- */
  const cursor = document.querySelector(".cursor");

  function cursorFollower() {
    let flyOver = document.querySelectorAll(".flyOver");
    document.addEventListener("mousemove", (ev) => {
      cursor.style.top = ev.clientY + "px";
      cursor.style.left = ev.clientX + "px";
    });

    // for (let i = 0; flyOver.length; i++) {
    //   flyOver[i].addEventListener("mouseover", (ev) => {
    //     cursor.classList.add("cursor__big");
    //   });

    //   flyOver[i].addEventListener("mouseleave", (ev) => {
    //     cursor.classList.remove("cursor__big");
    //   });
    // }
    
    flyOver.forEach((el) => {
      el.addEventListener("mouseover", (ev) => {
        cursor.classList.add("cursor__big");
      });

      el.addEventListener("mouseleave", (ev) => {
        cursor.classList.remove("cursor__big");
      });
    });
  }

  function loop() {
    cursorFollower();
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  /* ------------------------------------------------
                    MENU
  --------------------------------------------------- */
  const searchPanel = document.querySelector(".search");
  let menuToggle = document.querySelector(".menu-tog");
  let temp = 0;

  function toggleMenu() {
    temp++;
    if (temp % 2 == 0) {
      console.log("pair");
      searchInput.blur();
      searchPanel.classList.remove("search--view");
      menuToggle.classList.remove("ready");
    } else {
      console.log("impair");

      setTimeout(() => {
        searchInput.focus();
      }, 1000);
      searchPanel.classList.add("search--view");
      menuToggle.classList.add("ready");
    }
  }

  /* ------------------------------------------------
                    EVENT LISTENERS
  --------------------------------------------------- */
  searchInput.addEventListener("input", autocomplete);
  darkMode.addEventListener("click", toggleTheme);
  menuToggle.addEventListener("click", toggleMenu);
  // temp++;
  // if (temp % 2 == 0) {
  //   console.log("pair");
  //   searchInput.blur();
  //   searchPanel.classList.remove("search--view");
  //   menuToggle.classList.remove("ready");
  // } else {
  //   console.log("impair");

  //   setTimeout(() => {
  //     searchInput.focus();
  //   }, 1000);
  //   searchPanel.classList.add("search--view");
  //   menuToggle.classList.add("ready");
  // }
  // console.log(temp);

  // setTimeout(() => {
  //   searchInput.focus();
  // }, 1000);
  // searchPanel.classList.toggle("search--view");
  // menuToggle.classList.toggle("ready");
  // });
});
