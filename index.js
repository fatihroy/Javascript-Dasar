jumlah_angkot = 20;
jumlah_beroperasi = 19;
no_angkot = 1;

while(no_angkot <= jumlah_beroperasi) {
    console.log("angkot No. ", no_angkot, " beroperasi dengan baik");
    no_angkot++;
}

for ( no_angkot = jumlah_beroperasi + 1; no_angkot <= jumlah_angkot ; no_angkot++) {
    console.log("angkot No. ", no_angkot, " sedang tydak beroperasi");
  
}
