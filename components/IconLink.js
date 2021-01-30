import React, { useContext } from 'react';
import Link from 'next/link';
import { PlayContext } from './../pages/_app';
import 'animate.css/animate.css';

const iconLink = ({ to, icon, title, delay }) => {
  const isPlaying = useContext(PlayContext);

  return (
    <div
      className={` ${
        isPlaying ? 'animate__animated animate__heartBeat animate__infinite ' + delay : ''
      } flex-1 p-0 m-2 text-center align-middle rounded-2xl`}
    >
      <Link href={to}>
        <a className=" text-nord3 dark:text-nord6 dark:hover:text-nord-5 dark:text-shadow display-6 hover:text-nord1">
          <i className={`${icon} text-5xl `}></i>
          <p className="uppercase ">{title}</p>
        </a>
      </Link>
    </div>
  );
};

export default iconLink;
