const semesterSubjects = { 
    "semester1": {
      "Mathematics": 
        "https://www.youtube.com/playlist?list=PL3qvHcrYGy1tM431UvWwUYgvhXn-19C633",
        
      "Physics":" https://www.youtube.com/playlist?list=PL3qvHcrYGy1u112gfsHycdWaLTVRt8ame",
      "Chemistry-1 (Gr-B)": "https://www.youtube.com/playlist?list=PL3qvHcrYGy1u112gfsHycdWaLTVRt8ame",
      "Basic Electrical Engineering": "https://www.youtube.com/playlist?list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5",
      
    },
    "semester2": {
        "Mathematics": 
        "https://www.youtube.com/playlist?list=PL3qvHcrYGy1tM431UvWwUYgvhXn-19C63",
        
      "Physics":" https://www.youtube.com/playlist?list=PL3qvHcrYGy1u112gfsHycdWaLTVRt8ame",
      "Chemistry": "https://www.youtube.com/playlist?list=PL3qvHcrYGy1u112gfsHycdWaLTVRt8ame",
      "C Programming": "https://www.youtube.com/watch?v=C5GCFEMcIGQ&list=PLqleLpAMfxGBn9v-K17ztBfNXHzPnX5sN",
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
      "Computer Architecture": "https://www.youtube.com/watch?v=A37uXAK__LE&list=PL3R9-um41Jsz4as9nqgVB6YRR90rs0wE6",
      "Discrete Mathematics": "https://www.youtube.com/watch?v=wGLTV8MgLlA&list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg",
      "Formal Language and Automata Theory": "https://www.youtube.com/watch?v=9kuynHcM3UA&list=PLmXKhU9FNesSdCsn6YQqu9DmXRMsYdZ2T",
      "Design and Analysis of Algorithm": "https://www.youtube.com/watch?v=z6DY_YSdyww&list=PLmXKhU9FNesQJ3rpOAFE6RTm-2u2diwKn",
     "Biology": "https://www.youtube.com/watch?v=hqZFeS9kFpY&list=PLAggmvP4R7cb910m_wa7D14LRSoW2d1V1",
      "Environmental Sciences": "https://www.youtube.com/playlist?list=PLDov2iEZrIAjS4CLZNvZnqrUD_05Bk8H-",
    },
    "semester5": {
      "Software Engineering and Tools": "https://www.youtube.com/watch?v=uJpQlyT_CK4&list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2",
      "Operating System": "https://www.youtube.com/watch?v=bkSWJJZNgf8&list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
       "Compiler Design": "https://www.youtube.com/watch?v=XUsw5igq4DM&list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc",
      "Java Programming": "https://www.youtube.com/watch?v=AEo4KgwKYoU&list=PLqleLpAMfxGCbdaJ6SoExDfHrTfRDeWeG",
      "Artificial Intelligence": "https://www.youtube.com/watch?v=uB3i-qV6VdM&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI",
    },
    "semester6": {
      "Data Base Management System": "https://www.youtube.com/watch?v=YRnjGeQbsHQ&list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV",
      "Computer Networks": "https://www.youtube.com/watch?v=q3Z3Qa1UNBA&list=PLmXKhU9FNesSjFbXSZGF8JF_4LVwwofCd",
       "Image Processing": "https://www.youtube.com/watch?v=qUSOpuMMhoo&list=PLR5USSocuZ5dxwi3eVsC-xvA4Ux80d6X4",
      "Numerical Methods": "https://www.youtube.com/watch?v=62HH1bYxviw&list=PLn3Wz38keZOdtjGPzvxN07tXBmoAvkDr6",
      
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