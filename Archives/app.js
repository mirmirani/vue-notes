const heading = document.querySelector('h1');
const input = document.querySelector('input')

// listen to the input box for typing
input.addEventListener('keyup', (e) =>
{
    const text = e.target.value;
    heading.innerText = text;
}
);

