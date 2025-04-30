import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getContact } from '../Data';

const ContactDetails = () => {

    let params = useParams();
    console.log(params)

    const [contactData, setContactData] = useState();

    useEffect(() => {
        let data = getContact(Number(params.contactId));
        console.log(data)

        setContactData(data)
    }, [params]);

    return (
        <div className='contactDetails'>
            <h2 className='subTitle'>Contact Details</h2>
            {
                contactData ? (
                    <ul className='contact'>
                        <ol>
                            <strong>Name:</strong> 
                            {contactData.name}
                        </ol>
                        <ol>
                            <strong>Number:</strong> 
                            {contactData.number}
                        </ol>
                        <ol>
                            <strong>Email:</strong> 
                            {contactData.email}
                        </ol>
                    </ul>
                ) : (
                    <span>There is no data available for given contact Id</span>
                )
            }
        </div>
    )
}

export default ContactDetails;