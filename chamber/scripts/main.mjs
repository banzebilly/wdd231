
// Banze  billy




import { getWeather } from "./weather.mjs";
import { loadEvents } from "./events.mjs";
import { loadShortMember } from "./short-member.mjs";
import { setupFooter } from "./footer.mjs";
import { setupNavigation } from "./navigation.mjs";


loadEvents();
loadShortMember();
setupFooter();
setupNavigation();
getWeather();







