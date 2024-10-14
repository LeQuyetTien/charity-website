// Array of locations with name, latitude, and longitude
const locations = [
  {
    name: "Phan Cô Thôn",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.267684155685622,
    lng: 109.18955936676934,
    icon: "img/home-map-icon.png",
  },
  {
    name: "Trường TH Liên Sang",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.26862653369897,
    lng: 108.81842969560573,
    icon: "img/school-map-icon.png",
  },
  {
    name: "Trường TH Thị trấn Khánh Vĩnh",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.275758938564188,
    lng: 108.91097735327853,
    icon: "img/school-map-icon.png",
  },
  {
    name: "Trường TH Ninh Sơn",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.598679467178966,
    lng: 109.13252419561128,
    icon: "img/school-map-icon.png",
  },
  {
    name: "Trường TH Khánh Thượng",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.282203737788265,
    lng: 108.80651263793325,
    icon: "img/school-map-icon.png",
  },
  {
    name: "Trường TH Diên Bình",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.237483858113638,
    lng: 109.0687404244415,
    icon: "img/school-map-icon.png",
  },
  {
    name: "Trường TH Đại Lãnh",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.83927477090981,
    lng: 109.36139834603696,
    icon: "img/school-map-icon.png",
  },
  {
    name: "Trường TH Giang Ly",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.256445235110878,
    lng: 108.80124942444183,
    icon: "img/school-map-icon.png",
  },
  {
    name: "Trường TH Cam Hòa",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 12.106453100683822,
    lng: 109.11424643855811,
    icon: "img/school-map-icon.png",
  },
  {
    name: "Trường TH Cam Thịnh Tây",
    description:
      "Nhóm đã thăm và làm việc với BGH trường để trao đổi kế hoạch tặng quà cho 40 HS trường tại xã Sông Cầu, huyện Khánh Vĩnh. Hình ảnh buổi làm việc được chia sẻ trong phần 'Hình ảnh'.",
    date: "20/10/2021",
    link: "detail.html",
    lat: 11.884466688339815,
    lng: 109.08480235327198,
    icon: "img/school-map-icon.png",
  },
];

// Initialize the map
function initMap() {
  // Create a new map instance
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: {
      lat: locations[0].lat,
      lng: locations[0].ln,
      icon: locations[0].icon,
    },
  });

  // Create a bounds object to fit all markers
  const bounds = new google.maps.LatLngBounds();

  // Extend the bounds to include each marker's position
  locations.forEach((location) => {
    bounds.extend(new google.maps.LatLng(location.lat, location.lng));
  });

  // Adjust the map to fit all markers within the bounds
  map.fitBounds(bounds);

  // Add markers for each location
  locations.forEach((location) => {
    const marker = new google.maps.Marker({
      position: {
        lat: location.lat,
        lng: location.lng,
        icon: "https://img.icons8.com/color/48/order-delivered.png",
      },
      map: map,
      title: location.name,
      icon: {
        url: location.icon, // Use custom icon for each marker
        scaledSize: new google.maps.Size(36, 36), // Resize icon if needed
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
  });
}
