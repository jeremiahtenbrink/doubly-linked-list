<h1 align="center">Welcome to doubly-linked-list 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@jeremiah_tenbrink/doubly-linked-list" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@jeremiah_tenbrink/doubly-linked-list.svg">
  </a>
  <a href="https://jeremiahtenbrink.github.io/doubly-linked-list/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/jeremiahtenbrink/doubly-linked-list/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://codeclimate.com/github/jeremiahtenbrink/doubly-linked-list/maintainability"><img src="https://api.codeclimate.com/v1/badges/2acff3b445772d7e55be/maintainability" /></a>
  <a href="https://codeclimate.com/github/jeremiahtenbrink/doubly-linked-list/test_coverage"><img src="https://api.codeclimate.com/v1/badges/2acff3b445772d7e55be/test_coverage" /></a>
</p>


A Doubly Linked list for javascript.

## Documentation
<a href="https://jeremiahtenbrink.github.io/doubly-linked-list/">Read
 documentation here.
</a>

## Install

With Npm

```shell script
npm install @jeremiah_tenbrink/doubly-linked-list
```

With Yarn

```shell script
yarn add @jeremiah_tenbrink/doubly-linked-list
```


## Usage

### Add to head
```javascript
import {DoublyLinkedList} from '@jeremiah_tenbrink/doubly-linked-list';
const dll = DoublyLinkedList();

dll.addToHead("some value");

let dllSize = dll.getSize();
let value = dll.removeFromHead();
console.log(value);

dll.addToTail(45);
dll.addToTail(50);
value = dll.removeFromTail();
console.log(value);

dll.forEach(item => {
  console.log(item);
}).then(result => {
  console.log(result.complete);
}).catch(e => {
  console.log(e.message)
})

dll.forSome(item => {
  console.log(item);
  return true;
}).then(result => {
  console.log(result.complete) // should be false because true was returned in the forSome callback function
}).catch(e => {
  console.log(e.message)
})


```


## Author

<a href="https://www.youracclaim.com/badges/f767c1ec-2b50-4901-a250-49b6d9467d37">
<img src="https://github-badge.vercel.app/api/badges/author/JeremiahTenbrink" alt="Full-Stack Web Development + Technical Interviewing" height="300" />
</a>

<a href="https://www.linkedin.com/in/jeremiahtenbrink/">
<img src="https://github-badge.vercel.app/api/badges/portfolio/tenbrink.dev" height="40"/>
</a>
<a href="https://www.linkedin.com/in/jeremiahtenbrink/">
<img src="https://github-badge.vercel.app/api/badges/linkedin/@JeremiahTenbrink" height="40"/>
</a>
<a href="https://github.com/jeremiahtenbrink">
<img src="https://github-badge.vercel.app/api/badges/github/@JeremiahTenbrink" height="40"/>
</a>


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jeremiahtenbrink/doubly-linked-list/issues)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
