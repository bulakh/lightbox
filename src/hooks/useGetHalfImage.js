
export const useGetHalfImage = (testStr) => {
  const urlImages = testStr.split('/');
  const [height, width] = urlImages.splice(-2);

  urlImages.push(Math.round(height/3), Math.round(width/3));

  return urlImages.join('/');
}

