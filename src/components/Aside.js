import React from "react";
import AsideStyles from "./Aside.module.scss";
// import Img from "./Img";
import Image from "./Images";

const Aside = () => {
  return (
    <div className={AsideStyles.aside}>
      <h2 className={AsideStyles.title}>Welcome to my blog!</h2>
      <p className={AsideStyles.text}>
        Hi, I'm Martina, I'm from Ischia and I live in Sicily. I love books and
        in this blog, I talk about the ones I loved the most.
      </p>
      <h2 className={AsideStyles.title}>A little bit of me</h2>
      <div className={AsideStyles.images}>
        <Image
          src="img/grid/clay-banks-GX8KBbVmC6c-unsplash.jpg"
          alt="grid1"
          className={AsideStyles.img}
        />
        <Image
          src="img/grid/adriana-velasquez-J9yPpjKY8zc-unsplash.jpg"
          alt="grid2"
          className={AsideStyles.img}
        />
        <Image
          src="img/grid/florencia-viadana-xgIaBmsiWI0-unsplash.jpg"
          alt="grid3"
          className={AsideStyles.img}
        />
        <Image
          src="img/grid/katya-austin-uesPVQY0TkA-unsplash.jpg"
          alt="grid4"
          className={AsideStyles.img}
        />
        <Image
          src="img/grid/thought-catalog-Pnvmg65W9tQ-unsplash.jpg"
          alt="grid5"
          className={AsideStyles.img}
        />
        <Image
          src="img/grid/timothy-buck-psrloDbaZc8-unsplash.jpg"
          alt="grid6"
          className={AsideStyles.img}
        />
      </div>
      <div className={AsideStyles.socials}>
        <h2 className={AsideStyles.title}>Follow me!</h2>
        <ul>
          <li>
            <a href="#" className={AsideStyles.facebook}>
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="#" className={AsideStyles.instagram}>
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" className={AsideStyles.twitter}>
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
