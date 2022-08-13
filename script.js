let carbsPer100 = document.getElementById("carbsPer100").value;
let gramsOnScale = document.getElementById("gramsOnScale").value;
let insulinRatio = document.getElementById("insulinRatio").value;

document.getElementById("calculate").addEventListener("click", (carbsPer100, gramsOnScale, insulinRatio) => {
    let carbsPerGram = carbsPer100 / 100;
    let totalCarbs = carbsPerGram * gramsOnScale;
    let insulinRequired = (insulinRatio / 10) * totalCarbs;

    alert(`Total Carbs(g): ${totalCarbs}\nInsulin Required(units): ${insulinRequired}`);
});
