// ScrollSmoother.create({
//     wrapper: '.wrapper',
//     content: '.content',
// })
window.addEventListener('scroll', function() {
    var video = document.querySelector('.fullscreen-bg__video');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var videoHeight = video.parentElement.clientHeight;
    var triggerPoint = videoHeight - windowHeight * 0.8; // 20% от нижней границы видео
    var maxScale = 0.6; // Максимальный масштаб (70%)

    if (scrollPosition > triggerPoint) {
      var scale = 1 - (scrollPosition - triggerPoint) / windowHeight * 0.4; // Плавно уменьшаем масштаб по мере прокрутки
      scale = Math.max(scale, maxScale); // Ограничиваем масштаб максимальным значением
      video.style.transform = 'scale(' + scale + ')';
    } else {
      video.style.transform = 'scale(1)';
    }
  });

