import {
  BellIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

export const NavBar = () => {
  return (
    <header className="max-w-screen-xl mx-auto space-y-4">
      <ul className="flex border-y-2">
        <li>
          <a href="/">
            <img
              src="../../images/bbc.png"
              alt="BBC Logo"
              className="w-24 h-24"
            />
          </a>
        </li>
        <div className="flex grow justify-center self-center space-x-8 text-sm font-semibold">
          <div className="flex space-x-10">
            <li className="flex">
              <PersonIcon className="" />
              <a href="/" className="px-2 hover:underline-offset-4">
                Sign In
              </a>
            </li>
            <li>
              <a href="/" className="">
                <BellIcon className="w-5 h-5" />
              </a>
            </li>
          </div>
          <li className="">
            <a href="/">Icon</a>
          </li>
          <li className="">
            <a href="/">Home</a>
          </li>
          <li className="">
            <a href="/">News</a>
          </li>
          <li className="">
            <a href="/">Sport</a>
          </li>
          <li className="">
            <a href="/">Weather</a>
          </li>
          <li className="">
            <a href="/">iPlayer</a>
          </li>
          <li className="">
            <a href="/">Sounds</a>
          </li>
          <li className="">
            <a href="/">CBBC</a>
          </li>
          <li className="">
            <a href="/">CBeebies</a>
          </li>
          <li className="">
            <a href="/">More</a>
          </li>
        </div>
        <div className="self-center">
          <label className="relative flex items-center">
            <MagnifyingGlassIcon className="absolute w-6 h-6 ml-2" />
            <input
              type="text"
              placeholder="Search BBC"
              className="flex placeholder: placeholder-black bg-slate-200 py-3 px-10 font-semibold"
            />
          </label>
        </div>
      </ul>
      <h1 className="text-4xl font-bold">Welcome to the BBC</h1>
    </header>
  );
};
