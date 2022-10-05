import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import images from './assets/images';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="main">
                <div className="mobile-menu">
                    <FontAwesomeIcon className="icon-menu" icon={faBars} />
                </div>
                <nav className="nav">
                    <li className="nav-header">Home</li>
                    <li>
                        <a href="to">Services</a>
                    </li>
                    <li>
                        <a href="to">News</a>
                    </li>
                    <li>
                        <a href="to">Blog</a>
                    </li>
                    <li>
                        <a href="to">Contact</a>
                    </li>
                </nav>

                <div className="content">
                    <div className="image">
                        <img className="img" src={images.logo} alt="logoNCC" />
                    </div>
                    <div className="desc">
                        <h2 className="desc-header">Lorem ipsum dolor sit asmet?</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat.
                            Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                            turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia
                            ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent
                            et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue
                            mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper
                            turpis pellentesque a.
                        </p>
                    </div>
                    <div className="group">
                        <div className="group-item">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <span>
                                <img className="img-item" src={images.image1} alt="icon 1" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales,
                                    faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean
                                    consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                                    Pellentesque ultrices liquam egestas nunc at{' '}
                                </p>
                            </span>
                            <p>
                                ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean
                                consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                                Pellentesque ultrices vestibulum mattis.
                            </p>
                        </div>
                        <div className="group-item">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <span>
                                <img className="img-item" src={images.image2} alt="icon 1" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales,
                                    faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean
                                    consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                                    Pellentesque ultrices liquam egestas nunc at{' '}
                                </p>
                            </span>
                            <p>
                                ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean
                                consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                                Pellentesque ultrices vestibulum mattis.
                            </p>
                        </div>
                        <div className="group-item">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <span>
                                <img className="img-item" src={images.image3} alt="icon 1" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales,
                                    faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean
                                    consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                                    Pellentesque ultrices liquam egestas nunc at{' '}
                                </p>
                            </span>
                            <p>
                                ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean
                                consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                                Pellentesque ultrices vestibulum mattis.
                            </p>
                        </div>
                    </div>
                    <footer className="footer">
                        <div>
                            <p>Copyright © 2021</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default App;
