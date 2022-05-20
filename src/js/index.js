document.addEventListener("DOMContentLoaded", () => {
  let searchButton = document.querySelector("input[type=submit]");
  let searchInput = document.querySelector("input[type=text]");
  let result = document.querySelector(".search__result");
  let specificResult = document.querySelector("ul");
  let approximateResult = document.querySelector("ul:not(ul:first-child)");

  /* ------------------------------------------------
                    AUTOCOMPLETE
  --------------------------------------------------- */
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
              function createSuggestion() {
                const link = document.createElement("a");
                let resultFind = document.createElement("li");
                link.href = "element.php?id=" + response[i].id;
                link.innerHTML = capitalizeFirstLetter(title);
                specificResult.appendChild(resultFind);
                resultFind.appendChild(link);
              }
              if (title.startsWith(value)) {
                createSuggestion();
              } else {
                createSuggestion();
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
  const toggle = document.querySelector(".toggle");

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
  let flyOver = document.querySelectorAll(".flyOver");
  // console.log(flyOver);

  function cursorFollower() {
    document.addEventListener("mousemove", (ev) => {
      cursor.style.top = ev.clientY + "px";
      cursor.style.left = ev.clientX + "px";
    });

    for (let i = 0; flyOver.length; i++) {
      flyOver[i].addEventListener("mouseover", (ev) => {
        cursor.classList.add("cursor__big");
      });

      flyOver[i].addEventListener("mouseleave", (ev) => {
        cursor.classList.remove("cursor__big");
      });
    }
  }

  function loop() {
    cursorFollower();
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  /* ------------------------------------------------
                    SEARCHBAR
  --------------------------------------------------- */
  // const searchToggle = document.querySelector(".in");
  // const closeToggle = document.querySelector(".off");
  const searchPanel = document.querySelector(".search");
  let togle = false;

  // searchToggle.addEventListener("click", () => {
  //   searchPanel.style.right = "0%";
  // });

  // closeToggle.addEventListener("click", () => {
  //   searchPanel.style.right = "-100%";
  // });

  let menuToggle = document.querySelector(".menu-tog");
  menuToggle.addEventListener("click", () => {
    // searchPanel.style.right = "0%";
    searchPanel.classList.toggle("search--view");
    menuToggle.classList.toggle("ready");
  });

  /* ------------------------------------------------
                    EVENT LISTENERS
  --------------------------------------------------- */
  searchInput.addEventListener("input", autocomplete);
  toggle.addEventListener("click", toggleTheme);
});
