import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header class="jumbotron jumbotron-fluid">
          <div class="container text-center">
            <h1 class="display-4">Welcome to our Restaurant</h1>
            <p class="lead">Delicious food served with love</p>
          </div>
        </header>

        <section class="container">
          <div class="row">
            <div class="col-md-6">
              <img
                src="https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Restaurant Photo"
                class="img-fluid"
              />
            </div>
            <div class="col-md-6">
              <h2>About Us</h2>
              <p>
                Welcome to [Restaurant Name], where gastronomy meets exceptional
                dining experiences. Situated in the heart of [City], our
                restaurant offers a delightful culinary journey that satisfies
                both the palate and the soul. At [Restaurant Name], we believe
                that food is not just sustenance; it's an art form. Our team of
                talented chefs, with their mastery and creativity, craft
                exquisite dishes that showcase the finest ingredients and
                flavors. From delectable appetizers to mouthwatering main
                courses and irresistible desserts, every dish is a masterpiece
                designed to enchant your taste buds. Step into our elegant and
                inviting ambiance, where modern design blends seamlessly with a
                warm and welcoming atmosphere. The soft lighting, comfortable
                seating, and attentive staff create an environment that is
                perfect for intimate dinners, family gatherings, or special
                occasions. Our menu is carefully curated to cater to diverse
                culinary preferences. Whether you're a lover of traditional
                cuisine, an adventurous foodie, or follow specific dietary
              
              </p>
              <a href="#" class="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section class="container mt-5">
          <h2>Latest Blog Articles</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-3">
                <img
                  src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  class="card-img-top"
                  alt="Blog 1"
                />
                <div class="card-body">
                  <h5 class="card-title">Blog Title 1</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus rutrum ipsum non augue aliquet fermentum.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
            
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-3">
                <img
                  src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  class="card-img-top"
                  alt="Blog 2"
                />
                <div class="card-body">
                  <h5 class="card-title">Blog Title 2</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus rutrum ipsum non augue aliquet fermentum.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
                
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-3">
                <img
                  src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  class="card-img-top"
                  alt="Blog 3"
                />
                <div class="card-body">
                  <h5 class="card-title">Blog Title 3</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus rutrum ipsum non augue aliquet fermentum.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
