type ImageNameType = (_url: string) => string;

const imageName: ImageNameType = (url) => url.split('/').pop() || '';

export default imageName;
