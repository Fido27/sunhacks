class Course{
    constructor(id){
        this.id = id
        this.students = []
        this.general = {}
        this.announcements = {
            
        }
        this.teams = {}
        var jsonData = {}


    }

    notes() {
        return (
            <div className="channels">
                <p>Notes</p>
            </div>
        );
    }

    general() {
        return (
            <a href = "https://fido27.tech"><p>general</p></a>
        )
    }

    announcements() {
        return (
            <p>Announcements</p>
        )
    }

    collaboration() {
        return (
            <p>Collaboration</p>
        )
    }
}

export function Channels(id) {
    var indents = [];
    return indents;
}

