import React from "react";
import { Link } from "gatsby";

import Head from "../components/head";
import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout>
      <Head title="About" />
      <h2>About me</h2>
      <div className="image__container"></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        finibus quis sapien quis ultrices. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Praesent nec
        mattis metus. Etiam ac metus sit amet nulla rhoncus eleifend vel in
        enim. Fusce dapibus dui velit. Quisque ac ante ut leo tempor fermentum
        vitae eu odio. Vestibulum nec nisl ac nisi venenatis scelerisque eget
        eget nibh. Etiam non risus id augue rhoncus congue non nec est. Ut in
        consectetur nulla, quis vestibulum lacus. Pellentesque sed libero ac
        velit elementum molestie.
      </p>
      <p>
        Mauris in lacus massa. Proin posuere neque odio, nec eleifend turpis
        porta ut. Nullam hendrerit in lacus non eleifend. Vestibulum feugiat
        placerat pretium. Nullam ultrices, velit at luctus efficitur, nibh sem
        laoreet tortor, sit amet pretium arcu nisl eu sapien. Suspendisse
        ultrices arcu vitae nulla viverra aliquam. Sed facilisis sed turpis
        semper varius. Fusce vel massa elit. In ultricies vulputate mauris a
        tempor.
      </p>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  );
};

export default about;
