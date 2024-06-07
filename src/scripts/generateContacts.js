import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const existingContacts = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(existingContacts);

  for (let i = 0; i < number; i += 1) {
    contacts.push(createFakeContact());
  }
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
