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
              if (title.startsWith(value)) {
                // createSuggestion();
                const link = document.createElement("a");
                let resultFind = document.createElement("li");
                link.href = "element.php?id=" + response[i].id;
                link.classList.add("flyOver");
                link.innerHTML = capitalizeFirstLetter(title);
                specificResult.appendChild(resultFind);
                resultFind.appendChild(link);
              } else {
                // createSuggestion();
                const link = document.createElement("a");
                let resultFind = document.createElement("li");
                link.href = "element.php?id=" + response[i].id;
                link.classList.add("flyOver");

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
    }
  }

  const cursor = document.querySelector(".cursor");
  let flyOver = document.querySelectorAll(".flyOver");

  let currentMouseX = 0;
  let currentMouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;
  let speed = 0.1;

  const animate = () => {
    currentMouseX += (targetMouseX - currentMouseX) * speed;
    currentMouseY += (targetMouseY - currentMouseY) * speed;

    cursor.style.left = `${currentMouseX}px`;
    cursor.style.top = `${currentMouseY}px`;

    flyOver.forEach((el) => {
      el.addEventListener("mouseover", (ev) => {
        cursor.classList.add("cursor--big");
      });

      el.addEventListener("mouseleave", (ev) => {
        cursor.classList.remove("cursor--big");
      });
    });

    requestAnimationFrame(animate);
  };

  const setCursorPositionAndTargetPosition = (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    targetMouseX = e.pageX;
    targetMouseY = e.pageY;
  };

  animate();

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
  document.addEventListener("mousemove", setCursorPositionAndTargetPosition);
});
