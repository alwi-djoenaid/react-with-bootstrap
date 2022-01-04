import React from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
  return(
    <div>
      <nav className='py-2 bg-light border-bottom'>
        <div className='container d-flex flex-wrap'>
          <ul className='nav me-auto'>
            <li className='nav-item'>
              <a href='/' className='nav-link link-dark px-2'>Home</a>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-link link-dark px-2'>Features</a>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-link link-dark px-2'>FAQs</a>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-link link-dark px-2'>About</a>
            </li>
          </ul>
          <ul className='nav'>
            <li className='nav-item'>
              <a href='/' className='nav-link link-dark px-2 active'>Login</a>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-link link-dark px-2 active'>Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
      <header className='py-3 mb-4 border-bottom'>
        <div className='container d-flex flex-wrap justify-content-center'> 
          <a href='/' className='d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark'>
            <span className='fs-4'>My First React App</span>
          </a>
          <form className='col-12 col-lg-auto mb-3 mb-lg-0'>
            <input type="search" className='form-control' placeholder='search...' aria-label='search' />
          </form>
        </div>
      </header>
    </div>
  );
}

function Content(){
  return(
    <>
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <div className='container-fluid py-5'>
          <h1 className='display-5 fw-bold'>First Paragraph in Jumbotron</h1>
          <p className='col-md-8 fs-4'>dfDHSKBvidsbvuiowb vclj </p>
          <button className='btn btn-primary btn-lg' type='button' data-bs-toggle="modal" data-bs-target="#exampleModal">Click here to show modal box</button>
        </div>
      </div>

      {/* Modal */}
      <div className='modal fade' id='exampleModal' tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>Modal title</h5>
              <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              This is my first modal box
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss="modal">Close</button>
              <button type='button' className='btn btn-primary'>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer(){
  return(
    <footer className='text-muted py-5 border-top'>
      <div className='container'>
        <p className='mb-1'>This is My First React App in Bootstrap</p>
        <p className='mb-0'>New to React? <a href='https://reactjs.org/'>Visit the Homepage</a></p>
      </div>
    </footer>
  );
}

function App(){
  return(
    <div>
      <Header />
      <div className='container'>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
