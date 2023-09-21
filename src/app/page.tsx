'use client'
import React, { useState } from 'react';
import {motion} from 'framer-motion'

interface Contact {
  firstName: string;
  lastName: string;
  phone: string;
}

export default function Home() {
  const initialContact: Contact = {
    firstName: '',
    lastName: '',
    phone: '',
  };

  const [contact, setContact] = useState<Contact>(initialContact);
  const [contactList, setContactList] = useState<Contact[]>([]);

  const handleAddContact = (event: React.FormEvent) => {
    event.preventDefault();
    if (contact.firstName && contact.lastName && contact.phone) {
      setContactList([...contactList, contact]);
      setContact(initialContact);
    } else {
      alert('Please fill in all fields before adding a contact.');
    }
  };

  return (
    <main className="flex justify-center flex-col items-center w-full px-4">
      <p className="mt-4">
        <strong>Add a new contact:</strong>
      </p>
      <div className="mt-2 flex  flex-col max-w-[1200px] ">
        <form onSubmit={handleAddContact} className='flex flex-col  items-end'>
          <label className="font-semibold p-4">
            First Name :{' '}
            <input
              className="rounded-full text-neutral-500 px-2"
              type="text"
              placeholder="Enter your first name"
              required
              minLength={3}
              maxLength={12}
              value={contact.firstName}
              onChange={(e) =>
                setContact({ ...contact, firstName: e.target.value })
              }
            />
          </label>
          <label className="font-semibold p-4">
            Last Name :{' '}
            <input
              className="rounded-full text-neutral-500 px-2"
              type="text"
              placeholder="Enter your last name"
              required
              value={contact.lastName}
              onChange={(e) =>
                setContact({ ...contact, lastName: e.target.value })
              }
            />
          </label>
          <label className="font-semibold p-4  ">
            Phone :{' '}
            <input
              className="rounded-full text-neutral-500 px-2 "
              type="tel"
              placeholder="Enter your phone number"
              required
              value={contact.phone}
              onChange={(e) =>
                setContact({ ...contact, phone: e.target.value })
              }
            />
          </label>
          <button type="submit" className="ml-2 bg-blue-500 px-4 rounded-full max-w-[200px] mr-4  ">
            Add contact
          </button>
        </form>
      </div>
   
      {/* Conditionally display "No contacts" message */}
      {contactList.length === 0 ? (
        <h1 className='mt-8 text-xl font-semibold'>No contacts yet!</h1>
      ) : (
        <div className="flex flex-col max-w-[600px]  ">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
              <div className="overflow-hidden ">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        First Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Phone number
                      </th>
                    </tr>
                  </thead>
                  <tbody className=''>
                    {contactList.map((contact, index) => (
                      <motion.tr
                      initial={{opacity:0,y:500}}
                      animate={{opacity:1,y:0}}
                        key={index}  
                        className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700 rounded-xl"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {contact.firstName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-x-2">
                          {contact.lastName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                        <a href={`tel:${contact.phone}`} target="_blank">
                            {contact.phone}
                          </a>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
   
    </main>
  );
}
