// program pengelolaan angkot 

 // bikin array penumpang
penumpang = []
var tambahpenumpang = function (nama_penumpang, penumpang) {
    // jika kursi kosong tambah penumpang
    if (penumpang.length == 0) {
        penumpang.push(nama_penumpang)
        return penumpang
    }

    // jika kursi tidak kosong
    else{
    // penelusuran penumpang 
   for (var i = 0; i <= penumpang.length; i++) {

    // jika kusinya kosong
       if (penumpang[i] === undefined) {
        //  tambah penumpang dikursi tersebut
           penumpang[i] = nama_penumpang
        //    kembalikan array
        return penumpang
       }
       else if (penumpang[i] == nama_penumpang) {
        //    pesan kesalahan
        console.log(nama_penumpang+ ' sudah ada didalam angkot')
        // kembalikan nilai
        return penumpang
       }
    //   jika seluruh kursi terisi
    else if(i == penumpang.length-1){
        penumpang.push(nama_penumpang)
        return penumpang
    }
   }
}
}

var hapuspenumpang = function (nama_penumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        console.log('tidak ada penumpang didalam angkot')
        return penumpang
    }
    else{
        for ( index = 0; index < penumpang.length; index++) {
            if (nama_penumpang == penumpang[index]) {
                console.log(nama_penumpang, ' turun dari angkot')
                penumpang[index] = undefined
                return penumpang
            }
          else if (index == penumpang.length - 1) {
            console.log(nama_penumpang, ' tidak ada di angkot')
            return penumpang
          }
        }
    }
}
    

