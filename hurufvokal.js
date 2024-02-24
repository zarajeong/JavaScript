function gantiHurufVokal(kata, hurufPengganti, jumlahMinimal) {
  let hurufVokal = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];

  for (let i = 0; i < kata.length; i++) {
    if (hurufVokal.indexOf(kata[i]) !== -1) {
      kata = kata.substring(0, i) + hurufPengganti + kata.substring(i + 1);
    }
  }
  return kata;
}

function checkVokal() {
  let kataAsli = document.getElementById("kata-sebenarnya").value;
  let hurufPengganti = document.getElementById("huruf-pengganti").value;
  let kataBaru = gantiHurufVokal(kataAsli, hurufPengganti);
  // let kataBaru= kataAsli.replace(/[aiueoAIUEO]/g, "o"); //regex
  document.getElementById("hasilPerubahan").innerText =
    "Perubahan: " + kataBaru;
}

document.getElementById("kata-sebenarnya").addEventListener("input",function(even){
  console.log(even)
})