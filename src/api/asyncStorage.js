import { AsyncStorage } from "react-native";

export function getCity() {
  return AsyncStorage.getItem("cityList").then(data =>
    data ? JSON.parse(data) : []
  );
}

export function addCity(item) {
  return getCity().then(items => {
    if (!items.find(data => data.id == item.id)) {
      items.push(item);
    }
    return AsyncStorage.setItem("cityList", JSON.stringify(items));
  });
}
export function removeCity(id) {
  return getCity().then(items => {
    let cityList = items.filter(item => item.id !== id);
    return AsyncStorage.setItem("cityList", JSON.stringify(cityList));
  });
}
