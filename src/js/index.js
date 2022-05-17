document.addEventListener("DOMContentLoaded", () => {
  let searchButton = document.querySelector("input[type=submit]");
  let searchInput = document.querySelector("input[type=text]");
  let result = document.querySelector(".result");
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
              if (title.startsWith(value)) {
                // console.log("startsWith");
                const link = document.createElement("a");
                let resultFind = document.createElement("li");
                link.href = "element.php?id=" + response[i].id;
                link.innerHTML = capitalizeFirstLetter(title);
                specificResult.appendChild(resultFind);
                resultFind.appendChild(link);
              } else {
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
  const toggle = document.querySelector(".toggle");

  function toggleTheme() {
    let page = document.querySelector(".page");
    if (page.dataset.theme == "" || page.dataset.theme == "light") {
      page.setAttribute("data-theme", "dark");
    } else {
      page.setAttribute("data-theme", "light");
    }
  }

  /* ------------------------------------------------
                    EVENT LISTENERS
--------------------------------------------------- */
  searchInput.addEventListener("input", autocomplete);
  toggle.addEventListener("click", toggleTheme);
});
