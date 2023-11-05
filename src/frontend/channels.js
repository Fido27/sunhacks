
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
    return indents;
}

git config --global user.email "tjaiman0907@gmail.com"
git config --global user.name "tanay-jaiman"
git config --global user.password "M3leod@s"