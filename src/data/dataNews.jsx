import { v4 as uuidv4 } from "uuid";
import { blogsImg1 } from "../components/Images";

const dataNews = [
  {
    id: uuidv4(), // Generate a unique ID
    imgMain: blogsImg1,
    imgSmall: blogsImg1,
    title: "The Role Of Music And Sound Effects In Game Design",
    shortInfo:
      "When you think about your favourite video games, what stands out? Is it the gameplay, the graphics, or maybe the story? ",
    desc: `<div class="postContent">
      <div class="contentBox mb-8">
        <p class="newsText mb-5 firstLetter">
          Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed
          eget viverra egestas nisi in consequat. Fusce sodales augue a
          accumsan. Cras sollicitudin, ipsum eget blandit pulvinar. Integer
          tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim.
          Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed
          eget viverra egestas nisi in consequat. Fusce sodales augue a
          accumsan. Cras sollicitudin, ipsum eget blandit pulvinar. Integer
          tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim.
        </p>
      </div>
      <div class="contentBox mb-8">
        <h4 class="newsSubtitle mb-4">At vero eos et accusam</h4>
        <p class="newsText mb-5">
          Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed
          eget viverra egestas nisi in consequat. Fusce sodales augue a
          accumsan. Cras sollicitudin, ipsum eget blandit pulvinar. Integer
          tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim.
        </p>
        <img
          class="mb-5"
          decoding="async"
          fetchpriority="high"
          src="https://nuts.themerex.net/wp-content/uploads/2022/08/post1-copyright-1024x783.jpg"
          srcset="
            https://nuts.themerex.net/wp-content/uploads/2022/08/post1-copyright-1024x783.jpg  1024w,
            https://nuts.themerex.net/wp-content/uploads/2022/08/post1-copyright-300x229.jpg    300w,
            https://nuts.themerex.net/wp-content/uploads/2022/08/post1-copyright-768x587.jpg    768w,
            https://nuts.themerex.net/wp-content/uploads/2022/08/post1-copyright-1536x1174.jpg 1536w,
            https://nuts.themerex.net/wp-content/uploads/2022/08/post1-copyright-370x283.jpg    370w,
            https://nuts.themerex.net/wp-content/uploads/2022/08/post1-copyright-840x642.jpg    840w,
            https://nuts.themerex.net/wp-content/uploads/2022/08/post1-copyright-410x313.jpg    410w,
            https://nuts.themerex.net/wp-content/uploads/2022/08/post1-copyright-600x459.jpg    600w,
            https://nuts.themerex.net/wp-content/uploads/2022/08/post1-copyright.jpg           1920w
          "
          sizes="(max-width: 1024px) 100vw, 1024px" />
      </div>
    </div>`,
    data: "10.08.2022",
  },
  {
    id: uuidv4(), // Generate a unique ID
    imgMain: blogsImg1,
    imgSmall: blogsImg1,
    title: "The Role Of Music And Sound Effects In Game Design",
    shortInfo:
      "When you think about your favourite video games, what stands out? Is it the gameplay, the graphics, or maybe the story? ",
    desc: `<p>asd</p>`,
    data: "10.08.2022",
  },
];
dataNews.forEach((newsItem) => {
  newsItem.path = newsItem.title.toLowerCase().replace(/\s+/g, "-");
});

export { dataNews };
