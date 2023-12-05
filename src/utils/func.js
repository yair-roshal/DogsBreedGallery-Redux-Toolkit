export function toObject(arr) {
  const arrOfObj = [];
  for (let i = 0; i < arr.length; ++i)
    if (arr[i] !== undefined) {
      const rv = {};
      rv.id = i;
      rv.breed = arr[i][0];
      rv.count = arr[i][1];
      rv.likes = 0;
      arrOfObj.push(rv);
    }

  return arrOfObj;
}

export function searchLikes(allDogs, leftList, allBreeds) {
  const newLeftListLikes = leftList;
  for (let i = 0; i < allBreeds.length; i++) {
    searchLikesBreed(allDogs, leftList, allBreeds[i]);
  }
  return newLeftListLikes;
}

function searchLikesBreed(allDogs, leftList, searchBreed) {
  let allLikes = 0;

  allDogs.forEach((dog) => {
    if (dog.breed === searchBreed) {
      allLikes += dog.likes;
    }
  });

  leftList.forEach((item) => {
    if (item.breed === searchBreed) {
      item.likes = allLikes;
    }
  });

  return leftList;
}

function random(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

export function randomArray(array) {
  const randomArr = [];
  for (let i = 0; i < 80; i++) {
    randomArr.push(array[random(0, array.length)]);
  }
  return randomArr;
}

export function ArrayToObject(array) {
  const arrOfObj = [];
  for (let i = 0; i < array.length; ++i)
    if (array[i] !== undefined) {
      const rv = {};
      rv.id = i;
      rv.breed = array[i];
      rv.likes = 0;
      arrOfObj.push(rv);
    }

  return arrOfObj;
}
