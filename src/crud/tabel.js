import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ makanans, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Makanan</th>
          <th>Harga</th>
          <th>Deskripsi</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {makanans.map((makanan, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>Rp. {makanan.harga}</td>
              <td>{makanan.deskripsi}</td>
              <td>
                <button
                  className="btn btn-warning mr-2"
                  onClick={() => editData(makanan.id)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger "
                  onClick={() => hapusData(makanan.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
