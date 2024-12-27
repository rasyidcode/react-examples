export function getImageURL(person) {
    return (
        'https://encrypted-tbn0.gstatic.com/images?q=' + person.imageQuery
    )
}

export function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}
