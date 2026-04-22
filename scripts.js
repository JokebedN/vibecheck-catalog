// here is my data
// songs is an array of objects. each object represents one song with 7 properties:
// title, artist, genre, mood, year, tags (array), spotify (link)

// I used an array of objects because each song has multiple details
// and I needed to store many songs in one place I could loop through

const songs = [
  {
    title: "SOMETHING NEW",
    artist: "Sondae, Crystal Mills",
    genre: "Gospel",
    mood: "Joyful",
    year: 2023,
    tags: ["worship", "praise", "uplifting"],
    spotify: "https://open.spotify.com/track/3gCK5QBuGBHOhd8Jp8A81U"
  },
  {
    title: "Lean Back",
    artist: "Capital City Music, Dion Davis",
    genre: "Gospel",
    mood: "Worshipful",
    year: 2022,
    tags: ["surrender", "worship", "calm"],
    spotify: "https://open.spotify.com/track/3fBKu5UIoPE1Nk8cZbMphU"
  },
  {
    title: "RUN 2 U",
    artist: "Maverick City Music, Hindrix Brown",
    genre: "Gospel",
    mood: "Peaceful",
    year: 2022,
    tags: ["faith", "peace", "devotion"],
    spotify: "https://open.spotify.com/track/5606mEcJdNmnRVzXdXeSFO"
  },
  {
    title: "Search Me",
    artist: "New Path Worship",
    genre: "Gospel",
    mood: "Worshipful",
    year: 2021,
    tags: ["prayer", "worship", "surrender"],
    spotify: "https://open.spotify.com/track/24jsqDBxXP8WQRCA7AJlnB"
  },
  {
    title: "Promises",
    artist: "Kachi Annuncia",
    genre: "Afrogospel",
    mood: "Hopeful",
    year: 2022,
    tags: ["hope", "faith", "trust"],
    spotify: "https://open.spotify.com/track/6Toiq8ZjdvUlFR6I9Pz0Qw"
  },
  {
    title: "ZA",
    artist: "Anendlessocean",
    genre: "Afrogospel",
    mood: "Peaceful",
    year: 2021,
    tags: ["calm", "worship", "ambient"],
    spotify: "https://open.spotify.com/album/7glx4kVsugS16QmJyouyhT"
  },
  {
    title: "Too Faithful",
    artist: "Moses Bliss",
    genre: "Afrogospel",
    mood: "Grateful",
    year: 2023,
    tags: ["gratitude", "testimony", "praise"],
    spotify: "https://open.spotify.com/track/0XmK2zPgY1t1msdf1jyhHw"
  },
  {
    title: "Olorun Agbaye",
    artist: "Nathaniel Bassey",
    genre: "Afrogospel",
    mood: "Worshipful",
    year: 2020,
    tags: ["worship", "yoruba", "praise"],
    spotify: "https://open.spotify.com/track/20lLlwsueYXmPNfNuw7Ata"
  },
  {
    title: "Heavenly Therapy",
    artist: "Maio",
    genre: "Afrogospel",
    mood: "Peaceful",
    year: 2023,
    tags: ["healing", "calm", "worship"],
    spotify: "https://open.spotify.com/track/2V9VUK5f9xhFTfiphqjipE"
  },
  {
    title: "Stand Up",
    artist: "Sondae, Moflo Music",
    genre: "Afrogospel",
    mood: "Joyful",
    year: 2022,
    tags: ["joy", "praise", "energy"],
    spotify: "https://open.spotify.com/track/32pyse6Sa4votkPAPxzkkg"
  },
  {
    title: "Ye",
    artist: "Burna Boy",
    genre: "Afrobeats",
    mood: "Chill",
    year: 2018,
    tags: ["chill", "afrobeats", "smooth"],
    spotify: "https://open.spotify.com/track/3FskQrDXcY24ur2fCvz35O"
  },
  {
    title: "Beginning",
    artist: "Joeboy",
    genre: "Afrobeats",
    mood: "Romantic",
    year: 2019,
    tags: ["love", "romance", "smooth"],
    spotify: "https://open.spotify.com/track/5wHi0nR9PGCygrfhSxI3Hq"
  },
  {
    title: "Nobody",
    artist: "DJ Neptune ft. Mr Eazi, Joeboy",
    genre: "Afrobeats",
    mood: "Happy",
    year: 2020,
    tags: ["happy", "dance", "afrobeats"],
    spotify: "https://open.spotify.com/track/2hQG5UZ0DZD0lCpq3rwoWx"
  },
  {
    title: "Try Me",
    artist: "Tems",
    genre: "Afrobeats",
    mood: "Chill",
    year: 2020,
    tags: ["chill", "vibes", "smooth"],
    spotify: "https://open.spotify.com/track/4Ieod2ueT9GEEz9ILN84qP"
  },
  {
    title: "When I See U",
    artist: "Fantasia",
    genre: "R&B",
    mood: "Romantic",
    year: 2015,
    tags: ["love", "romance", "soul"],
    spotify: "https://open.spotify.com/track/4iuNZTcvT9diFySSzVsnVS"
  },
  {
    title: "Best Part",
    artist: "Daniel Caesar ft. H.E.R.",
    genre: "R&B",
    mood: "Romantic",
    year: 2017,
    tags: ["love", "soft", "romance"],
    spotify: "https://open.spotify.com/track/1Q7EgiMOuwDcB0PJC6AzON"
  },
  {
    title: "INTOXYCATED",
    artist: "Oxlade ft. Dave",
    genre: "R&B",
    mood: "Chill",
    year: 2023,
    tags: ["chill", "afrofusion", "smooth"],
    spotify: "https://open.spotify.com/track/1lcSY9kXL2PG8HYuDlV4KW"
  },
  {
    title: "175 Months",
    artist: "Dave",
    genre: "UK Rap",
    mood: "Emotional",
    year: 2019,
    tags: ["emotional", "storytelling", "deep"],
    spotify: "https://open.spotify.com/track/7HkOwm4wmvTsKbe405RhE3"
  },
  {
    title: "Bad Blood",
    artist: "Stormzy ft. Nao",
    genre: "UK Rap",
    mood: "Emotional",
    year: 2019,
    tags: ["emotional", "grime", "heartfelt"],
    spotify: "https://open.spotify.com/track/64vA8KSO1tQJDC7jhV1cML"
  },
  {
    title: "Raindance",
    artist: "Dave ft. Tems",
    genre: "UK Rap",
    mood: "Romantic",
    year: 2021,
    tags: ["romantic", "afrofusion", "smooth"],
    spotify: "https://open.spotify.com/track/3oTuTpF1F3A7rEC6RKsMRz"
  }
]

// these are my state variables - they track what is currently happening on the page

// tracks which songs are currently showing - starts as a full copy of songs
let displayedSongs = [...songs]

// tracks which songs the user has hearted
let playlist = []

// tracks whether we are in mood board view or grid view
let isMoodBoardView = false

// stores notes for each song, using song title as the key
let notes = {}

// stores user uploaded photos for each song, using song title as the key
let photos = {}

// Creating cards, this function takes one song object and builds its card as HTML
// I use template literals (backticks) so I can write HTML with JS variables inside

function createCard(song) {
  // create a safe id from the song title by replacing spaces with dashes
  const safeId = song.title.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "")
  const isLiked = playlist.some(p => p.title === song.title)
  const savedNote = notes[song.title] || ""
  const savedPhoto = photos[song.title] || ""

  return `
    <div class="card" data-mood="${song.mood}" data-genre="${song.genre}">

      <div class="card-color-banner mood-${song.mood.toLowerCase()}"></div>

      ${savedPhoto ? `<img src="${savedPhoto}" class="card-photo" alt="user photo for ${song.title}"/>` : ""}

      <div class="card-content">

        <h2 class="card-title">${song.title}</h2>
        <p class="card-artist">${song.artist}</p>

        <div class="card-tags">
          <span class="genre-tag">${song.genre}</span>
          <span class="mood-tag mood-color-${song.mood.toLowerCase()}">${song.mood}</span>
        </div>

        <p class="card-year">${song.year}</p>

        <div class="card-tags">
          ${song.tags.map(tag => `<span class="tag">#${tag}</span>`).join("")}
        </div>

        <div class="card-actions">
          <a href="${song.spotify}" target="_blank" class="spotify-btn">▶ Listen on Spotify</a>
          <button class="heart-btn" onclick="togglePlaylist('${song.title}')">
            ${isLiked ? "❤️" : "🤍"}
          </button>
        </div>

        <div class="card-note-section">
          <span class="note-label">📝 My Note</span>
          <p class="note-display" id="note-display-${safeId}">${savedNote ? `"${savedNote}"` : ""}</p>
          <textarea class="note-input" id="note-${safeId}" placeholder="Write something about this song...">${savedNote}</textarea>
          <button class="save-note-btn" onclick="saveNote('${song.title}')">Save Note</button>
        </div>

        <div class="card-photo-section">
          <span class="note-label">📷 Add a Photo (optional)</span>
          ${savedPhoto ? `<button class="remove-photo-btn" onclick="removePhoto('${song.title}')">Remove Photo</button>` : ""}
          <input type="file" accept="image/*" class="photo-input" id="photo-${safeId}" onchange="uploadPhoto('${song.title}', '${safeId}')"/>
        </div>

      </div>
    </div>
  `
}

// Showing cards, this is my main display function
// it loops through displayedSongs and puts each card on the page
// displayedSongs changes when I search or filter, songs array never changes

function showCards() {
  const cardContainer = document.getElementById("card-container")

  if (isMoodBoardView) {
    showMoodBoardView()
    return
  }

  if (displayedSongs.length === 0) {
    cardContainer.innerHTML = `<p class="no-results">No songs found. Try a different search!</p>`
    updateStats()
    return
  }

  cardContainer.innerHTML = displayedSongs.map(song => createCard(song)).join("")
  updateStats()
}

// Updating the stats bar
// I use Set to get unique genres without duplicates

function updateStats() {
  const statsText = document.getElementById("stats-text")
  const totalGenres = [...new Set(songs.map(s => s.genre))].length
  statsText.textContent = `${songs.length} songs • ${totalGenres} genres • Showing: ${displayedSongs.length} results`
}

// Filtering by mood
// when user clicks an emoji button this filters the displayed songs

function filterByMood(mood) {
  // remove active class from all mood buttons
  document.querySelectorAll(".mood-btn").forEach(btn => btn.classList.remove("active"))

  // add active class to the button that was clicked
  document.querySelectorAll(".mood-btn").forEach(btn => {
    if (btn.textContent.includes(mood)) btn.classList.add("active")
  })

  // show all songs or filter by mood
  if (mood === "All") {
    displayedSongs = [...songs]
  } else {
    displayedSongs = songs.filter(song => song.mood === mood)
  }

  // reset other controls
  document.getElementById("genreFilter").value = "All"
  document.getElementById("searchInput").value = ""

  showCards()
}

// searching songs, runs every time the user types in the search bar
// uses .toLowerCase() and .includes() so search is not case sensitive

function searchSongs() {
  const searchText = document.getElementById("searchInput").value.toLowerCase()

  displayedSongs = songs.filter(song => {
    const titleMatch = song.title.toLowerCase().includes(searchText)
    const artistMatch = song.artist.toLowerCase().includes(searchText)
    return titleMatch || artistMatch
  })

  showCards()
}

// filtering by genre
// runs when user picks a genre from the dropdown

function filterByGenre() {
  const selectedGenre = document.getElementById("genreFilter").value

  // clear search and mood buttons
  document.getElementById("searchInput").value = ""
  document.querySelectorAll(".mood-btn").forEach(btn => btn.classList.remove("active"))

  if (selectedGenre === "All") {
    displayedSongs = [...songs]
  } else {
    displayedSongs = songs.filter(song => song.genre === selectedGenre)
  }

  showCards()
}

// sorting songs, runs when user picks a sort option from the dropdown
// .sort() reorders the array, .localeCompare() compares strings alphabetically

function sortSongs() {
  const sortValue = document.getElementById("sortSelect").value

  if (sortValue === "title") {
    displayedSongs.sort((a, b) => a.title.localeCompare(b.title))
  } else if (sortValue === "artist") {
    displayedSongs.sort((a, b) => a.artist.localeCompare(b.artist))
  } else if (sortValue === "year") {
    // newest first
    displayedSongs.sort((a, b) => b.year - a.year)
  } else {
    displayedSongs = [...songs]
  }

  showCards()
}

// Adding and Removing from playlist
// .find() locates the song, .some() checks if it is already in playlist
// .filter() removes it, .push() adds it

function togglePlaylist(songTitle) {
  const song = songs.find(s => s.title === songTitle)
  const alreadyInPlaylist = playlist.some(p => p.title === songTitle)

  if (alreadyInPlaylist) {
    // remove it using filter - keeps every song that does NOT match
    playlist = playlist.filter(p => p.title !== songTitle)
  } else {
    // add it using push
    playlist.push(song)
  }

  showCards()
  updatePlaylist()
}

// this updates the my playlist section at the bottom of the page
function updatePlaylist() {
  const playlistContainer = document.getElementById("playlist-container")
  const playlistCount = document.getElementById("playlist-count")

  playlistCount.textContent = `(${playlist.length} songs)`

  if (playlist.length === 0) {
    playlistContainer.innerHTML = `<p class="empty-playlist">Click the ❤️ on any song to add it here!</p>`
    return
  }

  playlistContainer.innerHTML = playlist.map(song => createCard(song)).join("")
}

// saving notes, stores the note text in the notes object using song title as key
// then updates the display without refreshing all cards

function saveNote(songTitle) {
  const safeId = songTitle.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "")
  const noteInput = document.getElementById(`note-${safeId}`)
  const noteText = noteInput.value

  // save to our notes object
  notes[songTitle] = noteText

  // update just the display text without refreshing everything
  const noteDisplay = document.getElementById(`note-display-${safeId}`)
  noteDisplay.textContent = noteText ? `"${noteText}"` : ""
}

// 
// Photo upload, when user picks a photo, FileReader converts it to a data URL
// we store that URL in the photos object and update the card

function uploadPhoto(songTitle, safeId) {
  const fileInput = document.getElementById(`photo-${safeId}`)
  const file = fileInput.files[0]

  if (!file) return

  // FileReader reads the image file and converts it to a URL we can use in HTML
  const reader = new FileReader()

  reader.onload = function(event) {
    // save the photo data URL using song title as key
    photos[songTitle] = event.target.result

    // refresh cards so the photo appears
    showCards()
    updatePlaylist()
  }

  reader.readAsDataURL(file)
}

// This removes a photo from a song card
function removePhoto(songTitle) {
  delete photos[songTitle]
  showCards()
  updatePlaylist()
}

// toggling between grid view and mood board view
// isMoodBoardView flips between true and false

function toggleView() {
  isMoodBoardView = !isMoodBoardView
  const toggleBtn = document.querySelector(".view-toggle-btn")
  toggleBtn.textContent = isMoodBoardView ? "🔲 Grid View" : "📌 Mood Board View"
  showCards()
}

// Mood board view, groups songs by mood and creates a section for each mood

function showMoodBoardView() {
  const cardContainer = document.getElementById("card-container")
  const uniqueMoods = [...new Set(displayedSongs.map(s => s.mood))]

  cardContainer.innerHTML = uniqueMoods.map(mood => {
    const songsInMood = displayedSongs.filter(s => s.mood === mood)
    return `
      <div class="mood-board-section">
        <div class="mood-board-heading mood-${mood.toLowerCase()}">
          ${mood} • ${songsInMood.length} songs
        </div>
        <div class="mood-board-grid">
          ${songsInMood.map(song => createCard(song)).join("")}
        </div>
      </div>
    `
  }).join("")

  updateStats()
}

// This runs automatically when the page loads
document.addEventListener("DOMContentLoaded", showCards)