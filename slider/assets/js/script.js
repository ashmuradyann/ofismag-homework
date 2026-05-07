const scroll = document.querySelector('.scroll-content');
const thumb = document.querySelector('.thumb');
const track = document.querySelector('.custom-scrollbar');

let drag = false;

thumb.onmousedown = () => drag = true;
track.onmouseup = () => drag = false;

track.onmousemove = (e) => {
  if (!drag) return;

  const rect = track.getBoundingClientRect();
  const maxThumb = track.clientWidth - thumb.clientWidth;

  let left = e.clientX - rect.left - thumb.clientWidth / 2;
  left = Math.max(0, Math.min(left, maxThumb));

  thumb.style.left = left + 'px';

  scroll.scrollLeft =
    (left / maxThumb) * (scroll.scrollWidth - scroll.clientWidth);
};

scroll.onscroll = () => {
  const maxThumb = track.clientWidth - thumb.clientWidth;
  thumb.style.left =
    (scroll.scrollLeft / (scroll.scrollWidth - scroll.clientWidth)) *
    maxThumb + 'px';
};