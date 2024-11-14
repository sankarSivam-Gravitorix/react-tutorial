import { useParams } from "react-router-dom";

const NoteDetail = ({ notes }) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === parseInt(id));

  return (
    <div>
      {note ? (
        <>
          <h2>Note Details</h2>
          <p>Content: {note.info}</p>
        </>
      ) : (
        <p>Note not found.</p>
      )}
    </div>
  );
};

export default NoteDetail;
