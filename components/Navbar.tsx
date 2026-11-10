export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/my-first-page" className="hover:text-gray-400">
            My First Page
          </a>
        </li>
        <li>
          <a href="/my-cv" className="hover:text-gray-400">
            My CV
          </a>
        </li>
        <li>
          <a href="/todo" className="hover:text-gray-400">
            My To Do List
          </a>
        </li>
      </ul>
    </nav>
  );
}
