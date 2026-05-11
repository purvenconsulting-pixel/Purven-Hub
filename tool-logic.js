// Theme handling
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon();
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    const current = document.documentElement.getAttribute('data-theme');
    // Sun icon for dark theme (to switch to light)
    // Moon icon for light theme (to switch to dark)
    if (current === 'dark') {
        icon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    } else {
        icon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    }
}

// API interaction
async function callOpenAI(prompt, apiKey) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    })
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Failed to generate content');
  }
  
  const data = await response.json();
  return data.choices[0].message.content.trim();
}

function showResults(text, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  // Split by common delimiters and filter out empty or meta-text
  const lines = text.split('\n').filter(l => l.trim().length > 3 && !l.toLowerCase().includes('here are'));
  
  lines.forEach(line => {
    const cleanLine = line.replace(/^\d+\.\s*|^\-\s*|^\*\s*|^\w+:\s*/, '').trim();
    if (cleanLine) {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `<p>${cleanLine}</p><button class="copy-button" onclick="copyText(this)" title="Copy to clipboard">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path></svg>
        </button>`;
        container.appendChild(div);
    }
  });
  const section = document.getElementById('results-container');
  if (section) section.style.display = 'block';
  section.scrollIntoView({ behavior: 'smooth' });
}

function copyText(btn) {
  const text = btn.previousElementSibling.innerText;
  navigator.clipboard.writeText(text);
  const original = btn.innerHTML;
  btn.innerHTML = '<span style="color: #10b981; font-size: 12px; font-weight: bold;">COPIED!</span>';
  setTimeout(() => btn.innerHTML = original, 2000);
}

document.addEventListener('DOMContentLoaded', initTheme);
