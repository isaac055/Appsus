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
    info: { url: 'https://i.natgeofe.com/n/abf58ec8-ac78-4108-adbe-918fa5bda2e5/mountain-gorilla_2x3.jpg', title: 'Bobi and Me' },
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
  {
    id: 'n104',
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint : false
  },
  {
    id: 'n105',
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint : false
  },
  {
    id: 'n106',
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint : false
  },
  {
    id: 'n107',
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint : false
  },
  {
    id: 'n108',
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint : false
  },
  {
    id: 'n109',
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint : false
  },
  {
    id: 'n110',
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint : false
  },
  {
    id: 'n111',
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint : false
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
  // let notes = _loadNotesFromStorage();
  if (!notes || !notes.length) {
    var notes = gNotes;
  }
  _saveNotesToStorage(notes);
}

// function _getFilteredNotes(notes, filterBy) {
//   let { importint } = filterBy;
//   importint = importint ? true : false;
//   return notes.filter((note) => {
//     return (
//       book.title.includes(title) &&
//       book.listPrice.amount >= minPrice &&
//       book.listPrice.amount <= maxPrice
//     );
//   });
// }

function _saveNotesToStorage(notes) {
  noteStorageService.saveToStorage(STORAGE_KEY, notes);
}

function _loadNotesFromStorage() {
  return noteStorageService.loadFromStorage(STORAGE_KEY);
}