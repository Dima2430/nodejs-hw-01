import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const getAllContacts = async () => {
  const existingContacts = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(existingContacts);
  return contacts;
};

console.log(await getAllContacts());
