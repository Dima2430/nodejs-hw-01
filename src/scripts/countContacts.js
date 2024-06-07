import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const countContacts = async () => {
  const existingContacts = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(existingContacts);
  return contacts.length;
};

console.log(await countContacts());
