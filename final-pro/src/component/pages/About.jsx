import React from 'react'

function About() {
  return (
    <div>

      <section class="py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 class="mb-4 display-5 text-center text-warning bg-black">About Us</h2>
              <p class="text-secondary mb-5 text-center lead fs-4">We are dedicated to empowering individuals with expert-led training, real-world experience, and career development opportunities for lasting success.</p>
              <hr class="w-50 mx-auto mb-3 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row gy-3 gy-lg-0 align-items-lg-center">
            <div class="col-12 col-lg-6">
              <img class="img-fluid rounded border border-dark" loading="lazy" src="about.webp" alt="About Us" />
            </div>
            <div class="col-12 col-lg-6">
              <div class="row justify-content-lg-end">
                <div class="col-12 col-lg-11">
                  <div class="about-wrapper">
                    <p class="lead mb-4 mb-md-5">

                      We are a team of industry professionals passionate about education and
                      career development. With years of experience in IT training, we provide
                      expert-led training programs that blend theory with practical application.
                      Our courses are designed to meet the needs of learners at every stage,
                      from beginners to seasoned professionals.
                    </p>
                    <div class="row gy-4 mb-4 mb-md-5">
                      <div class="col-12 col-md-6">
                        <div class="card border border-dark">
                          <div class="card-body p-4">
                            <h3 class="display-5 fw-bold text-primary text-center mb-2">370+</h3>
                            <p class="fw-bold text-center m-0">Qualified Experts</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="card border border-dark">
                          <div class="card-body p-4">
                            <h3 class="display-5 fw-bold text-primary text-center mb-2">18k+</h3>
                            <p class="fw-bold text-center m-0">Satisfied Clients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#!" class="btn btn-primary bsb-btn-2xl">
                      Explore
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About