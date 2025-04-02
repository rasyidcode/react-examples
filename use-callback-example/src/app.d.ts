type User = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type PostWithUser = {
  id: number;
  title: string;
  body: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
};
