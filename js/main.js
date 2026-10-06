// =====================================================================
// ALDRIN SANES — PORTFOLIO SCRIPT
// Two small jobs: the light/dark theme toggle and the "Copy" email button.
// The case-study pages load this file too, so code that needs a homepage-only
// element checks that the element exists first.
// =====================================================================

// ---------- 1. Theme toggle ----------
// The page reads the theme from the data-theme attribute on <html>.
// No attribute = follow the visitor's system setting.
const root = document.documentElement;
const themeButton = document.getElementById('theme-toggle');

// Remember the visitor's choice. localStorage can be blocked in private
// windows, so every read and write is wrapped in try/catch.
function loadSavedTheme() {
  try {
    return localStorage.getItem('theme'); // "light", "dark" or null
  } catch (error) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch (error) {
    // Nothing to do: the theme still changes, it just won't be remembered.
  }
}

// Work out which theme is showing right now.
function currentTheme() {
  const chosen = root.getAttribute('data-theme');
  if (chosen) return chosen;
  // Dark is the default look unless the system asks for light.
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeButton.textContent = theme === 'dark' ? '◐ Light' : '◑ Dark';
}

// On load: use the saved choice if there is one.
const saved = loadSavedTheme();
if (saved) {
  applyTheme(saved);
} else {
  themeButton.textContent = currentTheme() === 'dark' ? '◐ Light' : '◑ Dark';
}

themeButton.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  saveTheme(next);
});

// ---------- 2. Copy email ----------
const copyButton = document.getElementById('copy-email');
const emailLink = document.getElementById('email');

if (copyButton && emailLink) copyButton.addEventListener('click', async () => {
  const email = emailLink.textContent.trim();
  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = 'Copied';
  } catch (error) {
    // Clipboard blocked: select the text so the visitor can copy it.
    const range = document.createRange();
    range.selectNodeContents(emailLink);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = 'Selected';
  }
  // Reset the label after two seconds.
  setTimeout(() => { copyButton.textContent = 'Copy'; }, 2000);
});

// ---------- 3. Footer year ----------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
