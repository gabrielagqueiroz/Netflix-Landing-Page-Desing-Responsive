function toggleVideo() {
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('.video');
  trailer.classList.toggle('active');

  video.currenttTime = 0;
  video.pause();
}