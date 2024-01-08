let rating = 88.55; //* Isso vira dos dados de services/kitsu
export let stars: number;

const setStars = () => {
  if (rating < 10) {
    return (stars = 1);
  } else if (rating < 30 && rating > 10) {
    return (stars = 2);
  } else if (rating < 40 && rating > 20) {
    return (stars = 3);
  } else if (rating < 50 && rating > 30) {
    return (stars = 4);
  } else if (rating < 60 && rating > 40) {
    return (stars = 5);
  } else if (rating < 70 && rating > 50) {
    return (stars = 6);
  } else if (rating < 80 && rating > 60) {
    return (stars = 7);
  } else if (rating < 90 && rating > 70) {
    return (stars = 8);
  } else if (rating < 100 && rating > 80) {
    return (stars = 9);
  } else if (rating <= 100 && rating > 90) {
    return (stars = 10);
  } else {
    null;
  }
};

setStars();
