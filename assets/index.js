// import { Information } from "./allInformation"

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*
B.E. Electrical And Electronics Engineering
B.E. Electronics And Communication Engineering
B.E. Computer Science And Engineering
B.Tech. Information Technology
B.E. Mechanical Engineering
B.Tech. Chemical Engineering
B.E. Bio-Medical Engineering
B.E. Civil Engineering
PG Programs

*/
// all infos
Information = {
    "UG":{
        "Biotech" : {
            "course": "B.Tech. (Biotechnology)",
            "sem1" : [
                      {
                        "S.No.": 1,
                        "Course No.": "MAT 112",
                        "Course Title": "Basic Mathematics I (Remedial course)",
                        "Credit hours": "2+1",
                        "Course offering Department": "PS&IT",
                      },
                      {
                        "S.No.": 2,
                        "Course No.": "BTB 101",
                        "Course Title": "Introduction to Biotechnology",
                        "Credit hours": "2+1",
                        "Course offering Department": "Plant Biotech.",
                      },
                      {
                        "S.No.": 3,
                        "Course No.": "BTB 102",
                        "Course Title": "Cell Biology",
                        "Credit hours": "1+1",
                        "Course offering Department": "Plant Biotech.",
                      },
                      {
                        "S.No.": 4,
                        "Course No.": "AGR 114",
                        "Course Title": "Crop Production Technology",
                        "Credit hours": "1+1",
                        "Course offering Department": "Agronomy",
                      },
                      {
                        "S.No.": 5,
                        "Course No.": "PBG 111",
                        "Course Title": "Basic Genetics",
                        "Credit hours": "2+1",
                        "Course offering Department": "GPB",
                      },
                      {
                        "S.No.": 6,
                        "Course No.": "FSN 112",
                        "Course Title": "Food Science and Processing",
                        "Credit hours": "1+1",
                        "Course offering Department": "PHTC",
                      },
                      {
                        "S.No.": 7,
                        "Course No.": "ENG 101",
                        "Course Title": "Comprehension and Communication Skills in English",
                        "Credit hours": "1+1",
                        "Course offering Department": "Languages",
                      },
                      {
                        "S.No.": 8,
                        "Course No.": "ENS 101",
                        "Course Title": "Environmental Studies and Disaster Management",
                        "Credit hours": "2+1",
                        "Course offering Department": "Env. Sciences",
                      },
                      {
                        "S.No.": 9,
                        "Course No.": "TAM 101 / ENG 103",
                        "Course Title": "Ilakiyakiyangalil Velanmaiyum Ariviyal Tamizh Payanakamum       / Development Education (for Non Tamil students)",
                        "Credit hours": "0+1",
                        "Course offering Department": "Languages",
                      },
                      {
                        "S.No.": 10,
                        "Course No.": "PED 101",
                        "Course Title": "Physical Education",
                        "Credit hours": "0+1#",
                        "Course offering Department": "Phy. Education",
                      },
                      {
                        "S.No.": 11,
                        "Course No.": "PED 102",
                        "Course Title": "Yoga for Human Excellence",
                        "Credit hours": "0+1#",
                        "Course offering Department": "Phy. Education",
                      },
                      {
                        "S.No.": 12,
                        "Course No.": "NCC 101/ NSS 101",
                        "Course Title": "National Cadet Corps / National Service Scheme",
                        "Credit hours": "0+1#",
                        "Course offering Department": "",
                      }
                ]
            }
        }
    }

// select main head

const courseSection = document.getElementById('r1');
const streamSection = document.getElementById('r2');
const semasterSection = document.getElementById('r3');
const gpaSection = document.getElementById('r4');


const courses = Object.keys(Information)
selectedCourse = NaN;

selectedCourseStreams = NaN;
selectedStream = NaN;

selectedStreamSemesters = NaN;
selectedSemaster = NaN;

createCourseSection();

// creating courses form available courses
function createCourseSection(){
    while(courseSection.firstChild){
        courseSection.removeChild(courseSection.lastChild);
    }
    courses.forEach(course => {
        courseSection.appendChild(createCourseElement(course));
    });    
}

function createCourseElement(course){
    let element = document.createElement('div')
    element.textContent = course
    element.classList.add('course__element');
    element.addEventListener('click', ()=>{
        const streamElements = document.querySelectorAll('.course__element');
        streamElements.forEach(c=>{
            c.classList.remove('selected')
        });
        element.classList.add('selected')
        selectedCourse = element.innerHTML;
        selectedCourseStreams = Object.keys(Information[selectedCourse]);
        createStreamSection()
    })
    return element
}

// create stream section from selected course 
function createStreamSection(){
    while(streamSection.firstChild){
        streamSection.removeChild(streamSection.lastChild);
    }
    selectedCourseStreams.forEach(stream => {
        streamSection.appendChild(createStreamElement(stream));
    });    
}

function createStreamElement(stream){
    let element = document.createElement('div')
    element.textContent = stream
    element.classList.add('stream__element');
    element.addEventListener('click', ()=>{
        const streamElements = document.querySelectorAll('.stream__element');
        streamElements.forEach(c=>{
            c.classList.remove('selected')
        });
        element.classList.add('selected')
        selectedStream = element.innerHTML;
        selectedStreamSemesters = Object.keys(Information[selectedCourse][selectedStream]);
        createsemasterSection();
    })
    return element
}

// semester section
function createsemasterSection(){
    while(semasterSection.firstChild){
        semasterSection.removeChild(semasterSection.lastChild);
    }
    console.log(selectedStreamSemesters);
    selectedStreamSemesters.forEach(semaster => {
        semasterSection.appendChild(createSemasterElement(semaster));
    });    
}

function createSemasterElement(semaster){
    let element = document.createElement('div')
    element.textContent = semaster
    element.classList.add('semaster__element');
    element.addEventListener('click', ()=>{
        const streamElements = document.querySelectorAll('.semaster__element');
        streamElements.forEach(c=>{
            c.classList.remove('selected')
        });
        element.classList.add('selected')
        selectedSemaster = element.innerHTML;
        console.log(selectedSemaster);

        // selectedStreamSemesters = Object.keys(Information[selectedCourse][selectedStream]);
        createGpaSection();
    })
    return element
}

//subject section
function infoSection(){
    let div = document.createElement('div');
    
    courseInfo = Information[selectedCourse][selectedStream]['course'];
console.log(courseInfo);
    let h1 = document.createElement('h1')
    h1.textContent = courseInfo
    h1.classList.add('section__title')
    div.appendChild(h1)

    let span = document.createElement('h3')
    span.textContent = selectedSemaster;
    span.classList.add('section__subtitle');
    div.appendChild(span);

    return div

}

function createSubjectElement(subject){
    let div = document.createElement('div');
    
    let subName = document.createElement('h2');
    subName.textContent = subject['Course No.'] + " " + subject['Course Title'];
    subName.classList.add('subject__name');
    
   

    var input = document.createElement("INPUT");
    input.id = subject['Course No.']
    input.setAttribute("type", "number")

 
    div.appendChild(subName);
    div.appendChild(input);
    div.classList.add('items');
    return div
}

function createSubjectSection(){
    let div = document.createElement('div');
    let div11 = document.createElement('div');
    
    let sub = document.createElement('h2');
    sub.textContent = "Subjects";
    div11.appendChild(sub);

    let score = document.createElement('h2');
    score.textContent = "Score";
    div11.appendChild(score);

    div11.classList.add('items');
    div.appendChild(div11);
    // console.log(selectedSemaster);

    subjects = [...Information[selectedCourse][selectedStream][selectedSemaster]];
    console.log(subjects)
    let p = document.createElement('p');
    p.textContent = "data yet to be collected";
    p.classList.add('flag')

    if (subjects.length === 0){
        div.append(p)
    }
    // if (dictIsEmpty(subjects)){
    //     div.append(p)
    // }
    // else if(dictIsEmpty(subjects['theory'])){
    //     div.append(p)

    // }
    // else{
        // subjects['theory'].forEach(subject => {
        //     div.appendChild(createSubjectElement(subject));
        // });
        // subjects['practicals'].forEach(subject => {
        //     div.appendChild(createSubjectElement(subject));
        // }); 
        subjects.forEach(subject => {
            div.appendChild(createSubjectElement(subject));
        }); 
    // }
   
    return div;
}

function dictIsEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function resSection(){
    let div = document.createElement('div');
    
    let p = document.createElement('p');
    p.textContent = "Cal GPA"
    // p.id = "calGpa";
    p.classList.add('button');
    p.addEventListener("click", calculateGpa);
    div.appendChild(p);

    let res = document.createElement('h1')
    res.id = "res"
    div.appendChild(res)

    return div
    
    
}
function createGpaSection(){
    while(gpaSection.firstChild){
        gpaSection.removeChild(gpaSection.lastChild);
    }
    gpaSection.appendChild(infoSection());
    gpaSection.appendChild(createSubjectSection());
    gpaSection.appendChild(resSection());

    
} 

// gpa calculate
function calculateGpa() {
    totalCredit = 0;
    gp = 0;
    // alert("clicked");
    console.log(subjects);
    subjects.forEach(element => {
        // get Actual grade and add to the dictionary

        id = element["Course No."]
        const sub = document.getElementById(id);
        // console.log(sub);
        givenValue = sub.value;
        // console.log(selectedOption);
        gradePoints = parseInt(givenValue);
        gradePoints = gradePoints%100 * 10
        element['grade point'] = gradePoints;

        credit_hour = eval(element['Credit hours'].replace('#', ''));

        element['credit point'] = credit_hour;
        element['credit point for subject'] = gradePoints * credit_hour
        // console.log(element);
        
        // cal total
        totalCredit+= element['credit point']
        gp+=    credit_hour     
        // cal gpa
        
    });
    gpa = gp/totalCredit;
    // gpa.parseFloat(2);
    const res = document.getElementById('res');
    res.innerHTML = "GPA : " + gpa.toFixed(3);

    // console.log(subjects);
  }



// const jsonData= require('data.json'); 
// console.log(jsonData);  

