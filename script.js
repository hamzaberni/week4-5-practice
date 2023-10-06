const data = [
    {
        name: "Kovács János",
        age: 29,
        subjects: [
            {
                subjectName: "Maths",
                subjectGrade: 5
            },
            {
                subjectName: "Physics",
                subjectGrade: 3
            },
            {
                subjectName: "English",
                subjectGrade: 2
            }
        ]
    },
    {
        name: "Kiss Péter",
        age: 23,
        subjects: [
            {
                subjectName: "Maths",
                subjectGrade: 2
            },
            {
                subjectName: "Physics",
                subjectGrade: 5
            },
            {
                subjectName: "English",
                subjectGrade: 5
            }
        ]
    },
    {
        name: "Nagy Lajos",
        age: 65,
        subjects: [
            {
                subjectName: "Maths",
                subjectGrade: 3
            },
            {
                subjectName: "Physics",
                subjectGrade: 4
            },
            {
                subjectName: "English",
                subjectGrade: 3
            }
        ]
    }
]

data.forEach(student => {
    console.log(student.name)
    
    student.subjects.forEach(subject => console.log(`${subject.subjectName}: ${subject.subjectGrade}`))
})  //ezt a kódot ki kell menteni, hogy meglegyen!!