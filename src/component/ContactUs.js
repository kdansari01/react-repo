export const ContactUs = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-screen-xl md:mt-24 px-4 md:px-8 lg:px-12 xl:px-26 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h2 className="move-head text-center text-3xl font-bold leading-tight">
                Feel free to contact us!
              </h2>
              <img
                className="h-40 my-5 mx-auto py-2 contact-img"
                src="https://scontent.fdel64-1.fna.fbcdn.net/v/t39.30808-6/246596788_3092882477697573_6897123979640138325_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5vv6i4Fzd-kAX9Y3KyQ&tn=6iDG5Fd3Q9vuyrbY&_nc_ht=scontent.fdel64-1.fna&oh=00_AT9NZ0Y9wwe4v3-xWspES1bhxgcveX1t2mD6skJBVVn-UA&oe=62E71F00"
              />
            </div>
          </div>
          <div className="flex text-4xl social-logo">
            <a
              className="cursor-pointer mx-6 hover:text-purple-500 active:text-purple-700"
              href="https://www.facebook.com/khusmuddin.ansari.7"
              target="_blank"
              rel="noreferrer"
            >
              <svg
              className="logo"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
              </svg>
            </a>
            <a
              className="cursor-pointer mx-6 hover:text-purple-500 active:text-purple-700"
              href="https://www.instagram.com/kdansari01"
              target="_blank"
              rel="noreferrer"
            >
              <svg
              className="logo logo-insta"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a
              className="cursor-pointer mx-6 hover:text-purple-500 active:text-purple-700"
              href="https://github.com/kdansari01"
              target="_blank"
              rel="noreferrer"
            >
              <svg
              className="logo logo-git"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
