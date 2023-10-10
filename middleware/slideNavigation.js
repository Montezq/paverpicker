import { useSlideStore } from '@/store/slideStore';

export default function slideNavigation(to, from) {
  const slideStore = useSlideStore();
  if (from && from.path !== to.path) {
    slideStore.setIsBackNavigation(true);
  } else {
    slideStore.setIsBackNavigation(false);
  }
}