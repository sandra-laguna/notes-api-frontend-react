import { useState, useEffect } from 'react';

import styles from './NotesList.module.scss';

import { Button } from 'views/_components/Button';
import { Spinner } from 'views/_components/Spinner';

import { NoteService } from 'services/NoteService';

export const NotesList = () => {
  const [isDataUpdated, setIsDataUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [note, setNote] = useState({});
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, [isDataUpdated]);

  const getNotes = async () => {
    setIsLoading(true);
    try {
      const notesData = await NoteService.getAll();
      setNotes(notesData);
      setIsDataUpdated(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addNote = async () => {
    try {
      await NoteService.addNote(note);
      setIsDataUpdated(true);
    } catch (error) {
      console.error(error);
    } finally {
      setNote({});
      window.location.reload(true);
    }
  };

  const handleChecked = () => {
    setNote({ content: note.content, important: !note.important });
  };

  return (
    <div className={styles.content}>
      <div className={styles.addNote}>
        <input
          type="text"
          placeholder="Enter a new note"
          onBlur={event => setNote({ content: `${event.target.value.trim()}`, important: false })}
        />

        <div className={styles.footerNewNote}>
          <div class="center">
            <input type="checkbox" onChange={handleChecked} id="important" />
            <label for="important">Important note </label>
          </div>
          <button onClick={addNote}>Add</button>
        </div>
      </div>

      <ul className={styles.notes}>
        {isLoading ? (
          <Spinner />
        ) : (
          notes.map(note => (
            <li className={styles.note} key={note.id}>
              <div className={styles.headerNote}>
                <Button className={styles.iconColor} type="submit" icon={'delete'} />
                <span>{note.date.substring(0, 10)}</span>
              </div>
              <p>{note.content}</p>

              <div className={styles.checkboxNote}>
                <input type="checkbox" id={note.id} checked={note.important} disabled />
                <label></label>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
