import noImage from "../assets/no-image-placeholder.webp"

const getImageCropped= (url: string):string=>{
    if(!url) return noImage;
    const mediaIndex = url.indexOf("media/")+ "media/".length;
    return url.slice(0, mediaIndex) + "crop/600/400/" + url.slice(mediaIndex);
}
export default getImageCropped;