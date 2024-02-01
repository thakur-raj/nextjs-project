const users = [
  { id: 1, name: "John", },
  { id: 2, name: "Jane", },
  {  id: 3, name: "Jim", }
];

const posts = [
  { id: 1, title: "Post 1", body: "Body 1", userId: 1 },
  { id: 2, title: "Post 2", body: "Body 2", userId: 2 },
  { id: 3, title: "Post 3", body: "Body 3", userId: 3 },
  { id: 4, title: "Post 4", body: "Body 4", userId: 1 },
]

export const getPosts = async () => { return posts; };

export const getPost = async (id: string) => {
  const p =  await posts.find((post) => post.id === parseInt(id));
  return p;
}
