import React from "react";
import PageTitle from "../components/common/PageTitle";
import Map from "../components/common/GoogleMao";
import ContactForm from "../components/common/ContactFrom";

const Contact = () => {
  return (
    <div>
      <PageTitle className="mt-20" text="Contact" />
      <ContactForm />
      <div className="container">
        <div className="">
          <h1 className="text-3xl font-bold pt-20 mb-10 text-center">
            Find Me Here
          </h1>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49143.29786884029!2d90.30169690505069!3d23.726064641378503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1759259243521!5m2!1sbn!2sbd"
          width="600"
          height="450"
          className="w-full rounded-md"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
