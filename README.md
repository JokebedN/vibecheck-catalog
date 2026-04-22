# 🎵 VibeCheck — A Music Mood Board Catalog

VibeCheck is a Pinterest-style music catalog built around the idea that music matches how you feel. Instead of searching for songs by title, you start by choosing your current mood and the catalog responds to you.

Built for the Snap Engineering Academy 2026 Stage 2 Project Assessment.

---

## What It Does

- Browse 20 songs across 5 genres; Gospel, Afrogospel, Afrobeats, R&B, and UK Rap
- Filter songs instantly by mood using the emoji mood picker
- Search by song title or artist name
- Filter by genre using the dropdown
- Sort songs by title, artist, or year
- Switch between Grid View and Mood Board View
- Heart songs to save them to your personal playlist
- Add a personal note to any song card
- Upload an optional photo to any song card

---

## Data Structure

My data is stored as an array of objects in scripts.js. Each song is one object with 7 properties:

- title
- artist
- genre
- mood
- year
- tags (an array inside the object)
- spotify (link)

---

## Features and Operations

| Feature | Operation | JavaScript Used |
|---|---|---|
| Mood picker | Filtering | .filter() |
| Search bar | Searching | .filter(), .toLowerCase(), .includes() |
| Genre dropdown | Filtering | .filter() |
| Sort dropdown | Sorting | .sort(), .localeCompare() |
| Heart button | Adding, Removing | .push(), .filter(), .some() |
| Notes on cards | Updating | object key-value storage |
| Photo upload | Updating | FileReader API |
| Mood Board View | Display modification | .map(), .join() |

---

## Live Site

https://jokebedn.github.io/vibecheck-catalog

---

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Google Fonts (Playfair Display, Outfit)
- GitHub Pages for deployment
