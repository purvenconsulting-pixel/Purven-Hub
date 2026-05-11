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
  const lines = text.split('\n').filter(line => line.trim().length > 0);
  
  lines.forEach(line => {
    // Clean up list markers (1., -, etc)
    const cleanLine = line.replace(/^\d+\.\s*|^\-\s*/, '').trim();
    if (cleanLine) {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `<p>${cleanLine}</p><button class="copy-btn" onclick="copyText(this)">📋</button>`;
        container.appendChild(div);
    }
  });
  document.getElementById('result-section').style.display = 'block';
}

function copyText(btn) {
  const text = btn.previousElementSibling.innerText;
  navigator.clipboard.writeText(text);
  const original = btn.innerText;
  btn.innerText = '✅';
  setTimeout(() => btn.innerText = original, 2000);
}
