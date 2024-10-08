export function tambah(a, b) {
    if (typeof a === 'string' || typeof b === 'string') throw new Error('Tidak bisa di tambah menggunakan string')
    return a + b;
}

export function kali(a, b) {
    if (typeof a === 'string' || typeof b === 'string') throw new Error('Tidak bisa di kali menggunakan string')
    return a * b;
}

export function kurang(a, b) {
    if (typeof a === 'string' || typeof b === 'string') throw new Error('Tidak bisa di kurang menggunakan string')
    return a - b;
}

export function bagi(a, b) {
    if (typeof a === 'string' || typeof b === 'string') throw new Error('Tidak bisa di bagi menggunakan string')
    if (b === 0) {
        throw new Error('Tidak bisa membagi dengan nol');
    }
    return a / b;
}
