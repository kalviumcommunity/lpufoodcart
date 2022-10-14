document.querySelectorAll(".logo").forEach(elt => {
  elt.onclick = () => {
    window.location = "https://foodfolio.github.io/"
  }
})

let analyticScript = document.createElement("script");
analyticScript.setAttribute("src", "https://cdn.splitbee.io/sb.js")
document.body.append(analyticScript)