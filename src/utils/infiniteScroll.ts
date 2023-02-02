import type { Ref } from "vue";

interface IParam {
  currentPage: Ref<number>;
  increment: number;
}
export default function infiniteScroll({ currentPage, increment }: IParam) {
  const intersectionObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      currentPage.value += increment;
    }
  });
  const intersect = document.querySelector("#intersect");
  if (intersect) {
    intersectionObserver.observe(intersect);
  }
  return () => intersectionObserver.disconnect();
}
