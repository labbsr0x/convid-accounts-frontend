import React from 'react';
import logo from './logo.png'
import RequestForm from './routes/RequestForm';

function App() {
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image">
          <div className="pexels-credit">
            {/* Photo by Daria Shevtsova from Pexels */}
            Photo by Canva Studio from Pexels
          </div>
        </div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto mb-3">
                  <img src={logo} alt="Logo Convid" style={{ width: "120px" }} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <RequestForm />
                </div>
              </div>
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto mt-3">
                  <hr />
                  <ul>
                    <li><a href="#">Como funciona o Convid?</a></li>
                    <li><a href="#">Por que trabalhar de casa nesse momento?</a></li>
                    <li><a href="#">Sobre COVID-19</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
