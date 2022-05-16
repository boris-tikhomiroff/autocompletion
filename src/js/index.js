document.addEventListener("DOMContentLoaded", () => {
  let searchButton = document.querySelector("input[type=submit]");
  let searchInput = document.querySelector("input[type=text]");
  // let result = document.querySelector(".result");
  let specificResult = document.querySelector("ul");
  let approximateResult = document.querySelector("ul:not(ul:first-child)");
  const form = document.querySelector("form");
  // let allResult = [];
  // console.log(form);
  // console.log(specificResult);
  // console.log(approximateResult);

  function cleanSearch() {
    while (specificResult.hasChildNodes()) {
      specificResult.innerHTML = "";
      approximateResult.innerHTML = "";
    }
  }

  function autocomplete() {
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
        cleanSearch();

        if (response.length == 0) {
          let resultNotFound = document.createElement("li");
          resultNotFound.innerHTML = "No results found.";
          // console.log("no result");
          cleanSearch();
          specificResult.appendChild(resultNotFound);
        }

        for (let i in response) {
          let title = response[i].titre.toLowerCase();
          let allResult = [];

          if (title.startsWith(searchInput.value)) {
            const a = document.createElement("a");
            let resultFind = document.createElement("li");
            a.href = "element.php?id=" + response[i].id;
            a.innerHTML = title;
            specificResult.appendChild(resultFind);
            resultFind.appendChild(a);

            // allResult.length = 0;
            // allResult.push(response[i].id);
            // console.log(allResult);
          } else {
            const a = document.createElement("a");
            let resultFind = document.createElement("li");
            a.href = "element.php?id=" + response[i].id;
            a.innerHTML = title;
            approximateResult.appendChild(resultFind);
            resultFind.appendChild(a);
          }

          // Supprime toutes les list quand input vide
          if (searchInput.value == "") {
            cleanSearch();
          }
        }
      })
      .catch((e) => {
        console.log(e.toString());
      });
  }

  function displayResult() {}

  searchInput.addEventListener("input", () => {
    autocomplete();
  });
});
