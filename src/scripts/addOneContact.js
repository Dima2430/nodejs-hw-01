import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  let contacts = [];
  try {
    const existingContacts = await fs.readFile(PATH_DB, 'utf-8');
    contacts = JSON.parse(existingContacts);
  } catch (error) {
    console.log(error);
  }

  contacts.push(createFakeContact());

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    console.log(error);
  }
};

await addOneContact();
