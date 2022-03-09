import isNil from 'lodash/isNil';
import { Note } from '../entities/Note';
import { noteRepository } from '../repositories/NoteRepository';

const getAll = async () => {
  const notesListDTO = await noteRepository.getAll();

  if (isNil(notesListDTO.data)) {
    return;
  }

  const notesList = notesListDTO.data.map(
    note =>
      new Note({
        id: note.id,
        content: note.content,
        date: note.date,
        important: note.important
      })
  );

  return notesList;
};

const addNote = async note => {
  await noteRepository.addNote(note);
};

export const NoteService = {
  getAll,
  addNote
};
