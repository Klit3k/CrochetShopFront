import React from 'react'
import {Trash3Fill, ArrowRight} from 'react-bootstrap-icons'

const Cart = () => {
    return (
        <>
            <div class="container mt-5">
                <div className="mx-auto">
                    <div>
                        <h3> Koszyk </h3>
                    </div>
                    <table class="table table-hover">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Produkt</th>
                                <th scope="col">Nazwa</th>
                                <th scope="col">Cena</th>
                                <th scope="col">Usuń</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center align-middle'>
                                <td className='col-md-3'>
                                    <img className='img-fluid img-thumbnail' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSIIxN976Bcr6f8QU7mUM_f5DDbR-goMyMQ&usqp=CAU'/>
                                </td>
                                <td className='col-md-3 ' >Puszka pepsi</td>
                                <td className='col-sm-2 '>10 zł</td>
                                <td className='col-sm-1'><button className='btn btn-outline-dark'><Trash3Fill className='mb-1'/></button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='d-flex justify-content-end'>
                        <p>Łączna kwota do zapłaty: <b> 0 zł</b></p>
                    </div>
                    <div className='d-flex justify-content-end'>
                    <button className='btn btn-success '> Zamów z obowiązkiem zapłaty <ArrowRight className='mb-1' size={23}/> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
