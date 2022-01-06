// latihan else if
no_angkot = 1
jumlah_angkot = 10
angkotYangBeroperasi = 6
angkotYangLembur1 = 8
angkotYangLembur2 = 10
angkotYangLembur3 = 5

for (index = no_angkot; index <= jumlah_angkot; index++) {

    if (index === angkotYangLembur1 || index === angkotYangLembur2 || index === angkotYangLembur3 ) {
        console.log("Angkot No. ", index, " sedang lembur")
    
    }
   else if (index <= angkotYangBeroperasi) {
       console.log("Angkot No. ", index, " sedang beroperasi dengan baik")
   } 
  
    else{
        console.log("Angkot No. ", index, " sedang tydak beroperasi")
    }
}
