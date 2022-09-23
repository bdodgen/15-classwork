let testContainer = document.querySelector('.test');
let testContainer2 = document.querySelector('.test-2');

testContainer.innerHTML = 'HELLO';

let paragraph = document.createElement('p');
paragraph.innerText = 'DON\'T CLICK ME'

testContainer.appendChild(paragraph);

paragraph.addEventListener('click', () => {
  console.log(':)')
  let new_p = document.createElement('p');
  new_p.innerText = 'INSIDE PARAGRAPH';
  paragraph.appendChild(new_p);
  // testContainer.innerHTML += '<p>TEST</p>'; ///  WILL NOT WORK
  // testContainer.insertAdjacentHTML("afterend", `<p>TEST</p>`) ///// STILL WORKS

  testContainer.removeChild(paragraph)
  testContainer2.appendChild(paragraph)
})

let heading = document.createElement('h1')
testContainer.insertBefore(heading, paragraph)

console.log(testContainer.querySelector('h1'));

const elementFromHTML = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstChild;
}

const section = elementFromHTML(`
  <section class="section-one">
    <h1>howdy hey</h1>
  </section>
`)

console.log(section)

testContainer.appendChild(section)