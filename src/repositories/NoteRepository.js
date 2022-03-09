import { NoteConfig } from './config/NoteConfig';
import { getUrl } from './_utils/UrlUtils';
import { HTTPRequester } from './_utils/HTTPRequester';

export const noteRepository = {
  getAll: async () =>
    await HTTPRequester.get({
      url: getUrl(NoteConfig.getAll, {})
    }),

  addNote: async note =>
    await HTTPRequester.post({
      url: getUrl(NoteConfig.addNote),
      data: { content: note.content, important: note.important }
    })
};
