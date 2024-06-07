import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const removeAllContacts = async () => {
  await fs.writeFile(PATH_DB, '[]', 'utf-8');
};

await removeAllContacts();
