import React from "react";

const makanans = [
    {
        nama: 'Soto',
        harga: 12000
    },
    {
        nama: 'Sate',
        harga: 10000
    },
    {
        nama: 'Nasi Sop',
        harga: 13000
    },
    {
        nama: 'Ayam Lalapan',
        harga: 15000
    },
    {
        nama: 'Ayam Geprek',
        harga: 14000
    },
]

//Reduce (Menghitung Total Harga)
const total_bayar = makanans.reduce((total_harga, makanan) => {
    return total_harga+makanan.harga;
}, 0);

const Map = () => {
    return (
        <div>
            <h2>Map</h2>
            <ul>
                {makanans.map((makanan) => (
                    <li>{makanan.nama} - Harga {makanan.harga}</li>
                ))}
            </ul>
            <h2> Total Harga Makanan :  { total_bayar }</h2>
               

            <h2>Makanan yang lebih dari 13k</h2>
            <ul>
                {makanans.filter((makanan) => makanan.harga > 13000).map((makanan, index) => ( 
                    <li>{makanan.nama} - Harga {makanan.harga}</li>
                ))}
            </ul>
        </div>
    )
}

export default Map