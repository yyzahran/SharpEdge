// Initialize and add the map
function initMap() {
  // Your Location
  const loc = { lat: 53.544388, lng: -113.490929 }
  //Centered map on location
  const map = new google.maps.Map(document.querySelector('.map')
    , {
      zoom: 14,
      center: loc
    });
  // The marker, positioned on location
  const marker = new google.maps.Marker({ position: loc, map: map });

}
// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.screenY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});




// Smooth scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});