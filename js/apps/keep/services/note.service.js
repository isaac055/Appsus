import { NoteStorageService } from './note.storage.service.js';
import { NoteUtilService } from './note.util.service.js';

export const NoteService = {
  query,
};

const STORAGE_KEY = 'NoteDB';

const gNotes = [
  {
    id: NoteUtilService.makeId(),
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint: false,
    style: { backgroundColor: getRandomColor() },
  },
  {
    id: NoteUtilService.makeId(),
    type: 'note-img',
    info: {
      url: 'https://i.natgeofe.com/n/abf58ec8-ac78-4108-adbe-918fa5bda2e5/mountain-gorilla_2x3.jpg',
      title: 'Bobi and Me',
    },
    style: { backgroundColor: getRandomColor() },
    importint: false,
  },
  {
    id: NoteUtilService.makeId(),
    type: 'note-todos',
    info: {
      label: 'Get my stuff together',
      todos: [
        { txt: 'Driving liscence', doneAt: null },
        { txt: 'Coding power', doneAt: 187111111 },
      ],
    },
    importint: true,
    style: { backgroundColor: getRandomColor() },
  },
  {
    id: NoteUtilService.makeId(),
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint: false,
    style: { backgroundColor: getRandomColor() },
  },
  {
    id: NoteUtilService.makeId(),
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint: false,
    style: { backgroundColor: getRandomColor() },
  },
  {
    id: NoteUtilService.makeId(),
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint: false,
    style: { backgroundColor: getRandomColor() },
  },
  {
    id: NoteUtilService.makeId(),
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint: false,
    style: { backgroundColor: getRandomColor() },
  },
  {
    id: NoteUtilService.makeId(),
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint: false,
    style: { backgroundColor: getRandomColor() },
  },
  {
    id: NoteUtilService.makeId(),
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint: false,
    style: { backgroundColor: getRandomColor() },
  },
  {
    id: NoteUtilService.makeId(),
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint: false,
    style: { backgroundColor: getRandomColor() },
  },
  {
    id: NoteUtilService.makeId(),
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
    importint: false,
    style: { backgroundColor: getRandomColor() },
  },
];

_createNotes();

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

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function _getFilteredNotes(notes, filterBy) {
  return notes.filter((note) => note.type === filterBy.type);
}

function _saveNotesToStorage(notes) {
  NoteStorageService.saveToStorage(STORAGE_KEY, notes);
}

function _loadNotesFromStorage() {
  return NoteStorageService.loadFromStorage(STORAGE_KEY);
}
