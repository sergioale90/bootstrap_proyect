fetch("../../bootstrap_projects/components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  });
