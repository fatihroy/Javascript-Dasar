// latihan if else
no_angkot = 1
jumlah_angkot = 10
angkotYangBeroperasi = 6

for (let index = no_angkot; index <= jumlah_angkot; index++) {
    
    if(index === angkotYangBeroperasi){
        console.log("Angkot No. ", index, " sedang beroperasi dengan baik")
    } 
    else {
        console.log("Angkot No. ", index, " sedang tydak beroperasi")
    }

    
}