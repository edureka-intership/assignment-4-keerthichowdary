ratingData = [
  { restaurant: "KFC", rating: 5 },
  { restaurant: "Burger King", rating: 4 },
  { restaurant: "KFC", rating: 3 },
  { restaurant: "Domino", rating: 2 },
  { restaurant: "Subway", rating: 3 },
  { restaurant: "Domino", rating: 1 },
  { restaurant: "Subway", rating: 4 },
  { restaurant: "Pizza Hut", rating: 5 },
];
const arr = [];
const avergaeRating = (ratingData) => {
  ratingData.forEach((element) => {
    var count = 1;
    var check = 0;
    var found = arr.find((e) => e.restaurant === element.restaurant);
    if (found) {
      check++;
      found.averageRating += element.rating;
      found.count++;
    }
    if (check == 0) {
      //   console.log("Here");
      arr.push({
        restaurant: element.restaurant,
        averageRating: element.rating,
        count: count,
      });
    }
  });
  const averageRatingRes = [];
  arr.forEach((i) => {
    averageRatingRes.push({
      restaurant: i.restaurant,
      averageRating: i.averageRating / i.count,
    });
  });
  return averageRatingRes;
};
let avgres = avergaeRating(ratingData);
console.log(avgres);
const avergaeRatingWithRange = (avgres) => {
  const res = [];
  avgres.forEach((i) => {
    if (i.averageRating >= 4) {
      res.push(i);
    }
  });
  return res;
};
console.log(avergaeRatingWithRange(avgres));
