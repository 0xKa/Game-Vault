const getCroppedImageUrl = (
  url: string,
  width: number,
  height: number
): string => {
  if (!url) return "";

  const target = "media/";
  const index = url.indexOf(target) + target.length; //
  return url.slice(0, index) + `crop/${width}/${height}/` + url.slice(index); // get the part before media/ + crop/width/height + the part after media/
};
export default getCroppedImageUrl;
