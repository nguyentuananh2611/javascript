const fetchApiJson = async (url) => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Lỗi:", error);
  //     });
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

const fetchApiText = async () => {
  //   fetch("https://raw.githubusercontent.com/openai/gym/master/README.md")
  //     .then((response) => response.text())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Lỗi:", error);
  //     });

  const response = await fetch(
    "https://raw.githubusercontent.com/openai/gym/master/README.md"
  );
  const data = await response.text();
  console.log(data);
};

const makeNetwork = async () => {
  await fetchApiJson("https://jsonplaceholder.typicode.com/todos/");
  await fetchApiText();
  await fetchApiJson("https://api.github.com/users/bard");
};

const main = () => {
  makeNetwork();
};
main();
