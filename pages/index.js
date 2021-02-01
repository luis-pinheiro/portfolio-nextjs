import React, { useContext } from 'react';
import { withTranslation } from '../i18n';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { PlayContext } from './_app';
import CardFolio from './../components/CardFolio';
import IconLink from '../components/IconLink';
import SocialLinks from './../components/SocialLinks';
import '@fortawesome/fontawesome-free/css/all.css';
import AllPagesLayout from './../layouts/allPagesLayout';

// import './../textScrambler';

// if (typeof window !== 'undefined') {
//   require('../textScrambler');
// }

const index = ({ t }) => {
  const isPlaying = useContext(PlayContext);

  return (
    <div className="place-self-center">
      <Head>
        <title>Luis Pinheiro | Portfolio</title>
        <link rel="icon" href="./favicon_io/favicon.ico" />
      </Head>

      <div className="grid mx-auto -mb-20 place-items-center">
        <img
          src="/images/profile1.png"
          alt="Picture of the author"
          className={`${
            isPlaying ? 'animate__animated animate__headShake animate__infinite ' : ''
          } z-50 border-8 rounded-full border-opacity-90 profile-img border-nord4 dark:border-nord0 `}
        />
      </div>
      {/* <CardFolio vh="70vh" classes="place-self-center container"> */}
      <CardFolio classes="">
        <div className="flex flex-col w-full h-full justify-evenly">
          <div className="grid w-full h-full mx-auto place-items-center">
            <div className="mt-24 ">
              <h1
                className={`flex text-6xl text-center transition-colors ${
                  isPlaying ? 'animate__animated animate__rubberBand animate__infinite animate__delay-2s ' : ''
                } text-nord3 dark:text-nord6 dark:text-shadow lg:text-9xl tangerine `}
              >
                {t('greeting')}
              </h1>

              <div
                id="scramble"
                className="text-xl font-semibold text-center dark:text-nord6 dark:text-shadow text-nord3 my-7 code"
              ></div>
            </div>

            <div className="p-5 border border-red-500">
              <p className="text-center text-red-500 ">Under construction</p>
            </div>
            <div className="flex flex-row flex-wrap content-around justify-center w-full px-5 text-2xl">
              <IconLink delay="animate__delay-4s" to="/about" icon="fas fa-user-circle" title={'About'}></IconLink>
              <IconLink delay="animate__delay-1s" to="/work" icon="fas fa-briefcase" title={'Work'} />
              <IconLink delay="animate__delay-5s" to="/services" icon="fab fa-whmcs" title={'Services'} />
              <IconLink delay="animate__delay-3s" to="/contact" icon="fas fa-envelope" title={'Contact'} />
            </div>
            <div id="social-links " className="w-full mt-10 sm:max-w-md">
              <ul className="flex flex-wrap justify-around place-content-center">
                <li>
                  <SocialLinks className="" icon="fab fa-linkedin" url="https://www.linkedin.com/in/luis-pinheiro" />
                </li>
                <li>
                  <SocialLinks className="" icon="fab fa-dev" url="https://dev.to/luispinheiro" />
                </li>
                <li>
                  <SocialLinks
                    className=""
                    icon="fab fa-free-code-camp"
                    url="https://www.freecodecamp.org/luis-pinheiro"
                  />
                </li>

                <li>
                  <SocialLinks className="" icon="fab fa-github" url="https://github.com/luis-pinheiro" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardFolio>
    </div>
  );
};

index.Layout = AllPagesLayout;

index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

index.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(index);
