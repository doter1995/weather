import key from "./Key";
import City from "./city";

export const getWeather = (cityId = 101110101, version = 1) => {
  return new Promise((resolve, reject) => {
    fetch(`https://www.tianqiapi.com/api/?version=v${version}&cityid=${cityId}`)
      .then(data => data.json())
      .then(data => {
        resolve(data.data);
      })
      .catch(e => {
        reject(e);
      });
  });
};
export const getCity = position => {
  return new Promise((resolve, reject) => {
    const { latitude, longitude } = position.coords;

    let lnglat = `${longitude.toFixed(5)},${latitude.toFixed(5)}`;
    let url = `https://restapi.amap.com/v3/geocode/regeo?key=${key}&location=${lnglat}`;
    fetch(url)
      .then(data => data.json())
      .then(data => {
        if (data.status === "1") {
          return data;
        } else {
          reject();
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(e => reject(e));
  });
};
export const getCityCode = regeocode => {
  const address = regeocode.addressComponent;
  const currentCityes = City.filter(data =>
    address.province.includes(data.provinceZh)
  )
    .filter(data => address.city.includes(data.leaderZh))
    .filter(data => address.district.includes(data.cityZh));

  return currentCityes.length > 0 ? currentCityes[0].id : "101010100";
};
export const getCityName = regeocode => {
  const address = regeocode.addressComponent;
  return `${address.province}-${address.city}-${address.district}`;
};
