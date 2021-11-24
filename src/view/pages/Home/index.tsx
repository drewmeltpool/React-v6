import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/photo.svg';
import Button from '../../components/Button';
import Image from '../../components/Image';
import Title from '../../components/Title';
import './home.scss';

const Home: React.FC = () => {
  return (
    <div className="container">
      <section className="home-section">
        <div className="block">
          <Title variant="primary">
            You can edit your photo and send it to your service
          </Title>
          <Link className="link" to="/sign-up">
            <Button variant="primary">Get Started</Button>
          </Link>
        </div>
        <Image className="home-image" src={image} />
      </section>
    </div>
  );
};

export default Home;
