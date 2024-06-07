import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const existingContacts = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(existingContacts);

    if (contacts.length === 0) {
      console.log('No contacts to delete.');
      return;
    }

    const contactsToDelete = Math.floor(contacts.length / 2);

    for (let i = 0; i < contactsToDelete; i++) {
      const randomIndex = Math.floor(Math.random() * contacts.length);
      contacts.splice(randomIndex, 1);
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log(
      'Thanos snap completed. Half of the contacts have been deleted.',
    );
  } catch (error) {
    console.error('Error processing Thanos snap:', error);
  }
};

await thanos();
