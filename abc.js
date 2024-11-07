
const subjectSelect = document.getElementById('subject-select');
const searchBtn = document.getElementById('search-btn');
const playlistContainer = document.getElementById('playlist-container');

// Your curated playlist data (replace with actual data)
const playlists = {
  "Mathematics 1A": "https://www.youtube.com/playlist?list=PL3qvHcrYGy1tM431UvWwUYgvhXn-19C63",
  "Mathematics 1B": "https://www.youtube.com/playlist?list=PL3qvHcrYGy1tM431UvWwUYgvhXn-19C63",
  "Physics-1": "https://www.youtube.com/playlist?list=PL3qvHcrYGy1u112gfsHycdWaLTVRt8ame",
  "Chemistry-1 (Gr-B)": "https://www.youtube.com/playlist?list=PL8dZ1zJp_Cfxfo-j2X8UqYRZbMANm9gKs",
  "Basic Electrical Engineering": "https://www.youtube.com/playlist?list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5",
  "C Programming": "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=72s",
  // ... other subjects
  "Analog and Digital Electronics": "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=72s",
  "Data Structure and Algorithm": "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=72s",
  
  "Computer Organisation": "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=72s",
  "Economics For Engineers": "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=72s",
  "Differential Calculus": "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=72s",
  "Economics For Engineers": "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=72s",
  "Computer Architecture": "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=72s",
  "C Programming": "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=72s",
  "C Programming": "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=72s",
  "Environmental Science": "https://www.youtube.com/watch?v=MtpxOdtS9KU&list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg", // Replace with actual playlist URL
  "Biology for Engineers": "https://www.youtube.com/watch?v=hqZFeS9kFpY&list=PLAggmvP4R7cb910m_wa7D14LRSoW2d1V1", // Replace with actual playlist URL
  // ... other subjects
};

// Function to dynamically populate the subject select options
function populateSubjects() {
  for (const subject in playlists) {
    const option = document.createElement('option');
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  }
}

populateSubjects(); // Call the function to populate options on page load

searchBtn.addEventListener('click', () => {
  const selectedSubject = subjectSelect.value;

  if (selectedSubject) {
    const playlistUrl = playlists[selectedSubject];
    playlistContainer.innerHTML = `<a href="${playlistUrl}" target="_blank">View Playlist</a>`;
  } else {
    playlistContainer.innerHTML = `<p>Please select a subject.</p>`;
  }
});

































const semesterSubjects = { 
    "semester1": {
      "Mathematics": 
        "https://www.youtube.com/playlist?list=PL3qvHcrYGy1tM431UvWwUYgvhXn-19C63",
        
      "Physics":" https://www.youtube.com/playlist?list=PL3qvHcrYGy1u112gfsHycdWaLTVRt8ame",
      "Chemistry-1 (Gr-B)": "https://www.youtube.com/playlist?list=PL8dZ1zJp_Cfxfo-j2X8UqYRZbMANm9gKs",
      "Basic Electrical Engineering": "https://www.youtube.com/playlist?list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5",
      
    },
    "semester2": {
        "Mathematics": 
        "https://www.youtube.com/playlist?list=PL3qvHcrYGy1tM431UvWwUYgvhXn-19C63",
        
      "Physics":" https://www.youtube.com/playlist?list=PL3qvHcrYGy1u112gfsHycdWaLTVRt8ame",
      "Chemistry": "https://www.youtube.com/playlist?list=PL8dZ1zJp_Cfxfo-j2X8UqYRZbMANm9gKs",
      "Biology": "https://www.youtube.com/playlist?list=PLDov2iEZrIAjS4CLZNvZnqrUD_05Bk8H-",
      "C Programming": "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=72s",
    },
    "semester3": {
        "Analog and Digital Electronics": ["https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe",
           " https://www.youtube.com/watch?v=8zXIV2ouAoU&list=PLu7-Sp50sSheE1WhdCx5mMGjGTKZ7TYPk",
        ],
            "Data Structure and Algorithm": "https://www.youtube.com/watch?v=AT14lCXuMKI&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU",
        
        "Computer Organisation": ["https://www.youtube.com/watch?v=L9X7XXfHYdU&list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX",
           " https://www.youtube.com/watch?v=kTdvOlA2ko0&list=PLXj4XH7LcRfDXDRzSLv1FfZ-SSA38SiC0",
          " https://www.youtube.com/watch?v=x59-56NpljE&list=PLOZyfu4IYm89sOviwUmXcj2lA66FEf-0M",
        ],
        "Economics For Engineers": "https://www.youtube.com/watch?v=SJL9wNBBF_E&list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY",
        "Differential Calculus": ["https://www.youtube.com/watch?v=N7qVGiOafls&list=PLx_I8FjAg_j2X0Y__-sN2qlyfZeLflUKi",
           " https://www.youtube.com/watch?v=-WfAIocM0XM&list=PLn3Wz38keZOfactXksvsD2LDc8wpVBiaA",],
        },
    "semester4": {
      "Computer Architecture": "https://www.youtube.com/playlist?list=PL8dZ1zJp_Cfxfo-j2X8UqYRZbMANm9gKs",
      "Discrete Mathematics": "https://www.youtube.com/playlist?list=PLDov2iEZrIAjS4CLZNvZnqrUD_05Bk8H-",
      "Formal Language and Automata Theory": "https://www.youtube.com/playlist?list=PL8dZ1zJp_Cfxfo-j2X8UqYRZbMANm9gKs",
      "Design and Analysis of Algorithm": "https://www.youtube.com/playlist?list=PLDov2iEZrIAjS4CLZNvZnqrUD_05Bk8H-",
     "Biology": "https://www.youtube.com/playlist?list=PL8dZ1zJp_Cfxfo-j2X8UqYRZbMANm9gKs",
      "Environmental Sciences": "https://www.youtube.com/playlist?list=PLDov2iEZrIAjS4CLZNvZnqrUD_05Bk8H-",
    },
    "semester5": {
      "Software Engineering and Tools": "https://www.youtube.com/playlist?list=PL8dZ1zJp_Cfxfo-j2X8UqYRZbMANm9gKs",
      "Operating System": "https://www.youtube.com/playlist?list=PLDov2iEZrIAjS4CLZNvZnqrUD_05Bk8H-",
       "Compiler Design": "https://www.youtube.com/playlist?list=PL8dZ1zJp_Cfxfo-j2X8UqYRZbMANm9gKs",
      "Java Programming": "https://www.youtube.com/playlist?list=PLDov2iEZrIAjS4CLZNvZnqrUD_05Bk8H-","Computer Architecture": "https://www.youtube.com/playlist?list=PL8dZ1zJp_Cfxfo-j2X8UqYRZbMANm9gKs",
      "Artificial Intelligence": "https://www.youtube.com/playlist?list=PLDov2iEZrIAjS4CLZNvZnqrUD_05Bk8H-",
    },
    "semester6": {
      "Data Base Management System": "https://www.youtube.com/playlist?list=PL8dZ1zJp_Cfxfo-j2X8UqYRZbMANm9gKs",
      "Computer Networks": "https://www.youtube.com/playlist?list=PLDov2iEZrIAjS4CLZNvZnqrUD_05Bk8H-",
       "Image Processing": "https://www.youtube.com/playlist?list=PL8dZ1zJp_Cfxfo-j2X8UqYRZbMANm9gKs",
      "Numerical Methods": "https://www.youtube.com/playlist?list=PLDov2iEZrIAjS4CLZNvZnqrUD_05Bk8H-","Computer Architecture": "https://www.youtube.com/playlist?list=PL8dZ1zJp_Cfxfo-j2X8UqYRZbMANm9gKs",
      
    },
    // ... add data for semester3, semester4, and semester5
  };

  const semesterElements = document.querySelectorAll('.semester'); 
  const searchBtns = document.querySelectorAll('.search-btn'); 
  const playlistContainer = document.getElementById('playlist-container');

  // Function to populate subject select options for a semester
  function populateSubjects(semester) {
    const subjectSelect = document.getElementById(`semester${semester}-subject`);
    subjectSelect.innerHTML = ""; // Clear existing options

    const semesterKey = `semester${semester}`;
    if (semesterSubjects[semesterKey]) {
      for (const subject in semesterSubjects[semesterKey]) {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
      }
    } else {
      console.error(`Subject data not found for semester: ${semester}`);
    }

    // Add an option to add a new subject
    const newOption = document.createElement('option');
    newOption.value = "add-new";
    newOption.textContent = "Select Subject";
    subjectSelect.appendChild(newOption);
  }

  // Populate subject options for each semester on load
  semesterElements.forEach((semesterElement, index) => {
    populateSubjects(index + 1);
  });

  // Search button click event handler (attached to all buttons)
  searchBtns.forEach(searchBtn => {
    searchBtn.addEventListener('click', function() {
      const semesterText = this.parentElement.querySelector('h2').textContent;
      const semester = semesterText.split(' ')[1].toLowerCase();
      const selectedSubject = document.getElementById(`semester${semester}-subject`).value;

      if (selectedSubject === "add-new") {
        // Prompt user to add a new subject
        const newSubject = prompt("Enter the new subject name:");
        if (newSubject) {
          semesterSubjects[`semester${semester}`][newSubject] = []; // Add the new subject with an empty array
          populateSubjects(semester); // Repopulate subjects to include the new subject
        }
      } else if (selectedSubject) {
        const playlistUrls = semesterSubjects[`semester${semester}`][selectedSubject];

        if (Array.isArray(playlistUrls)) { // Check if multiple playlists are provided
          playlistContainer.innerHTML = ""; // Clear previous results

          playlistUrls.forEach(playlistUrl => {
            const playlistLink = `<a href="${playlistUrl}" target="_blank">View Playlist</a><br>`;
            playlistContainer.innerHTML += playlistLink;
          });
        } else if (playlistUrls) { // Single playlist provided
          playlistContainer.innerHTML = `<a href="${playlistUrls}" target="_blank">View Playlist</a>`;
        } else {
          playlistContainer.innerHTML = `<p>No playlist available for the selected subject.</p>`;
        }
      } else {
        playlistContainer.innerHTML = `<p>Please select a subject.</p>`;
      }
    });
  });