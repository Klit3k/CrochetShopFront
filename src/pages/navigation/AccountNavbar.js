import {useEffect, useState} from 'react'
import { Link, useOutletContext } from 'react-router-dom';
import GetUser from '../shopping/fetchers/getUser';
import AddAddress from '../shopping/components/credentials/AddAddress'
import axios from 'axios'
import Cookies from 'universal-cookie';

const AccountNavbar = () => {
    const [client, setClient] = useState(null);
    const [validData, setValidData] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [reload, setReload] = useState(false);
    const [sent, setSent] = useState(false);
    const [errorInfo, setErrorInfo] = useState("")
    const [state, setState] = useState(false);
    const [modalContent, setContent] = useState(
        {city: "",
        street: "",
        postalCode: "",
        houseNumber: ""}); 
    var getById = async () => {
        var cookie = new Cookies().get("session")
        if(cookie == undefined) return;
        setState(false);
        await axios.get("http://localhost:8080/client-by-email", {
            params: {
                email: cookie.email
            }
        })
        .then((response) => 
        {
            response.data.orders.map(order => {
                switch(order.status) {
                  case 'PENDING':
                    order.status = "W trakcie realizacji";
                    break;
                  case 'WAITING_FOR_CONFIRMATION':
                    order.status = "Oczekiwanie na płatność";
                    break;
                  case 'COMPLETED':
                    order.status = "Zrealizowane";
                    break;
                  case 'CANCELED':
                    order.status = "Anulowane";
                    break;
                }
              })
            setClient(response.data);
        }).catch(err => { 
            switch(err.response.status) {
                case 404:
                    console.log("User not found."+err)
                    break;
                default:
                    console.log("Something went wrong."+err)
                    break;
            }
        })
        setState(true);

    };
    const hideModal = () => {
        setContent({content: ""});
        setValidData(true)
        setIsOpen(false);
        setReload(!reload)
    };     
    const updateData = async () => {
        await axios.post("http://localhost:8080/add-address", null, {
            params: {
                clientId: client.id,
                city: modalContent.city,
                street: modalContent.street,
                postalCode: modalContent.postalCode,
                houseNumber: modalContent.houseNumber,
            }
        })
        .then(response => {
          setSent(true);
        })
        .catch( err => {
          switch (err.response.status) {
            default:
                setSent(false);
              break;
         }
        });
    };
    const handleSubmit = () => {
        if(modalContent.city === "" || modalContent.street === "" || modalContent.postalCode === "" || modalContent.houseNumber === "") {
            setErrorInfo("Uzupełnij formularz.")
            setValidData(false)
            console.log("pusty")
        } else {
            updateData();
            hideModal();
            setContent(
                {city: "",
                street: "",
                postalCode: "",
                houseNumber: ""}); 
        }
    }; 
    const handleInputChange = (event) => {
        const value = event.target.value;
        setContent({
          ...modalContent,
          [event.target.name]: value
       })
    };

    useEffect(() => {
        getById();
    }, [errorInfo, reload])
   const renderSwitch = (param, o) => {
        switch(param) {
          case "Zrealizowane":
            return "Zapłacono :)";
          case "Anulowane":
            return "Anulowano";
          default:
            return <><a href={o.redirectUri}>Zapłać</a></>
        }

      }
//   const { client, loaded} = useOutletContext();
  return !client ? null :  (<>
    <div className='container mt-5'>
        <div className='mx-auto d-flex justify-content-center'>

            <div className='row'>
            <h2 className='mb-4'>{`Witaj, ${client.name}`}</h2>

            {/* Contact */}
            <div className='container border mb-5'>
                <div className='text-center mt-3'>
                <h4 >Dane kontaktowe</h4>
                <hr/>
            </div>
            
            <div className='row'>
                <div className='col-sm mb-3 '>
                    <ul className="list-group ">
                        <li className="list-group-item">
                            <div className='text-left'><b>Imię:</b> {client.name} </div>
                        </li>
                        <li className="list-group-item">
                            <div className='text-left'><b>Nazwisko:</b> {client.surname} </div>
                        </li>
                        <li className="list-group-item">
                            <div className='text-left'><b>Email:</b> {client.email} </div>
                        </li>
                        <li className="list-group-item">
                            <div className='text-left'><b>Numer telefonu:</b> {client.phone} </div>
                        </li>
                    </ul>
                </div>
                { client.address !== undefined ? (
                <div className='col-md'>
                <ul className="list-group ">
                        <li className="list-group-item">
                            <div className='text-left'><b>Miasto:</b> {client.address.city} </div>
                        </li>
                        <li className="list-group-item">
                            <div className='text-left'><b>Kod pocztowy:</b> {client.address.postalCode} </div>
                        </li>
                        <li className="list-group-item">
                            <div className='text-left'><b>Ulica:</b> {client.address.street} </div>
                        </li>
                        <li className="list-group-item">
                            <div className='text-left'><b>Numer budynku:</b> {client.address.houseNumber} </div>
                        </li>
                    </ul>
                </div>
                ) :
                (
                    <div className='col-md'>
                <ul className="list-group ">
                        <li className="list-group-item">
                            <div className='text-left'><b>Miasto:</b> - </div>
                        </li>
                        <li className="list-group-item">
                            <div className='text-left'><b>Kod pocztowy:</b> - </div>
                        </li>
                        <li className="list-group-item">
                            <div className='text-left'><b>Ulica:</b> - </div>
                        </li>
                        <li className="list-group-item">
                            <div className='text-left'><b>Numer budynku:</b> - </div>
                        </li>
                    </ul>
                </div>
                )
                }
            </div>
                
            {/* Orders */}
            <div className='container text-center mb-5'>
            <h4 className='mt-3'>Twoje zamówienia <hr/></h4>
            <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Identyfikator</th>
                                <th scope="col">Link do zapłaty</th>
                                <th scope="col">Status zamówienia</th>
                                <th scope="col">Kwota</th>
                                <th scope="col">Szczegóły</th>
                                </tr>
                            </thead>
            {client.orders && Array.from(client.orders).map(order => {
                        return (
                        <>
                            <tbody >
                                <tr >
                                <th scope="row">{order.id}</th>
                                <td>
                                    {
                                        renderSwitch(order.status, order)
                                    }
                                </td>
                                <td>{`${(order.status).charAt(0).toUpperCase()}${order.status.slice(1).toLowerCase()}`}</td>
                                <td>{order.value} zł</td>
                                <td><Link to={{
                                    pathname: "./order/"+order.payuOrderId,
                                    state: {test: 'order'}
                                }}>Zobacz</Link></td>
                                </tr>
                            </tbody>
                        </>
                        )
                })
            }
            </table>
            </div>
            {/* Settings */}
            <div className='container text-center mb-5'>
                <div className='text-center mt-3'>
                <h4 >Ustawienia konta</h4><hr/>
                </div>
                <div className='d-flex flex-row justify-content-center '>
          
                <button className='btn btn-outline-dark col-2 mx-2'>Zmień dane kontaktowe</button>
                
           
                { client.address === undefined ? (<AddAddress 
                        handleSubmit={handleSubmit}
                        hideModal={hideModal}
                        content={modalContent.content}
                        handleInputChange={handleInputChange}
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                        validData={validData}
                        errorInfo={errorInfo}
                        text={"Edytuj adres"}
                        /> ) : 
                                                 (<AddAddress 
                                                    handleSubmit={handleSubmit}
                                                    hideModal={hideModal}
                                                    content={modalContent.content}
                                                    handleInputChange={handleInputChange}
                                                    setIsOpen={setIsOpen}
                                                    isOpen={isOpen}
                                                    validData={validData}
                                                    errorInfo={errorInfo}
                                                    text={"Dodaj adres"}
                                                    /> )
                }
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
    </>)
}

export default AccountNavbar