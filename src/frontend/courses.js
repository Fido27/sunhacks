
function construct(id , name) {
    return (
        <div className="courses">
        <p>{name}</p>
        </div>
    );
}

export function Courses() {
    var result;

    for (var i = 0; i < 3 ; i++){
        result += construct("12345" , "Test_Course")
    }

    return result;
}