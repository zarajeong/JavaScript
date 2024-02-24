const bahasaIndonesia = 90,
  bahasaInggris = 92,
  mtk = 85,
  ipa = 87;
  const average = (bahasaIndonesia + bahasaInggris + mtk + ipa) / 4;

// validasi nilai
if (bahasaIndonesia === undefined || bahasaInggris === undefined || 
    mtk === undefined || ipa === undefined) {
        console.log("Semua nilai harus diisi!")
    }

    else if (typeof bahasaIndonesia !== 'number' || typeof bahasaInggris !== 'number' ||
             typeof mtk !== 'number' || typeof ipa !== 'number') {
                console.log("Harus berupa nilai!")
             }

      else if (average >= 90) {
        console.log("Grade = A");
      } else if (average >= 80 && average < 90) {
        console.log("Grade = B");
      } else if (average >= 70 && average < 80) {
        console.log("Grade = C");
      } else if (average >= 60 && average < 70) {
        console.log("Grade = D");
      } else if (average >= 0 && average < 60) {
        console.log("Grade = E");
      }
      console.log(`Rata-rata = ${average}`)