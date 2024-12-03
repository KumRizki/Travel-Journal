import Header from "./components/Header"
import Entry from "./components/Entry"
import Intro from "./components/Intro"
import data from "./data"

export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                entry={entry}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                <Intro />
                {entryElements}
            </main>
        </>
    )
}