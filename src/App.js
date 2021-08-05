import NoteList from "./components/NoteList.jsx";
function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Title"></input>
        <textarea placeholder="Write your note..."></textarea>
        <button>Create note</button>
      </form>
      <NoteList></NoteList>
    </section>
  );
}

export default App;
