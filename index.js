// latihan else if
no_angkot = 1
jumlah_angkot = 10
angkotYangBeroperasi = 6
angkotYangLembur = 8

for (index = no_angkot; index <= jumlah_angkot; index++) {

   if (index <= angkotYangBeroperasi) {
       console.log("Angkot No. ", index, " sedang beroperasi dengan baik")
   } 
    else if (index === angkotYangLembur) {
        console.log("Angkot No. ", index, " sedang lembur")
    }
    else{
        console.log("Angkot No. ", index, " sedang tydak beroperasi")
    }
}
