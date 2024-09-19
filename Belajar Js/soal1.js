function akarPangkatDua(x) {
    // Cek jika x kurang dari 0
    if (x < 0) {
        return "Tidak bisa input bilangan negatif";
    }

    // Cek jika x bilangan ganjil
    if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil";
    }

    // Jika valid, hitung akar pangkat dua
    return Math.sqrt(x);
}

// Contoh penggunaan
console.log(akarPangkatDua(16)); // Output: 4
console.log(akarPangkatDua(-4)); // Output: "Tidak bisa input bilangan negatif"
console.log(akarPangkatDua(9));  // Output: "Tidak bisa input bilangan ganjil"
