import { EventEmitter } from 'events';

class ContactStore extends EventEmitter {
  constructor() {
    super();
    this.contacts = [];
  }

  getAll() {
    return this.contacts;
  }

  addContact(contact) {
    this.contacts.push(contact);
    this.emit('change');
  }

  deleteContact(id) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    this.emit('change');
  }
}

const contactStore = new ContactStore();

export default contactStore;