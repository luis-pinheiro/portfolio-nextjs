import Tilt from 'react-parallax-tilt';

const CardWork2 = ({ img, title, description, tags, link, linkCode }) => {
  let website = true;
  if (link === '') {
    website = false;
  }

  let code = true;
  if (linkCode === '') {
    code = false;
  }
  return (
    <Tilt className="parallax-effect" perspective={500}>
      {/* <div className="place-self-center"> */}

      <div
        className="pb-4 overflow-hidden text-center border-transparent rounded-lg opacity-90 card-work bg-nord6 dark:bg-nord1 elevation-2 hover:elevation-4"
        style={{
          width: '300px',
          height: '400px',
          backgroundImage: 'url("/public/patterns/watercolor-paper-texture.jpg")',
        }}
      >
        {/* <div className="h-full"> */}
        {/* <div className="grid px-5 pt-5 pb-2 "> */}
        {/* <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-500 title-font">CATEGORY</h2> */}

        {/* </div> */}
        {/* </div> */}
      </div>
      {/* </div> */}

      <div
        className="flex flex-col justify-center pb-4 text-center card-layer inner-element"
        style={{ width: '264px', marginTop: '-377px', height: '353px', marginLeft: '-1px' }}
      >
        <img className="object-cover object-center rounded-t-lg img-card" src={img} alt={title} width="300px" />
        <h1 className="mb-3 text-xl font-medium text-nord0 dark:text-nord6 dark:text-shadow title-font ">{title}</h1>
        <p className="mb-3 leading-relaxed text-nord1 dark:text-nord5 dark:text-shadow ">{description}</p>
        <div className="flex flex-wrap justify-center text-center ">
          {tags.split(' ').map((tag) => {
            return (
              <span
                key={tag}
                className="px-2 py-1 m-1 text-xs rounded bg-nord4 dark:elevation-1 dark:text-shadow dark:text-nord4 dark:bg-nord3 text-nord3 caps-all-small"
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div className="flex flex-wrap content-end h-full ">
          {website && (
            <a
              href={link}
              target="_blank"
              rel="noopener"
              className="flex flex-col items-center justify-center flex-1 w-full mx-auto text-center dark:hover:text-nord6 dark:text-shadow dark:text-nord4 dark:hover:text-shadow-lg text-nord3"
            >
              <i className="w-full h-5 fas fa-globe"></i>
              <p>Website</p>
            </a>
          )}

          {code && (
            <a
              href={linkCode}
              target="_blank"
              rel="noopener"
              className="flex flex-col items-center justify-center flex-1 w-full mx-auto text-center dark:hover:text-nord6 dark:text-shadow dark:text-nord4 dark:hover:text-shadow-lg text-nord3"
            >
              <i className="w-full h-5 fas fa-code"></i>
              <p>Source Code</p>
            </a>
          )}
        </div>
      </div>
    </Tilt>
  );
};

export default CardWork2;
