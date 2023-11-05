
function notes() {
    return (
        <div className="channels">
            <p>Notes</p>
        </div>
    );
}

function general() {
    return (
        <a href = "https://fido27.tech"><p>general</p></a>
    )
}

function announcements() {
    return (
        <p>Announcements</p>
    )
}

export function Channels() {
    var indents = [];
    indents.push(notes());
    indents.push(text());
    return indents;
}