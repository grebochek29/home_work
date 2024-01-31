import contactStore from './ContactStore';

export function addContact(contact) {
  contactStore.addContact(contact);
}

export function deleteContact(id) {
  contactStore.deleteContact(id);
}