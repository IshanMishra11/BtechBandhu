const semesterSubjects = { 
    "semester1": {
      "Mathematics": 
        "https://www.youtube.com/watch?v=AvDiv-1hl5E&list=PLkojphh8hBnbh85c2gGeQERmld5rRNEZJ",
        
      "Physics":" https://www.youtube.com/watch?v=20DALIRwvDg&list=PLkojphh8hBnah-09sz2BzQo4PpjKmZeii",
      "Chemistry": "https://www.youtube.com/watch?v=bRAbfS660-U&list=PLkojphh8hBnZtsYDbDzU8qkisYOvPiuqyy",
      "Basic Electrical Engineering": "https://www.youtube.com/watch?v=ltp52bdJQ3w&list=PL-vEH_IPWrhAda9e2l6QtfYQASGFA5yPS&index=3",
      
    },
    "semester2": {
        "Mathematics": 
        "https://www.youtube.com/watch?v=H77AM7WXbyY&list=PL5Dqs90qDljXLjuaGPNgaaoaRa2lXv-Y_",
        
      "Physics":" https://www.youtube.com/watch?v=20DALIRwvDg&list=PLkojphh8hBnah-09sz2BzQo4PpjKmZeii",
      "Chemistry": "https://www.youtube.com/watch?v=bRAbfS660-U&list=PLkojphh8hBnZtsYDbDzU8qkisYOvPiuqy",
      "C Programming": "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=73s",
    },
    "semester3": {
        "Analog and Digital Electronics": "https://www.youtube.com/watch?v=pHNbm-4reIc&t=252s",
        
            "Data Structure and Algorithm": "https://www.youtube.com/watch?v=J0OvDNmAWNw",
        
        "Computer Organisation": "https://www.youtube.com/watch?v=DsK35f8wyUw&list=PLmXKhU9FNesS4B30OmgxP7nrzq1UhiMiv",
        "Economics For Engineers": "https://www.youtube.com/watch?v=SJL9wNBBF_E&list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY",
        "Differential Calculus": " https://www.youtube.com/watch?v=-WfAIocM0XM&list=PLn3Wz38keZOfactXksvsD2LDc8wpVBiaA",

        },
    "semester4": {
      "Computer Architecture": "https://www.youtube.com/watch?v=DsK35f8wyUw&list=PLmXKhU9FNesS4B30OmgxP7nrzq1UhiMiv&index=1",
      "Discrete Mathematics": "https://www.youtube.com/watch?v=3zOtLEeHygg",
      "Formal Language and Automata Theory": "https://www.youtube.com/watch?v=9kuynHcM3UA&list=PLmXKhU9FNesSdCsn6YQqu9DmXRMsYdZ2T",
      "Design and Analysis of Algorithm": "https://www.youtube.com/watch?v=z6DY_YSdyww&list=PLmXKhU9FNesQJ3rpOAFE6RTm-2u2diwKn",
     "Biology": "https://www.youtube.com/watch?v=hqZFeS9kFpY&list=PLAggmvP4R7cb910m_wa7D14LRSoW2d1V1",
      "Environmental Sciences": "https://www.youtube.com/playlist?list=PLDov2iEZrIAjS4CLZNvZnqrUD_05Bk8H-",
    },
    "semester5": {
      "Software Engineering and Tools": "https://www.youtube.com/watch?v=NlLM3sVF8wY",
      "Operating System": "https://www.youtube.com/watch?v=xw_OuOhjauw",
       "Compiler Design": "https://www.youtube.com/watch?v=OQCjakjCJu4",
      "Java Programming": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
      "Artificial Intelligence": "https://www.youtube.com/watch?v=yiXAmkimZRQ",
    },
    "semester6": {
      "Data Base Management System": "https://www.youtube.com/watch?v=YRnjGeQbsHQ",
      "Computer Networks": "https://www.youtube.com/watch?v=q3Z3Qa1UNBA",
       "Image Processing": "https://www.youtube.com/watch?v=1n6e24oDx1I&list=PLuCtdYt53-ofR_UcDO5xz1EAw9KRUKnbg",
      "Numerical Methods": "https://www.youtube.com/watch?v=77UZR8n6I4E",
      
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