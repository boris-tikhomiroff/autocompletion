document.addEventListener("DOMContentLoaded", () => {
  let searchButton = document.querySelector("input[type=submit]");
  let searchInput = document.querySelector("input[type=text]");

  searchInput.addEventListener("keyup", () => {
    // console.log(txt.value);

    fetch("SearchController.php", {
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
        // Faire action
        if (searchInput.value == 0) {
          console.log("veiller écrire");
        }
        // console.log(response);
      })
      .catch((e) => {
        console.log(e.toString());
      });
  });
});
