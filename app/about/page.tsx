import clsx from 'clsx';

const AboutPage = () => {
  return (
    <div>
      <div className="container">
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="btn m-1">Menu</label>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <span className="justify-between">
                Parent Item
                {/*<svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                </svg>*/}
                
              </span>
              <ul className="menu bg-base-200 p-2 rounded-box">
                <li>
                  <a>Subitem 1</a>
                </li>
                <li>
                  <a>Subitem 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto my-10">
        <h2>This is container V2</h2>
        <br/>

        <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({length: 10}).map((_, i) => (
            <div
              key={i}
              className={clsx(
                'bg-indigo-500',
                i === 9 && 'col-span-2 lg:col-span-3',
                i === 0 && 'col-start-2',
                i === 4 && 'col-end-2',
                i === 5 && 'row-span-2',
              )}
            >{i}</div>
          ))}
        </div>
        <br/>

        <div className="grid gap-4 grid-flow-row auto-rows-max">
          {Array.from({length: 10}).map((_, i) => (
            <div
              key={i}
              className="bg-cyan-500"
            >{i}</div>
          ))}
        </div>
        <br/>


        <div className="flex flex-row flex-wrap border-2 border-gray-700">
          <div className="basis-full md:basis-2/3 lg:basis-1/4 bg-pink-800 text-center align-baseline">01</div>
          <div className="basis-full md:basis-1/3 lg:basis-1/4 bg-blue-700">02</div>
          <div className="basis-full md:basis-full lg:basis-1/2 bg-orange-400">
            <div className="flex flex-col-reverse">
              <div className=" bg-green-800">3.1</div>
              <div className=" bg-indigo-500">3.2</div>
            </div>
          </div>
        </div>
        <br/>

        <div className="flex">
          <div className="bg-orange-800 w-14 flex-none">1</div>
          <div className="bg-yellow-800 w-64 flex-auto">2</div>
          <div className="bg-violet-800 w-32 flex-auto">3</div>
        </div>
        <br/>

        <div className="flex">
          <div className=" bg-orange-800 flex-none w-14 h-14">01</div>
          <div className=" bg-yellow-800 w-14 grow">01</div>
          <div className=" bg-violet-800 shrink w-44 ">01</div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;