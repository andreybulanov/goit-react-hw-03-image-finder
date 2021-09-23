function fetchImages(nameImg, pageNumber) {
  const URL = 'https://pixabay.com/api';
  const KEY = '22635337-a2d7cfd18b30a4b0e9b9bd466';

  return fetch(
    `${URL}/?q=${nameImg}&page=${pageNumber}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Мы не нашли такой картинки по имени ${nameImg}`));
  });
}

export default fetchImages;




// 22635337-a2d7cfd18b30a4b0e9b9bd466
// https://pixabay.com/api/