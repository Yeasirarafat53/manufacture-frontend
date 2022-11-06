import React from 'react';

const Team = () => {
  return (
    <section className="team_section layout_padding">
      <div className="container">
        <div className="heading_container titlepage">
          <h2>
            <img src="image/heading.png" alt="" />
            Our Team
          </h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img
                  src="https://html.design/demo/zarage/images/t1.jpg"
                  alt=""
                />
              </div>
              <div className="detail-box">
                <h5>Ariyan Arif</h5>
                <h6>Mechanic</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {' '}
            <div className="box">
              <div className="img-box">
                <img
                  src="https://html.design/demo/zarage/images/t2.jpg"
                  alt=""
                />
              </div>
              <div className="detail-box">
                <h5>Abs Kawser</h5>
                <h6>Mechanic</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {' '}
            <div className="box">
              <div className="img-box">
                <img
                  src="https://html.design/demo/zarage/images/t3.jpg"
                  alt=""
                />
              </div>
              <div className="detail-box">
                <h5>John Doe</h5>
                <h6>Mechanic</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
