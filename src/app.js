/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".domain").innerHTML = generateDomain();
};

let generateDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let tld = [".com", ".net", ".us", ".es"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let tldIndex = Math.floor(Math.random() * tld.length);

  return (
    pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + tld[tldIndex]
  );
};
