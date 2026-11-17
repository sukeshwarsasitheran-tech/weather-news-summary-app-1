const cityData = {
  'san francisco': { name: 'San Francisco, CA', temp: 68, feels: 70, condition: 'Mostly sunny', icon: '☀️', desc: 'A bright, pleasant afternoon. Light layers should do the trick.', high: 71, low: 56, wind: '8 mph', humidity: '62%', tip: "Comfortable conditions today. Take sunglasses if you're heading out this afternoon.", summary: 'A mild, mostly sunny day is ahead in San Francisco—ideal for getting outside. Around the world, leaders are meeting on clean energy, researchers report a promising ocean discovery, and the arts calendar is celebrating a major milestone.', forecast: [['Today','☀️','71°','56°'],['Wed','🌤️','69°','55°'],['Thu','🌫️','65°','54°'],['Fri','☀️','70°','56°']] },
  'new york': { name: 'New York, NY', temp: 74, feels: 75, condition: 'Partly cloudy', icon: '⛅', desc: 'Clouds and sunshine take turns. A comfortable day for a city stroll.', high: 77, low: 63, wind: '6 mph', humidity: '58%', tip: 'A light jacket may come in handy after sunset. The afternoon looks great for a walk.', summary: 'A warm, partly cloudy day is in store for New York, with a pleasant afternoon ahead. Globally, clean energy talks are underway, scientists have shared a hopeful ocean finding, and a landmark arts celebration is drawing attention.', forecast: [['Today','⛅','77°','63°'],['Wed','🌦️','72°','61°'],['Thu','☀️','75°','60°'],['Fri','🌤️','73°','59°']] },
  'london': { name: 'London, UK', temp: 61, feels: 59, condition: 'Light showers', icon: '🌦️', desc: 'A few passing showers are possible. Keep an umbrella within reach.', high: 64, low: 52, wind: '12 mph', humidity: '78%', tip: 'Pack an umbrella for the occasional shower, especially if you will be out for a while.', summary: 'London is looking cool with a chance of light showers, so an umbrella is a smart companion. Elsewhere, clean energy leaders are meeting, marine researchers have announced a discovery, and arts institutions are marking an anniversary.', forecast: [['Today','🌦️','64°','52°'],['Wed','☁️','62°','51°'],['Thu','🌧️','59°','50°'],['Fri','🌤️','63°','49°']] },
  'tokyo': { name: 'Tokyo, Japan', temp: 72, feels: 74, condition: 'Mostly cloudy', icon: '☁️', desc: 'Cloud cover keeps things comfortable. A good day to get around town.', high: 75, low: 65, wind: '9 mph', humidity: '70%', tip: 'Cloudy skies are expected to hold. Comfortable shoes are a better bet than an extra layer.', summary: 'Tokyo is mild under mostly cloudy skies, with comfortable conditions for getting around. World leaders are discussing clean energy goals, researchers are sharing new ocean insights, and cultural events are celebrating a major arts milestone.', forecast: [['Today','☁️','75°','65°'],['Wed','🌤️','77°','64°'],['Thu','🌧️','70°','62°'],['Fri','☀️','73°','61°']] },
  'paris': { name: 'Paris, France', temp: 66, feels: 66, condition: 'Sunny intervals', icon: '🌤️', desc: 'A mix of sunshine and clouds makes for a pleasant day outdoors.', high: 69, low: 55, wind: '7 mph', humidity: '57%', tip: 'A pleasant afternoon is on the cards. Consider a light layer for later in the day.', summary: 'Paris gets a comfortable mix of sunshine and cloud today—good conditions for time outside. Meanwhile, clean energy discussions continue internationally, marine science has a hopeful update, and the arts world is marking an important milestone.', forecast: [['Today','🌤️','69°','55°'],['Wed','☀️','71°','56°'],['Thu','🌦️','67°','54°'],['Fri','☀️','72°','57°']] },
  'sydney': { name: 'Sydney, Australia', temp: 70, feels: 70, condition: 'Clear skies', icon: '☀️', desc: 'Plenty of sunshine and a gentle breeze. Enjoy the outdoors.', high: 74, low: 60, wind: '10 mph', humidity: '53%', tip: 'Sunny skies make sunscreen and water worthwhile if you are spending time outdoors.', summary: 'Sydney is set for a clear, comfortable day with plenty of sunshine. Around the globe, policy makers are talking clean energy, scientists have reported a new ocean finding, and cultural institutions are celebrating a notable arts anniversary.', forecast: [['Today','☀️','74°','60°'],['Wed','🌤️','72°','59°'],['Thu','☀️','76°','61°'],['Fri','🌦️','71°','58°']] }
};

const forecastContainer = document.querySelector('#forecast-list');
const stories = [
  { category: 'SCIENCE', time: '2 hours ago', title: 'Ocean researchers share a hopeful discovery beneath the waves', summary: 'A multinational research team has documented signs of a recovering marine habitat, offering new data for ongoing conservation work.', color: 'blue', icon: '〰' },
  { category: 'CULTURE', time: '5 hours ago', title: 'A landmark arts festival brings global voices together', summary: 'Artists, performers, and audiences are gathering for a week of exhibitions and performances celebrating creative exchange.', color: 'peach', icon: '✳' },
  { category: 'TECHNOLOGY', time: 'Yesterday', title: 'Cities test smarter ways to make daily travel easier', summary: 'Several city pilots are exploring better ways to connect transit services and help commuters plan their journeys.', color: 'lavender', icon: '⌁' }
];
const events = [
  { date: 'THIS WEEK', title: 'Global clean energy meetings', text: 'Delegates are sharing practical steps to expand renewable power and strengthen energy networks.', tone: 'mint', icon: '⚡' },
  { date: 'RECENT DISCOVERY', title: 'New signs of ocean habitat recovery', text: 'Marine scientists have reported encouraging observations that could support future conservation plans.', tone: 'sky', icon: '〰' },
  { date: 'ON THE CULTURE CALENDAR', title: 'International arts celebration', text: 'A major program of exhibitions and performances is bringing artists from many regions together.', tone: 'rose', icon: '✳' }
];

function renderForecast(days) {
  forecastContainer.innerHTML = days.map(([day, icon, high, low]) => `<div class="forecast-day"><span class="forecast-day-name">${day}</span><span class="forecast-icon" aria-hidden="true">${icon}</span><span class="forecast-high">${high}</span><span class="forecast-low">${low}</span></div>`).join('');
}
function renderStories() {
  document.querySelector('#story-list').innerHTML = stories.map(story => `<article class="story-item"><div class="story-art story-art-${story.color}" aria-hidden="true">${story.icon}</div><div class="story-copy"><div class="story-meta"><span class="category-tag">${story.category}</span><span>${story.time}</span></div><h3>${story.title}</h3><p>${story.summary}</p></div></article>`).join('');
}
function renderEvents() {
  document.querySelector('#events-list').innerHTML = events.map(event => `<article class="event-card card"><div class="event-top"><span class="event-icon event-${event.tone}" aria-hidden="true">${event.icon}</span><span class="event-date">${event.date}</span></div><h3>${event.title}</h3><p>${event.text}</p></article>`).join('');
}
function setCity(cityKey) {
  const city = cityData[cityKey];
  if (!city) return false;
  document.querySelector('#location-name').textContent = city.name;
  document.querySelector('#temperature').textContent = city.temp;
  document.querySelector('#feels-like').textContent = `${city.feels}°`;
  document.querySelector('#condition').textContent = city.condition;
  document.querySelector('#weather-icon').textContent = city.icon;
  document.querySelector('#weather-description').textContent = city.desc;
  document.querySelector('#high-low').textContent = `${city.high}° / ${city.low}°`;
  document.querySelector('#wind').textContent = city.wind;
  document.querySelector('#humidity').textContent = city.humidity;
  document.querySelector('#weather-tip').textContent = city.tip;
  document.querySelector('#daily-summary').textContent = city.summary;
  renderForecast(city.forecast);
  return true;
}

document.querySelector('#city-form').addEventListener('submit', event => {
  event.preventDefault();
  const query = document.querySelector('#city-search').value.trim().toLowerCase();
  if (!query) return;
  const match = Object.keys(cityData).find(key => key === query || cityData[key].name.toLowerCase().startsWith(query));
  if (match) {
    setCity(match);
    document.querySelector('#city-search').value = '';
    document.querySelector('#city-search').blur();
  } else {
    const input = document.querySelector('#city-search');
    input.setCustomValidity('Sample data is available for San Francisco, New York, London, Tokyo, Paris, and Sydney.');
    input.reportValidity();
    input.addEventListener('input', () => input.setCustomValidity(''), { once: true });
  }
});

document.querySelector('#theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const dark = document.body.classList.contains('dark-mode');
  document.querySelector('#theme-toggle').setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
});

document.querySelector('#refresh-news').addEventListener('click', event => {
  const button = event.currentTarget;
  button.classList.add('is-refreshing');
  stories.push(stories.shift());
  renderStories();
  window.setTimeout(() => button.classList.remove('is-refreshing'), 500);
});

const today = new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date());
document.querySelector('#today-label').textContent = `YOUR DAILY BRIEF · ${today.toUpperCase()}`;
renderForecast(cityData['san francisco'].forecast);
renderStories();
renderEvents();
