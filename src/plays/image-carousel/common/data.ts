interface Image {
  id: number;
  imgSrc: string;
  alt: string;
}

const IMAGES: Image[] = [
  {
    id: 0,
    imgSrc:
      'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
    alt: 'work setup'
  },
  {
    id: 1,
    imgSrc:
      'https://images.unsplash.com/photo-1610366398516-46da9dec5931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80',
    alt: 'work setup'
  },
  {
    id: 2,
    imgSrc:
      'https://images.unsplash.com/photo-1559032806-99a331d600b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29yayUyMHN0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    alt: 'work setup'
  }
];

export default IMAGES;
