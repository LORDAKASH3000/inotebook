import { Container } from "react-bootstrap";
import AddNote from "../Notes/AddNote"
import NoteList from "../Notes/NoteList.js";

const Home = ()=>{
    return (
        <Container>
            <AddNote />
            <NoteList />
        </Container>
    )
}

export default Home;