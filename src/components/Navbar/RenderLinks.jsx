import data from '../../data.json';

const RenderLinks = () => {
  const { menuLinks } = data['section-nav'];

  return (
    <>
      {menuLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href} className='hover:text-custom-yellow'>
            {link.title}
          </a>
        </li>
      ))}
    </>
  );
};
export default RenderLinks;
