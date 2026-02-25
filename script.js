 const toggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// 1. Create a reusable function to update the UI
function updateUI(isDark) {
    bodyElement.classList.toggle('dark-mode', isDark);
    toggleBtn.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

// 2. Initial Load Check
const savedTheme = localStorage.getItem('theme');
updateUI(savedTheme === 'dark');

// 3. Click Logic
toggleBtn.addEventListener('click', () => {
    const willBeDark = !bodyElement.classList.contains('dark-mode');
    updateUI(willBeDark);
    localStorage.setItem('theme', willBeDark ? 'dark' : 'light');
});

async function getAddress(lat, lon, accessKey) {
  // const url = `https://api.positionstack.com/v1/reverse?access_key=${accessKey}&query=${lat},${lon}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log("API Response:", data);
  if (data.data && data.data.length > 0) {
    console.log(data.data[0].label);
    return data.data[0].label;
  }
 else if (data.error) {
    console.error("Error fetching address:", data.error);
  }
  return "No address found";
}
getAddress(6.6778, 3.1654, "ace75b2dfb68ee801192bc93d07d8f9a").then (address => {
    document.getElementById("address").textContent = address;
});