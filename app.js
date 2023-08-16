const API_URL = "https://catfact.ninja/fact";
const factTextEl = document.getElementById("fact-text");
const randomGenerateBtnEl = document.getElementById("generate-btn");

randomGenerateBtnEl.addEventListener("click", async () => {
  let object = await fetchData();
  factTextEl.textContent = object.fact;
});

async function fetchData() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch {
    console.log("ERROR");
  }
}
