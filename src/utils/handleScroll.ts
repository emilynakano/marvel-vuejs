let prevScroll = 0;
export default function handleScroll() {
  const header = document.getElementById("header");
  if (window.scrollY > prevScroll && window.scrollY > 200) {
    header?.classList.add("hidden");
  } else header?.classList.remove("hidden");

  prevScroll = window.scrollY;
}
