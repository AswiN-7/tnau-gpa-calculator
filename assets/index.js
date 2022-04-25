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
B.E.Electrical And Electronics Engineering
B.E.Electronics And Communication Engineering
B.E.Computer Science And Engineering
B.Tech.Information Technology
B.E.Mechanical Engineering
B.Tech.Chemical Engineering
B.E.Bio-Medical Engineering
B.E.Civil Engineering
PG Programs

*/
// all infos

/*
"S.No.": 1,
                    "Course No.": "MAT 112",
                    "Course Title": "Basic Mathematics I (Remedial course)",
                    "Credit hours": "2+1*",
                    "Course offering Department": "PS&IT",
                    course : "", 
                


*/
Information = {
    "UG":{
        "B.Sc.(Hons.) Agriculture":{
            "course" : "B.Sc.(Hons.) Agriculture", 
            "sem1":[
                {
                    "S. No": 1,
                    "Course No.": "AGR 101",
                    "Course Title": "Fundamentals of Agronomy and Agricultural Heritage",
                    "Credit hours": "1+1"
                  },
                  {
                    "S. No": 2,
                    "Course No.": "BIC 101",
                    "Course Title": "Fundamentals of Plant Biochemistry",
                    "Credit hours": "2+1"
                  },
                  {
                    "S. No": 3,
                    "Course No.": "SAC 101",
                    "Course Title": "Fundamentals of Soil Science",
                    "Credit hours": "2+1"
                  },
                  {
                    "S. No": 4,
                    "Course No.": "FOR 111",
                    "Course Title": "Introduction to Forestry",
                    "Credit hours": "1+ 1"
                  },
                  {
                    "S. No": 5,
                    "Course No.": "ENG 101",
                    "Course Title": "Comprehension & Communication Skills in English",
                    "Credit hours": "1+1"
                  },
                  {
                    "S. No": 6,
                    "Course No.": "HOR 111",
                    "Course Title": "Fundamentals of Horticulture",
                    "Credit hours": "1+1"
                  },
                  {
                    "S. No": 7,
                    "Course No.": "MAT 111",
                    "Course Title": "Elementary Mathematics",
                    "Credit hours": "1+1"
                  },
                  {
                    "S. No": 8,
                    "Course No.": "PBG 101",
                    "Course Title": "Introduction to Agricultural Botany",
                    "Credit hours": "1+1"
                  },
                  {
                    "S. No": 9,
                    "Course No.": "AEX101",
                    "Course Title": "Rural Sociology & Educational Psychology",
                    "Credit hours": "2+0"
                  },
                  {
                    "S. No": 10,
                    "Course No.": "TAM101/ ENG101",
                    "Course Title": "Development Education",
                    "Credit hours": "0+1"
                  },
                  {
                    "S. No": 11,
                    "Course No.": "NSS/NCC 101",
                    "Course Title": "NSS/NCC",
                    "Credit hours": "0+1*"
                  },
                  {
                    "S. No": 12,
                    "Course No.": "PED 101",
                    "Course Title": "Physical Education",
                    "Credit hours": "0+1*"
                  },
                  {
                    "S. No": 13,
                    "Course No.": "PED102",
                    "Course Title": "Yoga for human excellence",
                    "Credit hours": "0+1*"
                  }
            ],
            "sem2":[

            ],
            "sem3":[

            ],
            "sem4":[

            ],
            "sem5":[

            ],
            "sem6":[

            ],
            "sem7":[

            ],
            "sem8":[

            ]
        },
        "B.Sc.(Hons.) Horticulture":{
            "course" : "", 
            "sem1":[

            ],
            "sem2":[

            ],
            "sem3":[

            ],
            "sem4":[

            ],
            "sem5":[

            ],
            "sem6":[

            ],
            "sem7":[

            ],
            "sem8":[

            ]
        }, 
        "B.Sc.(Hons.) Forestry":{
            "course" : "", 
            "sem1":[

            ],
            "sem2":[

            ],
            "sem3":[

            ],
            "sem4":[

            ],
            "sem5":[

            ],
            "sem6":[

            ],
            "sem7":[

            ],
            "sem8":[

            ]
        },
        "B.Sc.(Hons.) Food, Nutrition and Dietetics":{
            "course" : "", 
            "sem1":[

            ],
            "sem2":[

            ],
            "sem3":[

            ],
            "sem4":[

            ],
            "sem5":[

            ],
            "sem6":[

            ],
            "sem7":[

            ],
            "sem8":[

            ]
        },
        "B.Tech.(Agricultural Engineering)":{
            "course" : "", 
            "sem1":[

            ],
            "sem2":[

            ],
            "sem3":[

            ],
            "sem4":[

            ],
            "sem5":[

            ],
            "sem6":[

            ],
            "sem7":[

            ],
            "sem8":[

            ]
        },
        "B.Sc.(Hons.)Sericulture":{
            "course" : "", 
            "sem1":[

            ],
            "sem2":[

            ],
            "sem3":[

            ],
            "sem4":[

            ],
            "sem5":[

            ],
            "sem6":[

            ],
            "sem7":[

            ],
            "sem8":[

            ]
        },
        "B.Tech.(Food Technology)":{
            "course" : "", 
            "sem1":[

            ],
            "sem2":[

            ],
            "sem3":[

            ],
            "sem4":[

            ],
            "sem5":[

            ],
            "sem6":[

            ],
            "sem7":[

            ],
            "sem8":[

            ]
        },
        "B.Tech.(Biotechnology)":{
        "course": "B.Tech.(Biotechnology)",
        "sem1" : [
                  {
                    "S.No.": 1,
                    "Course No.": "MAT 112",
                    "Course Title": "Basic Mathematics I (Remedial course)",
                    "Credit hours": "2+1*",
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
                    "Course offering Department": "Env.Sciences",
                  },
                  {
                    "S.No.": 9,
                    "Course No.": "TAM 101 / ENG 103",
                    "Course Title": "Ilakiyakiyangalil Velanmaiyum Ariviyal Tamizh Payanakamum / Development Education (for Non Tamil students)",
                    "Credit hours": "0+1",
                    "Course offering Department": "Languages",
                  },
                  {
                    "S.No.": 10,
                    "Course No.": "PED 101",
                    "Course Title": "Physical Education",
                    "Credit hours": "0+1#",
                    "Course offering Department": "Phy.Education",
                  },
                  {
                    "S.No.": 11,
                    "Course No.": "PED 102",
                    "Course Title": "Yoga for Human Excellence",
                    "Credit hours": "0+1#",
                    "Course offering Department": "Phy.Education",
                  },
                  {
                    "S.No.": 12,
                    "Course No.": "NCC 101/ NSS 101",
                    "Course Title": "National Cadet Corps / National Service Scheme",
                    "Credit hours": "0+1#",
                    "Course offering Department": "",
                  }
            ], 
         "sem2": [
            {
                "S.No.": 1,
                "Course No.": "MAT 113",
                "Course Title": "Basic Mathematics II (Remedial course)",
                "Credit hours": "2+1*",
                "Course offering Department": "PS&IT"
              },
              {
                "S.No.": 2,
                "Course No.": "BTB 103",
                "Course Title": "Molecular Biology",
                "Credit hours": "2+1",
                "Course offering Department": "Plant Biotech."
              },
              {
                "S.No.": 3,
                "Course No.": "BIF 101",
                "Course Title": "Introductory Bioinformatics",
                "Credit hours": "1+1",
                "Course offering Department": "PMB&B"
              },
              {
                "S.No.": 4,
                "Course No.": "COM 112",
                "Course Title": "Information and Communication Technology",
                "Credit hours": "1+1",
                "Course offering Department": "PS&IT"
              },
              {
                "S.No.": 5,
                "Course No.": "BIC 102",
                "Course Title": "General Biochemistry",
                "Credit hours": "2+1",
                "Course offering Department": "Biochemistry"
              },
              {
                "S.No.": 6,
                "Course No.": "AGM 111",
                "Course Title": "Microbiology",
                "Credit hours": "2+1",
                "Course offering Department": "Agrl.Micro."
              },
              {
                "S.No.": 7,
                "Course No.": "SAC 101",
                "Course Title": "Fundamentals of Soil Science",
                "Credit hours": "2+1",
                "Course offering Department": "SS&AC"
              },
              {
                "S.No.": 8,
                "Course No.": "CRP 111",
                "Course Title": "Plant Physiology",
                "Credit hours": "2+1",
                "Course offering Department": "Crop Physiology"
              },
              {
                "S.No.": 9,
                "Course No.": "PHY 102",
                "Course Title": "Biophysics",
                "Credit hours": "1+1",
                "Course offering Department": "NS&T"
              },
              {
                "S.No.": 10,
                "Course No.": "PED 101",
                "Course Title": "Physical Education",
                "Credit hours": "0+1#",
                "Course offering Department": "Phy.Education"
              },
              {
                "S.No.": 11,
                "Course No.": "NCC 101/ NSS 101",
                "Course Title": "National Cadet Corps / National Service Scheme",
                "Credit hours": "0+1#",
                "Course offering Department": ""
              }
         ],
         "sem3": [
            {
                "S.No.": 1,
                "Course No.": "BTB 201",
                "Course Title": "Recombinant DNA Technology",
                "Credit hours": "2+1",
                "Course offering Department": "Plant Biotech."
              },
              {
                "S.No.": 2,
                "Course No.": "BTB 202",
                "Course Title": "Plant Tissue Culture",
                "Credit hours": "1+1",
                "Course offering Department": "Plant Biotech."
              },
              {
                "S.No.": 3,
                "Course No.": "BIF 211",
                "Course Title": "Computational Biology",
                "Credit hours": "2+1",
                "Course offering Department": "PMB&B"
              },
              {
                "S.No.": 4,
                "Course No.": "MAT 211",
                "Course Title": "Biomathematics",
                "Credit hours": "2+1",
                "Course offering Department": "PS&IT"
              },
              {
                "S.No.": 5,
                "Course No.": "AEN 221",
                "Course Title": "Fundamentals of Entomology and  Pest Management",
                "Credit hours": "2+1",
                "Course offering Department": "Ag.Entomology"
              },
              {
                "S.No.": 6,
                "Course No.": "PBG 212",
                "Course Title": "Classical and Molecular Cytogenetics",
                "Credit hours": "1+1",
                "Course offering Department": "GPB"
              },
              {
                "S.No.": 7,
                "Course No.": "PAT 251",
                "Course Title": "Fundamentals of Plant Pathology, Nematology and Disease management",
                "Credit hours": "2+1",
                "Course offering Department": "Plant Pathology"
              },
              {
                "S.No.": 8,
                "Course No.": "AGM 211",
                "Course Title": "Microbial Genetics",
                "Credit hours": "1+1",
                "Course offering Department": "Ag.Micro."
              },
              {
                "S.No.": 9,
                "Course No.": "BTH 221",
                "Course Title": "Production Technology of Horticultural Crops",
                "Credit hours": "2+1",
                "Course offering Department": "Horticulture"
              },
              {
                "S.No.": 10,
                "Course No.": "PED 101",
                "Course Title": "Physical Education",
                "Credit hours": "0+1#",
                "Course offering Department": "Phy.Education"
              },
              {
                "S.No.": 11,
                "Course No.": "NCC 101/ NSS 101",
                "Course Title": "National Cadet Corps / National Service Scheme",
                "Credit hours": "0+1#",
                "Course offering Department": ""
              }
        ],
        "sem4": [
            {
                "S.No.": 1,
                "Course No.": "BTB 203",
                "Course Title": "Electronics and Instrumentation in Biotechnology",
                "Credit hours": "1+1",
                "Course offering Department": "Plant Biotech."
              },
              {
                "S.No.": 2,
                "Course No.": "BTB 204",
                "Course Title": "Molecular Genetics",
                "Credit hours": "2+0",
                "Course offering Department": "Plant Biotech."
              },
              {
                "S.No.": 3,
                "Course No.": "BTB 205",
                "Course Title": "Plant Genetic Transformation",
                "Credit hours": "1+1",
                "Course offering Department": "Plant Biotech."
              },
              {
                "S.No.": 4,
                "Course No.": "BTB 206",
                "Course Title": "Bioprospecting of Molecules and Genes",
                "Credit hours": "1+1",
                "Course offering Department": "Plant Biotech."
              },
              {
                "S.No.": 5,
                "Course No.": "BTB 207",
                "Course Title": "Immunology",
                "Credit hours": "2+1",
                "Course offering Department": "Plant Biotech."
              },
              {
                "S.No.": 6,
                "Course No.": "BTB 208",
                "Course Title": "Fundamentals of Molecular Pharming and Biopharmaceuticals",
                "Credit hours": "1+1",
                "Course offering Department": "Plant Biotech."
              },
              {
                "S.No.": 7,
                "Course No.": "STA 201",
                "Course Title": "Statistical Methods",
                "Credit hours": "1+1",
                "Course offering Department": "PS&IT"
              },
              {
                "S.No.": 8,
                "Course No.": "AEC 202",
                "Course Title": "Economics and Marketing",
                "Credit hours": "2+1",
                "Course offering Department": "Ag.Economics"
              },
              {
                "S.No.": 9,
                "Course No.": "AEX 201",
                "Course Title": "Communication Skills and Personality Development",
                "Credit hours": "1+1",
                "Course offering Department": "Agrl.Extension"
              },
              {
                "S.No.": 10,
                "Course No.": "NST 201",
                "Course Title": "Fundamentals and Applications of Nanotechnology",
                "Credit hours": "1+0",
                "Course offering Department": "Nano Sci.& Tech"
              },
              {
                "S.No.": 11,
                "Course No.": "PBG 213",
                "Course Title": "Basics of Plant Breeding",
                "Credit hours": "2+1",
                "Course offering Department": "GPB"
              },
              {
                "S.No.": 12,
                "Course No.": "SST 211",
                "Course Title": "Seed Biology, Production and Management",
                "Credit hours": "1+1",
                "Course offering Department": "SS&T"
              },
              {
                "S.No.": 13,
                "Course No.": "PED 101",
                "Course Title": "Physical Education",
                "Credit hours": "0+1#",
                "Course offering Department": "Phy.Education"
              },
              {
                "S.No.": 14,
                "Course No.": "NCC 101/ NSS 101",
                "Course Title": "National Cadet Corps / National Service Scheme",
                "Credit hours": "0+1#",
                "Course offering Department": ""
              }
        ],
        "sem5": [
            {
                "S.No.": 1,
                "Course No.": "BTB 301",
                "Course Title": "Molecular Marker Technology",
                "Credit hours": "2+1",
                "Course offering Department": "Plant Biotech."
              },
              {
                "S.No.": 2,
                "Course No.": "BTB 302",
                "Course Title": "Genomics and Proteomics",
                "Credit hours": "1+1",
                "Course offering Department": "Plant Biotech."
              },
              {
                "S.No.": 3,
                "Course No.": "BTB 303",
                "Course Title": "Molecular Ecology and Evolution",
                "Credit hours": "1+1",
                "Course offering Department": "Plant Biotech."
              },
              {
                "S.No.": 4,
                "Course No.": "BIC 301",
                "Course Title": "Enzymology and Enzyme Technologies",
                "Credit hours": "2+1",
                "Course offering Department": "Biochemistry"
              },
              {
                "S.No.": 5,
                "Course No.": "AGM 311",
                "Course Title": "Food Biotechnology",
                "Credit hours": "1+1",
                "Course offering Department": "Ag.Micro."
              },
              {
                "S.No.": 6,
                "Course No.": "AMP 301",
                "Course Title": "Animal Biotechnology",
                "Credit hours": "2+1",
                "Course offering Department": "Animal Husbandry"
              },
              {
                "S.No.": 7,
                "Course No.": "COM  311",
                "Course Title": "Agro-informatics",
                "Credit hours": "1+1",
                "Course offering Department": "PS&IT"
              },
              {
                "S.No.": 8,
                "Course No.": "PBG 311",
                "Course Title": "Breeding of Field and Horticultural Crops",
                "Credit hours": "1+1",
                "Course offering Department": "GPB"
              },
              {
                "S.No.": 9,
                "Course No.": "ARM 301",
                "Course Title": "Entrepreneurship Development and Business Management",
                "Credit hours": "1+1",
                "Course offering Department": "Agrl.& Rural Management"
              },
              {
                "S.No.": 10,
                "Course No.": "ENS 311",
                "Course Title": "Biodiversity and its Conservation",
                "Credit hours": "1+1",
                "Course offering Department": "Environ.sciences"
              },
              {
                "S.No.": 11,
                "Course No.": "NCC 101",
                "Course Title": "National Cadet Corps",
                "Credit hours": "0+1#",
                "Course offering Department": ""
              },
        ],
        "sem6": [
            {
                "S.No.": 1,
                "Course No.": "BTB 304",
                "Course Title": "Biosafety and Bioethics",
                "Credit hours": "1+0",
                "Course offering Department": "Plant Biotech.",
                
              },
              {
                "S.No.": 2,
                "Course No.": "TIP 351",
                "Course Title": "Intellectual Property Rights and Applications in Biotechnology",
                "Credit hours": "1+0",
                "Course offering Department": "Trade & IP",
                
              },
              {
                "S.No.": 3,
                "Course No.": "AGM 312",
                "Course Title": "Microbial Biotechnology",
                "Credit hours": "1+1",
                "Course offering Department": "Ag.Micro",
                
              },
              {
                "S.No.": 4,
                "Course No.": "STA 323",
                "Course Title": "Biostatistics",
                "Credit hours": "1+1",
                "Course offering Department": "PS&IT",
                
              },
              {
                "S.No.": 5,
                "Course No.": "BTB 305",
                "Course Title": "Plant Tissue Culture and its Applications",
                "Credit hours": "2+1",
                "Course offering Department": "Plant Biotech.",
                
              },
              {
                "S.No.": 6,
                "Course No.": "BTB 306",
                "Course Title": "Principles and Applications of Plant Genetic Transformation",
                "Credit hours": "2+1",
                "Course offering Department": "Plant Biotech.",
                
              },
              {
                "S.No.": 7,
                "Course No.": "BTB 307",
                "Course Title": "Applications of Genomics and Proteomics",
                "Credit hours": "2+1",
                "Course offering Department": "Plant Biotech.",
                
              },
              {
                "S.No.": 8,
                "Course No.": "BTB 308",
                "Course Title": "Molecular Breeding in Field Crops",
                "Credit hours": "2+1",
                "Course offering Department": "Plant Biotech.",
                
              },
              {
                "S.No.": 9,
                "Course No.": "BTB 309",
                "Course Title": "Molecular Breeding of Horticultural Crops and Forest Trees",
                "Credit hours": "2+1",
                "Course offering Department": "Plant Biotech.",
                
              },
              {
                "S.No.": 10,
                "Course No.": "BTB 310",
                "Course Title": "Epigenetics and Gene Regulation",
                "Credit hours": "2+1",
                "Course offering Department": "Plant Biotech.",
                
              },
              {
                "S.No.": 11,
                "Course No.": "NCC 101",
                "Course Title": "National Cadet Crops",
                "Credit hours": "0+1#",
                "Course offering Department": "",
                
              }
        ],
        "sem7": [
            {
                "S.No.": 1,
                "Course No.": "BTB 401",
                "Course Title": "Student READY Skill Development Module (Biotechnology Work experience in Industry and Institutes) in Plant biotechnology area- 20 weeks Outside the campus: 12 weeks In the campus: 8 weeks",
                "Credit hours": "0+20",
                "Course offering Department": "Plant Biotech."
              },
              {
                "S.No.": 2,
                "Course No.": "BTB 402",
                "Course Title": "Educational Tour",
                "Credit hours": "0+2^",
                "Course offering Department": "Plant Biotech."
              }
        ],
        "sem8": [
            {
                "S.No.": "1.",
                "Course No.": "BTB 403",
                "Course Title": "Student READY Project Formulation, Execution and Presentation",
                "Credit hours": "0+10",
                "Course offering Department": "Plant Biotech."
              },
              {
                "S.No.": "2.",
                "Course No.": "BTB 451 to BTB 458*",
                "Course Title": "Student READY Entrepreneurial Development in Biotechnology",
                "Credit hours": "0+10",
                "Course offering Department": "Plant Biotech."
              }
        ]
        },
        "B.Tech.(Energy and Environmental Engineering)":{
            "course" : "", 
            "sem1":[

            ],
            "sem2":[

            ],
            "sem3":[

            ],
            "sem4":[

            ],
            "sem5":[

            ],
            "sem6":[

            ],
            "sem7":[

            ],
            "sem8":[

            ]       
        },
        "B.S.(Agribusiness Management)":{
            "course" : "", 
            "sem1":[

            ],
            "sem2":[

            ],
            "sem3":[

            ],
            "sem4":[

            ],
            "sem5":[

            ],
            "sem6":[

            ],
            "sem7":[

            ],
            "sem8":[

            ]
        }
    },
    "PG" : {
        "Yet to be data collected" : {

        }
        }

}

// select main head

const courseSection = document.getElementById('r1');
const streamSection = document.getElementById('r2');
const semasterSection = document.getElementById('r3');
const gpaSection = document.getElementById('r4');

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

createCourseSection();

function clearSection(section){
    while(section.firstChild){
        section.removeChild(section.lastChild);
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
        createStreamSection()
    })
    return element
}

// create stream section from selected course 
function createStreamSection(){
    clearSection(streamSection);
    clearSection(semasterSection);
    clearSection(gpaSection);
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

function dictIsEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function resSection(){
    let div = document.createElement('div');
    
    let gpaCalBtn = document.createElement('h1');
    gpaCalBtn.textContent = "Cal GPA"
    gpaCalBtn.classList.add('button');
    gpaCalBtn.addEventListener("click", calculateGpa);
    div.appendChild(gpaCalBtn);
    
    let subDiv = document.createElement('div');

    let tcp = document.createElement('h1');
    tcp.id = "tcp";
    subDiv.appendChild(tcp)

    let tch = document.createElement('h1');
    tch.id = "tch";
    subDiv.appendChild(tch)

    let gpa = document.createElement('h1')
    gpa.id = "gpa"
    subDiv.appendChild(gpa)
    // subDiv.classList.add('items');

    div.appendChild(subDiv);
    div.classList.add("grid")

    return div
    
    
}
function createGpaSection(){
    clearSection(gpaSection);
    gpaSection.appendChild(infoSection());
    gpaSection.appendChild(createSubjectSection());
    gpaSection.appendChild(resSection());
} 

function parseExp(str){
    str = str.replace('#', '')
    str = str.replace('*', '')
    str = str.replace('^', '')
    return str
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

            gradePoints = parseInt(givenValue);
            console.log(gradePoints);
    
            gradePoints = (gradePoints/100) * 10;
    
            creditHours = eval(parseExp(element['Credit hours']));
    
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
    const tcpRes = document.getElementById('tcp');
    tcpRes.innerHTML = "total Credit Points : " + totalCreditPoints.toFixed(3);
    
    const tchRes = document.getElementById('tch');
    tchRes.innerHTML = "total Credit Hours : " + totalCreditHours.toFixed(3);

    const gpaRes = document.getElementById('gpa');
    gpaRes.innerHTML = "GPA : " + gpa.toFixed(3);

    // console.log(subjects);
  }




