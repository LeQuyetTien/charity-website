// Array of locations with name, latitude, and longitude
const locations = [
  {
    name: "Phan Cô Thôn",
    description: "201 Ngô Đến, Vĩnh Phước, Nha Trang, Khánh Hòa",
    date: "Phan Viết Hoàng: 0903 592 592",
    link: "https://maps.app.goo.gl/DwD763m6wkDB2gcv9",
    lat: 12.267684155685622,
    lng: 109.18955936676934,
    icon: "img/map-home.png",
    width: 36,
    height: 36,
  },
  {
    name: "Trường TH Liên Sang",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.26862653369897,
    lng: 108.81842969560573,
    icon: "img/map-school.png",
    width: 36,
    height: 36,
  },
  {
    name: "Trường TH Thị trấn Khánh Vĩnh",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.275758938564188,
    lng: 108.91097735327853,
    icon: "img/map-school.png",
    width: 36,
    height: 36,
  },
  {
    name: "Trường TH Ninh Sơn",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.598679467178966,
    lng: 109.13252419561128,
    icon: "img/map-school.png",
    width: 36,
    height: 36,
  },
  {
    name: "Trường TH Khánh Thượng",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.282203737788265,
    lng: 108.80651263793325,
    icon: "img/map-school.png",
    width: 36,
    height: 36,
  },
  {
    name: "Trường TH Diên Bình",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.237483858113638,
    lng: 109.0687404244415,
    icon: "img/map-school.png",
    width: 36,
    height: 36,
  },
  {
    name: "Trường TH Đại Lãnh",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.83927477090981,
    lng: 109.36139834603696,
    icon: "img/map-school.png",
    width: 36,
    height: 36,
  },
  {
    name: "Trường TH Giang Ly",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.256445235110878,
    lng: 108.80124942444183,
    icon: "img/map-school.png",
    width: 36,
    height: 36,
  },
  {
    name: "Trường TH Cam Hòa",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.106453100683822,
    lng: 109.11424643855811,
    icon: "img/map-school.png",
    width: 36,
    height: 36,
  },
  {
    name: "Trường TH Cam Thịnh Tây",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 11.884466688339815,
    lng: 109.08480235327198,
    icon: "img/map-school.png",
    width: 36,
    height: 36,
  },
];

// Initialize the map
function initMap() {
  // Create a new map instance
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: {
      lat: locations[0].lat,
      lng: locations[0].lng,
    },
  });

  // Create a bounds object to fit all markers
  const bounds = new google.maps.LatLngBounds();

  // Function to add markers to the map
  function addMarkers(locations) {
    locations.forEach((location) => {
      const marker = new google.maps.Marker({
        position: {
          lat: location.lat,
          lng: location.lng,
        },
        map: map,
        title: location.name,
        icon: {
          url: location.icon, // Use custom icon for each marker
          scaledSize: new google.maps.Size(location.width, location.height), // Resize icon if needed
        },
      });

      // Optional: Add an info window for each marker
      const infoWindow = new google.maps.InfoWindow({
        content: `
            <h6>${location.date}</h6>
            <h3>${location.name}</h3>
            <p>${location.description}</p>
            <a href="${location.link}" target="_blank">Xem chi tiết</a>
          `,
      });

      // Show info window when marker is clicked
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });

      // Extend the bounds to include each marker's position
      bounds.extend(new google.maps.LatLng(location.lat, location.lng));
    });
  }

  // Add markers for each location except the user's location
  addMarkers(locations);

  // Adjust the map to fit all markers within the bounds
  map.fitBounds(bounds);

  if (navigator.geolocation) {
    // Get user's current location and add it to the map
    navigator.geolocation.getCurrentPosition((position) => {
      const userLocation = {
        name: "Vị trí của bạn",
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        icon: "img/map-location.gif",
        width: 36,
        height: 56,
      };

      // Add user's current location to the first of the locations array
      locations.push(userLocation);

      // Add marker for user's current location
      addMarkers([userLocation]);

      // Adjust the map to fit all markers including user's location
      map.fitBounds(bounds);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
