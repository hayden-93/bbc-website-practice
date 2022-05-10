export const NavBar = () => {
  return (
    <ul className="flex border-y-2">
      <img src="../../images/bbc.png" alt="BBC Logo" className="w-16 h-16" />
      <div className="flex grow justify-center self-center space-x-12">
        <li className="">
          <a href="/">Sign In</a>
        </li>
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
      <div>
        <span></span>
        <span className="flex self-center">Search</span>
      </div>
    </ul>
  );
};
