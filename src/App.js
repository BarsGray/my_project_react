import './App.css';

const App = () => {

  return (
    <div className='app_wrapper'>
      <header className="header">
        <div className="logo">
          <img src="https://media1.thehungryjpeg.com/thumbs2/800_3902498_y7qnztx6h1cnmhhf34uh8d4iwluzpvr35u8i6n6r_my-monogram-logo-v5.jpg" alt="" />
        </div>
      </header>
      <aside className="nav_bar">
        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_item">
              <a className="nav_link" href="#">Profile</a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="#">Profile</a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="#">Maessages</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main">
        <div className="content">
          Main content
        </div>
      </main>
    </div>

  );
}

export default App;
