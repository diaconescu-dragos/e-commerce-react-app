const INITIAL_STATE={sections : [
    {
        title: 'hats',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/07/26/06/13/girl-4364022_960_720.jpg',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'jackets',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/08/06/21/37/people-2596613_960_720.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: 'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'womens',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/10/07/06/39/fashion-2825637_960_720.jpg',
        id: 4,
        size: 'large',
        linkUrl: 'shop/womens'
    },
    {
        title: 'mens',
        imageUrl: 'https://cdn.pixabay.com/photo/2021/03/03/10/35/man-6065000_960_720.jpg',
        id: 5,
        size: 'large',
        linkUrl: 'shop/mens'
    }
  ]};

  const directoryReducer = (state = INITIAL_STATE,action) => {
      switch (action.type) {
          default:
             return state;
      }
  };

  export default directoryReducer;