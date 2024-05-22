//TIPE DATA

//1. Undefined : tipe data yang tidak disebutkan nilainya
let nama;
    console.log (typeof (nama)); //output undefined

/*tambahkan typeof untuk mengetahui tipe data sebuah variabel
variabel nama di atas termasuk undefined karena tidak disebukant datanya
*/

//2. number : tipe data berbentuk angka
let angka = 12;
    console.log (angka); //outputnya 12
    console.log (typeof(angka)); //outputnya number

    //contoh lain
let a = 15;
let b = 10;
    console.log (a + b); //outputnya 25 penjumlahan pakai +
    console.log (a - b); //outputnya 5 pengurangan pakai -
    console.log (a * b); //outputnya 150 perkalian pakai *
    console.log (a / b); //outputnya 1.5 pembagian pakai /
    console.log (a % b); //outputnya 5 sisa hasil bagi pakai %

    //contoh lain
    //pengurangan dan penambahan nilai variabel
let nomor = 10;
    console.log (nomor); //outputnya 10
    console.log (nomor++); //outputnya tetap 10
    console.log (+nomor); //outputnya 11
    console.log (++nomor); //outputnya 12
    //tanda tambah itu bernilai 1 pada contoh di atas

//3. BigInt : tipe data number dengan cakupan nilai yang lebih besar
let bigInt = 123456789012345678901234567890;
    console.log (bigInt);
    console.log (typeof(bigInt)); //output tipe data di atas masih number

let nomorInt = 123456789012345678901234567890n; //tambahkan n untuk merubah tipe data jadi bigInt
    console.log(nomorInt);
    console.log(typeof (nomorInt)); // data di atas termasuk tipe bigInt
    
    /*operasi aritmatika dengan bigInt menggunakan desimal akan
    dibulatkan ke bawah*/

    console.log (5n / 2n); //output 2n buka 2.5 n

//4. String : tipe data teks dengan petik satu / dua
let kata = "aku"
    console.log(kata); //outputnya aku
    console.log (typeof(kata)); //outputnya string

    /* Contoh kasus
    jika terdapat tanda petik satu dan tanda petik dua dalam satu kalimat */

let ucapan = '"I think it\'s awesome!" he answered confidently'; 
    console.log(ucapan); 

    /*tambahkan garis miring terbalik \ pada kata yang terdapat tanda petik 
    agar tidak eror*/

    /*backslash juga berguna untuk mengabaikan simbol lain yang 
    menimbulkan ambigu di dalam string, 
    contohnya seperti backslash itu sendiri */

    console.log("Windows path: C:\\Program Files\\MyProject");
    //outpuntya Windows path: C:\Program Files\MyProject

    /*jika ingin menggabungkan 2 kata terpisah menjadi satu, tambahkan
    tanda (+) */
let panggil = 'woyy';
let sapaan = panggil + panggil;
    console.log (sapaan); //outputnya woyywoyy

    /*kita bisa menambahkan kalimat lain di dalam string 
    dengam menambahkan petik di bawah esc (` kalimat tambahan ${variabel{); */

let namaSaya = "muhammad fauzi";
    console.log (`Halo, perkenalkan ${namaSaya}`); //output Halo, perkenalkan muhammad fauzi

//5. Boolean : tipe data true/false
let dia = true;
let mereka = false;
    console.log (dia); //outputnya true
    console.log (mereka); //outputnya false

    console.log (typeof (dia)); //outputnya boolean
    console.log(typeof (mereka)); //outputnya boolean

    /*contoh lain menggunakan komparasi lebih besar (>) dan lebih kecil (<) */

const besar = 10;
const kecil = 5;

let lebihBesar = besar > kecil;
let lebihKecil = kecil > besar;

    console.log(lebihBesar); //outputnya true 
    console.log(lebihKecil); //outpunyat false karena kecil menggunakan tanda lebih besar
    
//6. Null : tipe data sementara / tidak ada
let benda = null;
    console.log(benda); //outputnya null

//7. Symbol : tipe data yang digunakan pada struktur data objek
let makhluk = Symbol ("id");
    console.log (makhluk); //outputnya Symbol (id)

// OPERATOR

/*Operator pada umumnya ialah tanda =
Contoh */

let j = 10;
let k = 5

j += k; // operator pada expression ini adalah tanda +=

    console.log(j); //outputnya 15

//1. Assignment Operator
/*Assignment operator adalah tanda diantara variabel dan nilai */

let x = 10;
let y = 5;
 
x += y; // artinya -> x = x + y; penjumlahan
x -= y; // artinya -> x = x - y; pengurangan
x *= y; // artinya -> x = x * y; perkalian
x /= y; // artinya -> x = x / y; pembagian
x %= y; // artinya -> x = x % y; bagi hasil

//2. Comparison Operator (operator perbandingan)

// (==)  fungsinya Membandingkan kedua nilai, tetapi mengabaikan tipe data.
// contoh
let bilanganA = 10;
let bilanganB = 10;
    console.log (bilanganA == bilanganB); //outputnya true
    console.log (typeof (bilanganA == bilanganB)); //outputnya boolean

// (!=)  Membandingkan kedua nilai yang tidak sama dan mengabaikan tipe data.
//contoh
let bilanganC = "7";
let bilanganD = 10;
    console.log (bilanganC != bilanganD); //outputnya true (boolean)

let bilanganE = 12;
let bilanganF = '10';
    console.log (bilanganE != bilanganF); //outputnya true (boolean)
    console.log (typeof (bilanganE == bilanganF)); //outputnya boolean

/* contoh di atas outpunya tetap true meskipun kedua variabel nilainya tidak sama 
dan tipe datanya berbeda */

// (===)   Membandingkan kedua nilai beserta tipe data.
//contoh
let bilanganG = "10";
let bilanganH = 5;
    console.log (bilanganG === bilanganH); /*outputnya false karena tipe datanya berbeda */

let bilanganI = 10;
let bilanganJ = 5;
    console.log (bilanganG === bilanganH); //Outputnya false karena nilai data berbeda

let bilanganK = 10;
let bilanganL = 10;
console.log (bilanganK === bilanganL); //outputnya true karea nilai dan tipe datanya sama

// (!==)   Membandingkan kedua nilai dan tipe data haruslah tidak sama.
//contoh
var bilanganM = 10;
var bilanganN = 10;
    console.log (bilanganM !== bilanganN); //outputnya false karena tipe datanya sama

var bilanganO = 12;
var bilanganP = "12";
    console.log (bilanganO !== bilanganP); /*outputnya true karena nilai datanya sama
    meskipun tipe datanya beda */

var bilanganQ = 3;
var bilanganR = "5";
    console.log (bilanganQ !== bilanganR); /*outputnya true meski nilai data dan tipe data
    berbeda */

// (>)   Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
//contoh
let bilanganS = 5;
let bilanganT = 6;
    console.log (bilanganS > bilanganT); //outputnya false
    console.log (bilanganT > bilanganS); //outputnya true

let bilanganU = 5;
let bilanganV = '3';
    console.log (bilanganU > bilanganV); //outputnya true meskipun tipe datanya beda

// (>=)  Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
//contoh
let bilanganW = 10;
let bilanganX = 5;
    console.log (bilanganW >= bilanganX); //outputnya true

let bilanganY = 10;
let bilanganZ = '10';
    console.log (bilanganY >= bilanganZ); //outputnya true meski tipe datanya beda

//(<)   Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua 
//contoh
let cinta1 = 5;
let cinta2 = 10;
    console.log (cinta1 < cinta2); //outputnya true
    console.log (cinta2 < cinta1); //outputnya false

let cinta3 = 5;
let cinta4 ='10';
    console.log (cinta3 < cinta4); //outputnya true meskipun tipe datanya beda

// (<=) Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.
//contoh
let cinta5 = 9;
let cinta6 = '10';
    console.log (cinta5 <= cinta6); //outputnya true meskipun tipe datanya beda

let cinta7 = 15;
let cinta8 = '15';
    console.log (cinta7 <= cinta8); //outputnya true

//3. Logical Operator
/* menggunakan kombinasi dari dua nilai boolean 
atau bahkan lebih dalam menetapkan logika. */

/* (&&) Operator dan (and). 
Logika akan menghasilkan nilai true 
apabila semua kondisi terpenuhi (bernilai true) */

let embun1 = 5;
let embun2 = 10;
    console.log (embun1 < 8 && embun2 > 7); //outputnya true karena semua nilainya benar
    console.log (embun2 < 5 && embun1 > 3); //outpurnya false karena embun2 bernilai salah

/* (||) Operator atau (or). 
Logika akan menghasilkan nilai true 
apabila ada salah satu kondisi terpenuhi (bernilai true) */

let angin1 = 10;
let angin2 = 20;
    console.log (angin1 > 5 || angin20 < 30); //outputnya true karena salah satu dari variabelnya benar

/* (!)  Not Operator
Not Operator berfungsi untuk membalikkan suatu kondisi
yang tadinya false menjadi true dan true menjadi false */

let gunung1 = 20;
let gunung2 = 30;
    console.log (!(gunung1 < 15)); //outputnya true, padahal harusnya false
    console.log (!(gunung2 > gunung1)); //outputnya false, padahal harusnya true

// IF / ELSE STATEMENT

/* If berfungsi menguji program. Jika true, program akan dijalankan
jika false, program tidak dijalankan */

var capek = true;
    console.log ("keadaan kondisi badan");
if (capek) {
    console.log ("jika capek, istirahat dulu"); 
} /* pernyataan ini keluar karena tertulis di awal true. 
Tapi jika tertulis false, maka pernyataan ini gak keluar */
    
    console.log ("badan enak kembali");

/* lalu bagaimana menjadlankan program dengan kondisi false, maka pakai else */

let uang = "100";
if (uang > 200) {
    console.log ("uang"); // uang 100 lebih besar 200 (false)
}
else {
    console.log ("uangnya kurang")
};

/* karena kondisi variabel uang lebih kecil dari 200, maka output yang keluar
adalah output else "uangnya kurang" */

/*menggunakan else if sekaligus */

let bayarUtang = 100;

if (bayarUtang < 100){
   console.log ("belom lunas"); // false , makanya gak keluar outputnya
}
else if (bayarUtang < 50) {
    console.log ("masih berhutang"); // false , makanya gak keluar outputnya
}
else if (bayarUtang >= 100) {
    console.log ("utang selesai");
}

/* output yang keluar ialah "utang selesai" karena kondisi lainnya 
kurang dari 100 */

// SWITCH CASE STATEMENT (pakai switch, case, break, dan default)
let sehat = "olahraga";
let dampak = "null";  //null tipe data yang nilainnya blm dimasukkan
    switch (sehat) {

        case "sering bergadang":
        dampak = "mata ngantuk";
        break;

        case "suka makan sembarangan":
        dampak = "sakit perut";
        break;

        case "olahraga":
        dampak = "badan bugar";
        break;
    
    default:   //default akan keluar pada output jika 3 case di atas tidak ada yg sama
        dampak = "badan enteng";
    }
        console.log (dampak); 
        /* outputnya "badan bugar" karena casenya sama dengan nilai
        olahraga pada variabel sehat */

    //contoh lain

let sukses = "belajar";
let upaya = "null";
    switch (sukses) {

        case "males baca":
        upaya = "tidak banyak pengetahuan";
        break;

        case "males coba hal baru":
        upaya = "minim pengalaman";
        break;

        case "tidak belajar":
        upaya = "bodoh";
        break;
    
    default:
        upaya = "baca buku, tambah pengalaman, tambah skill";
    }
        console.log (upaya); 
        /* outputnya ialah "baca buku, tambah pengalaman, tambah skill" karena
        3 case di atas tidak ada yang sama dengan variabel sukses, sehingga
        output yang keluar ialah default */
    
// LOOP
/* Loop ialah perulangan kode atau 
cara sederhana menampilkan data yang sama berkali-kali */

//1. For
    for (let kucing = 3; kucing < 5;){
        console.log (kucing);
    }

