//run this in browser  console
const purl = () => {
  const urls = [
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/posts'
  ];

const [todo, post ] = Promise.all(urls.map((url) => {
  return fetch(url).then(res => res.json())
})).then(values => {
  console.log(values)
})

const getData = async function () {
const [todo, post ] = await Promise.all(urls.map((url) => {
  return fetch(url).then(res => res.json())
}))
console.log(todo,post)
}
}

module.exports = {
  purl
}