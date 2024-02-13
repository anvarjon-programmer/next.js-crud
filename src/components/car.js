import React, { Fragment, useState } from 'react'
import { Table } from 'react-bootstrap/Table';

export default function Car() {
    const [data, setData] = useState([
        { id: 1, name: "BWM", color: "red", price: 22 }
    ]);

    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({ name: '', color: '', price: '' });

    const handleForm = (e) => {
        e.preventDefault();

        const newName = e.target.name.value.trim();
        const newColor = e.target.color.value.trim();
        const newPrice = e.target.price.value.trim();

        if (newName !== '' && newColor !== '' && newPrice !== '') {
            const newUser = {
                id: data.length + 1,
                name: newName,
                color: newColor,
                price: newPrice,
            };

            setData([...data, newUser]);
            e.target.reset(); 
        }
    };

    const handleEdit = (id) => {
        setEditId(id);
        const userData = data.find(user => user.id === id);
        setEditData({ name: userData.name, color: userData.color, price: userData.price });
    };

    const handleSave = (id) => {
        const updatedData = data.map(user => {
            if (user.id === id) {
                return { id, ...editData };
            }
            return user;
        });
        setData(updatedData);
        setEditId(null);
        setEditData({ name: '', color: '', price: '' });
    };

    const handleDelete = (id) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
    };

    return (
        <Fragment>
            <div className='container'>
                <div style={{ width: "400px", marginTop: "50px" }}>
                    <form onSubmit={handleForm} className='mb-3 form'>
                        <input className='form-control mt-3 ' name='name' type='text' placeholder='Name' />
                        <input className='form-control mt-3' name='color' type='text' placeholder='Color' />
                        <input className='form-control mt-3' name='price' type='text' placeholder='Price' />
                        <button type='submit' className='btn btn-success'>Add</button>
                    </form>
                </div>

                <table style={{ width: "900px", marginTop: "50px" }} className="users table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length ? (
                            data.map((user, index) => (
                                <tr key={index}>
                                    <td>{editId === user.id ? <input className='form-control ' value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} /> : user.name}</td>
                                    <td>{editId === user.id ? <input className='form-control ' value={editData.color} onChange={(e) => setEditData({ ...editData, color: e.target.value })} /> : user.color}</td>
                                    <td>{editId === user.id ? <input className='form-control ' value={editData.price} onChange={(e) => setEditData({ ...editData, price: e.target.value })} /> : user.price}</td>
                                    <td>
                                        {editId === user.id ? (
                                            <button className="btn btn-success" onClick={() => handleSave(user.id)}>Save</button>
                                        ) : (
                                                <>
                                                    <button className="btn btn-primary" onClick={() => handleEdit(user.id)}>Edit</button>
                                                    <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                                                </>
                                            )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">No Data</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
