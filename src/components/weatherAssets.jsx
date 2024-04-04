import clearDayImage from '../image/weather-bg/Weather=Clear, Moment=Day.png';
import clearNightImage from '../image/weather-bg/Weather=Clear, Moment=Night.png';
import cloudyDayImage from '../image/weather-bg/Weather=Cloudy, Moment=Day.png';
import cloudyNightImage from '../image/weather-bg/Weather=Cloudy, Moment=Night.png';
import rainDayImage from '../image/weather-bg/Weather=Rain, Moment=Day.png';
import rainNightImage from '../image/weather-bg/Weather=Rain, Moment=Night.png';
import fewCloudsDayImage from '../image/weather-bg/Weather=Few Clouds, Moment=Day.png';
import fewCloudsNightImage from '../image/weather-bg/Weather=Few Clouds, Moment=Night.png';
import clearDayIcon from '../image/weather-icon/Weather=Clear, Moment=Day.svg';
import clearNightIcon from '../image/weather-icon/Weather=Clear, Moment=Night.svg';
import cloudyDayIcon from '../image/weather-icon/Weather=Cloudy, Moment=Day.svg';
import cloudyNightIcon from '../image/weather-icon/Weather=Cloudy, Moment=Night.svg';
import rainDayIcon from '../image/weather-icon/Weather=Rain, Moment=Day.svg';
import rainNightIcon from '../image/weather-icon/Weather=Rain, Moment=Night.svg';
import fewCloudsDayIcon from '../image/weather-icon/Weather=Few clouds, Moment=Day.svg';
import fewCloudsNightIcon from '../image/weather-icon/Weather=Few clouds, Moment=Night.svg';
import stormDayIcon from '../image/weather-icon/Weather=Storm, Moment=Day.svg';
import stormNightIcon from '../image/weather-icon/Weather=Storm, Moment=Night.svg';

const weatherAssets = {
  backgrounds: [
    { description: 'clear', image: clearDayImage, icon: clearDayIcon },
    { description: 'cloud', image: cloudyDayImage, icon: cloudyDayIcon },
    { description: 'rain', image: rainDayImage, icon: rainDayIcon },
    { description: 'few clouds', image: fewCloudsDayImage, icon: fewCloudsDayIcon },
  ],
  icons: {
    clearDay: clearDayIcon,
    clearNight: clearNightIcon,
    cloudyDay: cloudyDayIcon,
    cloudyNight: cloudyNightIcon,
    rainDay: rainDayIcon,
    rainNight: rainNightIcon,
    fewCloudsDay: fewCloudsDayIcon,
    fewCloudsNight: fewCloudsNightIcon,
    stormDay: stormDayIcon,
    stormNight: stormNightIcon,
  }
};

export default weatherAssets;
