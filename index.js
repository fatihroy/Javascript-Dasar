// latihan objek 

function Angkot(nama_sopir, penumpang, trayek, kas) {
    this.nama_sopir = nama_sopir,
    this.penumpang = penumpang,
    this.trayek = trayek,
    this.kas = kas

    // bikin fungsi penumpang naik
    this.penumpangnaik = function (nama_penumpang) {
       this.penumpang.push(nama_penumpang)
        return this.penumpang
    }
    this.penumpangturun = function (nama_penumpang, bayar) {
        for ( index = 0; index < this.penumpang.length; index++) {
           if (this.penumpang[index] == nama_penumpang) {
              this.penumpang[index] = undefined
              this.kas += bayar
              return penumpang
           }
            else if (index == this.penumpang.length - 1) {
                console.log(nama_penumpang + ' turun dari angkot')
                return penumpang
            }
            
        }
    }
}

// bikin angkot
var angkot1 = new Angkot ('dedy', [] , 'krian-taman', 0)

