// Қўшимча маълумот тугмаси учун JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const moreButton = document.getElementById("moreBtn");
  const extraSection = document.getElementById("extra");
  const statusText = document.getElementById("status");

  if (!moreButton || !extraSection || !statusText) return;

  moreButton.addEventListener("click", () => {
    const willOpen = extraSection.classList.contains("hidden");
    extraSection.classList.toggle("hidden", !willOpen);
    moreButton.textContent = willOpen ? "Яшириш" : "Қўшимча маълумот";
    statusText.textContent = willOpen
      ? "Қўшимча маълумот очилди."
      : "Қўшимча маълумотни очишингиз мумкин.";
  });
});
