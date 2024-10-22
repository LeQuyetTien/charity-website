// Array of locations with name, latitude, and longitude
const locations = 
// START LOCATIONS
[
  {
    "lat": 12.671323946144577,
    "lng": 109.150588852878,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Xuân Sơn, huyện Ninh Hòa",
    "description": "TH Xuân Sơn, huyện Ninh Hòa",
    "date": "14/09/2020",
    "link": "detail-XuanSon.html"
  },
  {
    "lat": 12.543158818120851,
    "lng": 108.95963501826608,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Ninh Tây, huyện Ninh Hòa",
    "description": "TH Ninh Tây, huyện Ninh Hòa",
    "date": "31/01/2021",
    "link": "detail-NinhTay.html"
  },
  {
    "lat": 12.488928062038562,
    "lng": 109.15542257138821,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Ninh Phú, huyện Ninh Hòa",
    "description": "TH Ninh Phú, huyện Ninh Hòa",
    "date": "31/01/2021",
    "link": "detail-NinhPhu.html"
  },
  {
    "lat": 12.324446927701487,
    "lng": 108.97928143752796,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Diên Xuân, huyện Diên Khánh",
    "description": "TH Diên Xuân, huyện Diên Khánh",
    "date": "26/05/2021",
    "link": "detail-DienXuan.html"
  },
  {
    "lat": 12.839424138550143,
    "lng": 109.36139396637338,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Đại Lãnh, huyện Vạn Ninh",
    "description": "TH Đại Lãnh, huyện Vạn Ninh",
    "date": "12/12/2021",
    "link": "detail-DaiLanh.html"
  },
  {
    "lat": 12.247373475737977,
    "lng": 108.98409182194824,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Diên Tân, huyện Diên Khánh",
    "description": "TH Diên Tân, huyện Diên Khánh",
    "date": "31/12/2021",
    "link": "detail-DienTan.html"
  },
  {
    "lat": 12.237662103889225,
    "lng": 109.06870823752635,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Diên Bình, huyện Diên Khánh",
    "description": "TH Diên Bình, huyện Diên Khánh",
    "date": "14/01/2022",
    "link": "detail-DienBinh.html"
  },
  {
    "lat": 12.59879537451259,
    "lng": 109.13253409137666,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Ninh Sơn, huyện Ninh Hòa",
    "description": "TH Ninh Sơn, huyện Ninh Hòa",
    "date": "19/01/2022",
    "link": "detail-NinhSon.html"
  },
  {
    "lat": 12.268846693648994,
    "lng": 108.81836532218324,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Liên Sang, huyện Khánh Vĩnh",
    "description": "TH Liên Sang, huyện Khánh Vĩnh",
    "date": "17/03/2022",
    "link": "detail-LienSang.html"
  },
  {
    "lat": 12.10686173395615,
    "lng": 109.11421320077648,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Cam Hòa 1, huyện Cam Lâm",
    "description": "TH Cam Hòa 1, huyện Cam Lâm",
    "date": "19/03/2022",
    "link": "detail-CamHoa.html"
  },
  {
    "lat": 12.253483036173321,
    "lng": 108.81479937985486,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Sơn Thái, huyện Khánh Vĩnh",
    "description": "TH Sơn Thái, huyện Khánh Vĩnh",
    "date": "27/05/2022",
    "link": "detail-SonThai.html"
  },
  {
    "lat": 12.285351808802524,
    "lng": 108.80693637741534,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Khánh Thượng, huyện Khánh Vĩnh",
    "description": "TH Khánh Thượng, huyện Khánh Vĩnh",
    "date": "11/10/2022",
    "link": "detail-KhanhThuong.html"
  },
  {
    "lat": 11.874431601921552,
    "lng": 109.08224725150866,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "THCS Cam Thịnh Tây, Thị xã Cam Ranh",
    "description": "THCS Cam Thịnh Tây, Thị xã Cam Ranh",
    "date": "19/11/2022",
    "link": "detail-CamThinhTay.html"
  },
  {
    "lat": 12.217231474050159,
    "lng": 108.93117589233643,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Khánh Phú 1, huyện Khánh Vĩnh",
    "description": "TH Khánh Phú 1, huyện Khánh Vĩnh",
    "date": "28/11/2022",
    "link": "detail-KhanhPhu1.html"
  },
  {
    "lat": 12.276417285825602,
    "lng": 108.91108883903829,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH TT Khánh Vĩnh, huyện Khánh Vĩnh",
    "description": "TH TT Khánh Vĩnh, huyện Khánh Vĩnh",
    "date": "24/04/2023",
    "link": "detail-KhanhVinh1.html"
  },
  {
    "lat": 12.190730759713782,
    "lng": 109.06559766309732,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "MG Vành Khuyên, huyện Cam Lâm",
    "description": "MG Vành Khuyên, huyện Cam Lâm",
    "date": "27/04/2023",
    "link": "detail-VanhKhuyen.html"
  },
  {
    "lat": 12.17202871626166,
    "lng": 109.05721299704835,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Khánh Hòa - JeJu, huyện Cam Lâm",
    "description": "TH Khánh Hòa - JeJu, huyện Cam Lâm",
    "date": "11/05/2023",
    "link": "detail-JeJu.html"
  },
  {
    "lat": 12.276417285825602,
    "lng": 108.91108883903829,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH TT Khánh Vĩnh, huyện Khánh Vĩnh",
    "description": "TH TT Khánh Vĩnh, huyện Khánh Vĩnh",
    "date": "31/05/2023",
    "link": "detail-KhanhVinh2.html"
  },
  {
    "lat": 14.655641909277207,
    "lng": 108.2970379996629,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Măng Cành, huyện Măng Đen, Kon Tum",
    "description": "TH Măng Cành, huyện Măng Đen, Kon Tum",
    "date": "18/09/2023",
    "link": "detail-MangCanh.html"
  },
  {
    "lat": 12.274356514811336,
    "lng": 108.94503972101629,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH Sông Cầu, huyện Khánh Vĩnh",
    "description": "TH Sông Cầu, huyện Khánh Vĩnh",
    "date": "12/03/2024",
    "link": "detail-SongCau.html"
  },
  {
    "lat": 12.276417285825602,
    "lng": 108.91108883903829,
    "width": 36,
    "height": 36,
    "icon": "img/map-school.png",
    "name": "TH TT Khánh Vĩnh, huyện Khánh Vĩnh",
    "description": "TH TT Khánh Vĩnh, huyện Khánh Vĩnh",
    "date": "14/08/2024",
    "link": "detail-KhanhVinh3.html"
  }
]
// END LOCATIONS
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
          <div style="font-family: Arial, sans-serif; line-height: 1.5;">
            <h6 style="margin: 0; color: #555;">${location.date}</h6>
            <h3 style="margin: 5px 0; color: #333;">${location.name}</h3>
            <p style="margin: 5px 0; color: #777;">${location.description}</p>
            <a href="${location.link}" target="_blank" style="color: #1a73e8; text-decoration: none;">Xem chi tiết</a>
            <br>
            <button class="btn btn-outline btn-primary" style="margin-top: 10px;" onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}', '_blank')">Chỉ đường</button>
          </div>
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
