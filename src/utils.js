export const getDisabledFirst = (allImages, image) => {
  return allImages.indexOf(image) === 0 ? 'disabled' : false
}

export const getDisabledLast = (allImages, image) => {
  return allImages.indexOf(image) === allImages.length - 1 ? 'disabled' : false
}
