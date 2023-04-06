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
function toggleMode(){
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', toggleMode)

// select main head

const courseSection = document.getElementById('r1');
const streamSection = document.getElementById('r2');
const semasterSection = document.getElementById('r3');
const gpaSection = document.getElementById('r4');

const downloadRes = document.getElementById('r5');
const footer = document.getElementById('r6');

const instruction = document.getElementById('Instructions')
const instructionBlock = document.getElementById('instructionBlock')



instruction.addEventListener('click', ()=>{
    instructionBlock.classList.toggle("instruction-show")
})


const courses = Object.keys(Information)
selectedCourse = NaN;

selectedCourseStreams = NaN;
selectedStream = NaN;

selectedStreamSemesters = NaN;
selectedSemaster = NaN;

semsTotalCreditHrs = []
totalCreditPoints = 0;
ogpaTotalCreditPoints = 0;
totalCreditHours = 0;
ogpaTotalCreditHours = 0;

createCourseSection();

function clearSection(section){
  if(section!=null){
    while(section.firstChild){
        section.removeChild(section.lastChild);
    }
  }
  
}
// creating courses form available courses
function createCourseSection(){
    clearSection(courseSection);
    clearSection(streamSection);
    clearSection(semasterSection);
    clearSection(gpaSection);

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
        console.log(selectedCourseStreams)
        instructionBlock.classList.remove("instruction-show")
        createStreamSection()
    })
    return element
}

// create stream section from selected course 
function createStreamSection(){
    clearSection(streamSection);
    clearSection(semasterSection);
    clearSection(gpaSection);
    footer.classList.add('footer-show');
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
    clearSection(semasterSection);
    clearSection(gpaSection);
    console.log(selectedStreamSemesters);
    selectedStreamSemesters = selectedStreamSemesters.slice(1, );

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
    input.setAttribute("min", 40)
    input.setAttribute("max", 100);
    input.classList.add('subject__score');

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
    subjects.forEach(subject => {
        div.appendChild(createSubjectElement(subject));
    }); 
    // }
   
    return div;
}


function resSection(){
    let div = document.createElement('div');
    div.classList.add("grid")

    let gpaCalBtn = document.createElement('h1');
    gpaCalBtn.textContent = "Cal GPA"
    gpaCalBtn.classList.add('button');

    gpaCalBtn.addEventListener("click", calculateGpa);
    div.appendChild(gpaCalBtn);
    
    let subDiv = document.createElement('div');
    subDiv.id = "gpaResDiv";
    subDiv.classList.add("section")
    subDiv.classList.add("result__element")

    // let tcp = 
    // tcp.id = "tcp";
    // // tcp.classList.add("result__element")

    // let tch = document.createElement('h1');
    // tch.id = "tch";
    // // tch.classList.add("result__element")
    // subDiv.appendChild(tch)

    // let gpa = document.createElement('h1')
    // gpa.id = "gpa"
    // // gpa.classList.add("result__element")
    // subDiv.appendChild(gpa)
    // // subDiv.classList.add('items');

    // let printOut = document.createElement('h1')
    // printOut.id = "printout"
    // subDiv.appendChild(printOut)

    div.appendChild(subDiv);

    return div
}

function createOgpaSection(){
    const ogpaDiv = document.createElement('div')
    ogpaDiv.classList.add('ogpa__section')
    let h1 = document.createElement('h1')
    h1.textContent = "OGPA"
    h1.classList.add('section__title')
    ogpaDiv.appendChild(h1)

    semDiv = document.createElement('div');
    semDiv.classList.add("gird")
    semDiv.classList.add("ogpa__elediv")
    // ogpaDiv.innerHTML = "OGPA";

    sems = [Information[selectedCourse][selectedStream]]
    console.log(sems);
    semsTotalCreditHrs = []
    for (let index = 1; index < parseInt(selectedSemaster[3])+1; index++) {
        curr_tch = 0;
        const curr_sem = sems[0]['sem'+index];
        curr_sem.forEach(element => {
            curr_tch += eval(parseExp(element['Credit Hours']));
        })
        semsTotalCreditHrs.push(curr_tch);
        semDiv.appendChild(createOgpaElement(curr_tch,index))
    }
    console.log("in ogpa", semsTotalCreditHrs);
    ogpaDiv.appendChild(semDiv);
    
    // cal ogpa button 
    let ogpaCalBtn = document.createElement('h1');
    ogpaCalBtn.textContent = "Cal OGPA"
    ogpaCalBtn.classList.add('button');

    ogpaCalBtn.addEventListener("click", calculateOgpa);
    ogpaDiv.appendChild(ogpaCalBtn);

    let subDiv = document.createElement('div');
    subDiv.id = "ogpaResDiv";
    subDiv.classList.add("result__element")
    ogpaDiv.appendChild(subDiv);
    return ogpaDiv;
}

function createOgpaElement(tch, index){
    let div = document.createElement('div');
    div.classList.add("ogpa_items")
    let semName = document.createElement('h2');
    semName.textContent =  "Sem" + index;
    // subName.classList.add('subject__name');
  
    var input = document.createElement("INPUT");
    input.id = "ogpa-sem-"+index;
    input.setAttribute("type", "number")
    input.classList.add('sem__score');

    let tchEle = document.createElement('h2');
    tchEle.textContent =  tch;


    div.appendChild(semName);
    div.appendChild(input);
    div.appendChild(tchEle);
    // div.classList.add('items');
    return div
}

function calculateOgpa(){
    noSems = parseInt(selectedSemaster[3])
    ogpaTotalCreditPoints = 0
    ogpaTotalCreditHours = 0
    for (let index = 1; index < noSems+1; index++) {
        curr_sem = document.getElementById('ogpa-sem-'+index);
        if(curr_sem.value != ''){
            ogpaTotalCreditPoints+=parseInt(curr_sem.value)
            ogpaTotalCreditHours += parseInt(semsTotalCreditHrs[index-1])

        }
        console.log("in ogpa"+curr_sem.value);
    }
    const ogpaResDiv = document.getElementById('ogpaResDiv');
    clearSection(ogpaResDiv)

    ogpa = ogpaTotalCreditPoints/ogpaTotalCreditHours;

    const ogpatcpRes = document.createElement('h1');
    ogpatcpRes.innerHTML = "Total Credit Points : " + ogpaTotalCreditPoints.toFixed(3);
    
    const ogpatchRes = document.createElement('h1');
    ogpatchRes.innerHTML = "Total Credit Hours : " + ogpaTotalCreditHours.toFixed(3);

    const ogpaRes = document.createElement('h1');;
    ogpaRes.innerHTML = "OGPA : " + ogpa.toFixed(3);

    ogpaResDiv.appendChild(ogpatcpRes)
    ogpaResDiv.appendChild(ogpatchRes)
    ogpaResDiv.appendChild(ogpaRes)

}
function createGpaSection(){
    clearSection(gpaSection);
    gpaSection.appendChild(infoSection());
    gpaSection.appendChild(createSubjectSection());
    gpaSection.appendChild(resSection());
    gpaSection.appendChild(createOgpaSection());
} 

function parseExp(str){
    str = str.replace('#', '')
    str = str.replace('*', '')
    str = str.replace('^', '')
    return str
}
function createResultTableElement(element){
  let ele = document.createElement('h2');
  ele.textContent = element;
  return ele
}

function generateResult(){
    // section = document.createElement('section')
    // section.id = "result"
    // section.classList.add("section")
    clearSection(downloadRes);
    downloadRes.appendChild(infoSection());
    
    let table = document.createElement('div');
    table.classList.add('table')
    heads = ["Subjects", 'Score', 'Credit Hours', "Grade Points", "Credit Points"]
    heads.forEach(head => {
      table.appendChild(createResultTableElement(head))
    });
    
    subjects.forEach(sub =>{
      element = sub['Course No.'] + " " + sub['Course Title'];
      table.appendChild(createResultTableElement(element))
      if('score' in sub){
        table.appendChild(createResultTableElement(sub['score']))
        table.appendChild(createResultTableElement(sub['Credit Hours']))
        table.appendChild(createResultTableElement(sub['gp'].toFixed(3)))
        table.appendChild(createResultTableElement(sub['cp'].toFixed(3)))
      }
      else{
        table.appendChild(createResultTableElement(0))
        table.appendChild(createResultTableElement(sub['Credit Hours']))
        table.appendChild(createResultTableElement(0))
        table.appendChild(createResultTableElement(0))
      }
    })
    downloadRes.appendChild(table)

    let subDiv = document.createElement('div');
    subDiv.classList.add("section")
    let tcp = document.createElement('h1');
    tcp.textContent =  "total Credit Points : " + totalCreditPoints.toFixed(3);
    tcp.classList.add("result__element")
    subDiv.appendChild(tcp)

    let tch = document.createElement('h1');
    tch.textContent = "total Credit Hours : " + totalCreditHours.toFixed(3);
    tch.classList.add("result__element")
    subDiv.appendChild(tch);

    gpaAns = totalCreditPoints/totalCreditHours;

    let gpa = document.createElement('h1')
    gpa.textContent = "GPA : " + gpaAns.toFixed(3);
    gpa.classList.add("result__element");

    subDiv.appendChild(gpa);
    downloadRes.appendChild(subDiv)

    // section.classList.add("hide")

    // let subName = document.createElement('h2');
    // subName.textContent = subject['Course No.'] + " " + subject['Course Title'];
    // subName.classList.add('subject__name');


}
// gpa calculate
function calculateGpa() {
    totalCreditPoints = 0;
    totalCreditHours = 0;
    // alert("clicked");
    console.log(subjects);
    subjects.forEach(element => {
        // get Actual grade and add to the dictionary

        id = element["Course No."]
        const sub = document.getElementById(id);
        // console.log(sub);
        givenValue = sub.value;
        console.log(givenValue);
        if (givenValue){

            gradePoints = parseFloat(givenValue);
            console.log(gradePoints);
            element['score'] = gradePoints

            gradePoints = (gradePoints/100) * 10;
            creditHours = eval(parseExp(element['Credit Hours']));
    
            element['gp'] = gradePoints;
            element['cp'] = gradePoints * creditHours;
    
            // console.log(element);
            
            // cal total
            totalCreditPoints +=  element['cp'];
    
            totalCreditHours+=creditHours 
        }            
    });
    gpa = totalCreditPoints/totalCreditHours;
    // gpa.parseFloat(2);

    const gpaResDiv = document.getElementById('gpaResDiv');
    clearSection(gpaResDiv)

    const tcpRes = document.createElement('h1');
    tcpRes.innerHTML = "Total Credit Points : " + totalCreditPoints.toFixed(3);
    
    const tchRes = document.createElement('h1');
    tchRes.innerHTML = "Total Credit Hours : " + totalCreditHours.toFixed(3);

    const gpaRes = document.createElement('h1');;
    gpaRes.innerHTML = "GPA : " + gpa.toFixed(3);

    gpaResDiv.appendChild(tcpRes)
    gpaResDiv.appendChild(tchRes)
    gpaResDiv.appendChild( gpaRes)
    console.log(subjects);
    
    // generateResult();

    // printing result to user
    // const printOut = document.getElementById('printout');
    // console.log(printOut.removeEventListener("click", downloadEvents));
    // printOut.classList.add('button');
    // printOut.innerHTML = "Download result";
    // printOut.addEventListener("click",downloadEvents);

    // console.log(subjects);
  }
  function downloadEvents(){
    generatePDF("r5")
  }
  function generatePDF(id) {
    let changed = 0;  
    // toggleMode();

    if(getCurrentTheme().valueOf() == 'dark'.valueOf()){
      console.log(getCurrentTheme());
      toggleMode();
      changed=1;
    }
    let opt = {
        margin : 1,
        filename: selectedSemaster + " result",
        enableLinks: true,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            letterRendering: true,
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    }
    html2pdf().set(opt).from(document.getElementById(id)).save();

    if(changed==1){
      // toggleMode(); 
    }
}