export const RECEIVE_NOTES = "RECEIVE_NOTES";

export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

export const fetchNotes = () => dispatch => (
  NoteApiUtil.fetchNotes()
    .then(notes => dispatch(receiveNotes(notes)))
);
