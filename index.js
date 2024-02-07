const statusEl = document.querySelector(".status");
const btn = document.querySelector(".find-location");

const findMyLocation = () => {
  const success = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const locationAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    fetch(locationAPI)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        statusEl.textContent = `${data.principalSubdivision}, ${data.city}`;
      });
  };
  const error = () => {
    statusEl.textContent = "unable to get your location";
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

btn.addEventListener("click", findMyLocation);
