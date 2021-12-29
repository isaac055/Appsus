import {noteStorageService} from './note.storage.service.js'

export const noteService = {
  query
}


const STORAGE_KEY = 'NoteDB'

const gNotes = [
  {
    id: 'n101',
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint : false
  },
  {
    id: 'n102',
    type: 'note-img',
    info: { url: 'http://some-img/me', title: 'Bobi and Me' },
    style: { backgroundColor: '#00d' },
    importint : false
  },
  {
    id: 'n103',
    type: 'note-todos',
    info: {
      label: 'Get my stuff together',
      todos: [
        { txt: 'Driving liscence', doneAt: null },
        { txt: 'Coding power', doneAt: 187111111 },
      ],
    },
    importint : true
  },
];

_createNotes()

function query(filterBy = null) {
  const notes = _loadNotesFromStorage();
  if (!filterBy) return Promise.resolve(notes);
  const filteredNotes = _getFilteredNotes(notes, filterBy);
  return Promise.resolve(filteredNotes);
}

function _createNotes() {
  let notes = _loadNotesFromStorage();
  if (!notes || !notes.length) {
    notes = gNotes;
  }
  _saveNotesToStorage(notes);
}

function _getFilteredNotes(notes, filterBy) {
  let { importint } = filterBy;
  importint = importint ? true : false;
  return notes.filter((note) => {
    return (
      book.title.includes(title) &&
      book.listPrice.amount >= minPrice &&
      book.listPrice.amount <= maxPrice
    );
  });
}

function _saveNotesToStorage(notes) {
  noteStorageService.saveToStorage(STORAGE_KEY, notes);
}

function _loadNotesFromStorage() {
  return noteStorageService.loadFromStorage(STORAGE_KEY);
}