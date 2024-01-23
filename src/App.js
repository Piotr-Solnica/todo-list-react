
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Zrobić trenig", done: false },
  { id: 2, content: "Nauczyć się programować", done: true },
];

const hideTasksDone = false;

function App() {
  return (
    <Container>
      <main className="container">
        <Header
          title="Lista zadań"
        />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideTasksDone={hideTasksDone} />}
          extraHeadeContent={<Buttons tasks={tasks} hideTasksDone={hideTasksDone} />}
        />
      </main>
    </Container>
  );
}

export default App;
