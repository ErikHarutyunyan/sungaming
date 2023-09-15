import React from 'react'
// Styles
// import "./Subscribe.css"

import {useForm} from 'react-hook-form';

const Subscribe = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: "onChange",
  });
  const onSubmit = data => {
    debugger
    console.log(data)
  };
  console.log(errors);

  return (
    <section className="subscribe">
      <div className="container">
        <div className="row justify-content-between align-items-center pt-120 pb-120">
          <div className="col-xl-5 col-lg-6 get-start">
            <span className="mb-2 display-four">Let’s Get started</span>
            <p>For further info &amp; support, <a href="contact">Contact us</a></p></div>
          <div className="col-xl-5 col-lg-6 col-md-8">
            <form className="form-contact mt-8 mt-lg-0 py-8 px-4 px-sm-8" onSubmit={handleSubmit(onSubmit)}>
              <div className="input-area p-4 d-grid d-sm-flex align-items-center justify-content-between">

                <input type="text" name={'email'} placeholder="Enter Your Email" {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i
                })} />
                {errors.email && <p>Email is required and must be in a valid format.</p>}

                <div className="btn-area alt-bg mt-6 mt-sm-0">
                  <button type={"submit"} className="box-style btn-box d-center">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
