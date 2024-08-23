import OCP from '@/images/logos/OCP.png';
import RobinsonHotel from '@/images/logos/Robinson-Club-Agadir.png';
import CHUSoussMassa from '@/images/logos/CHU-Souss-Massa.png';
import FaculteMedecine from '@/images/logos/Faculte-Medecine-Laayoune.svg';
import AgadirBeachClub from '@/images/logos/Agadir-Beach-Club.png';
import MinistereSante from '@/images/logos/ministere-de-la-sante-maroc.png';
import Universiapolis from '@/images/logos/Universiapolis.png';
import DelassusGroup from '@/images/logos/Delassus-Group.svg';
import Image from 'next/image';

export const AnimatedLogoCloud = () => {
  return (
    <div className="container">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative md:mt-0 mt-6 lg:mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 5%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                <Image
                  src={OCP}
                  className="w-20 object-cover px-2 brightness-0 dark:invert place-self-center mx-4"
                  alt="OCP"
                />
                <Image
                  src={RobinsonHotel}
                  className="w-44 object-cover px-2 brightness-0 dark:invert place-self-center"
                  alt="Robinson Hotel - Agadir"
                />
                <Image
                  src={CHUSoussMassa}
                  className="w-44 object-cover px-2 brightness-0 dark:invert place-self-center"
                  alt="CHU Souss Massa"
                />
                <Image
                  src={FaculteMedecine}
                  className="w-44 object-cover px-2 brightness-0 dark:invert place-self-center mr-4"
                  alt="Faculte de Madecine et de Pharmacie - Laayoune"
                />
                <Image
                  src={AgadirBeachClub}
                  className="w-20 object-cover px-2 brightness-0 dark:invert place-self-center mr-4 ml-6"
                  alt="Agadir Beach Club Hotel"
                />
                <Image
                  src={MinistereSante}
                  className="w-16 object-cover px-2 brightness-0 dark:invert place-self-center mx-10"
                  alt="Ministre de la Santé"
                />
                <Image
                  src={Universiapolis}
                  className="w-28 object-cover px-2 brightness-0 dark:invert place-self-center mx-2"
                  alt="Universiapolis"
                />
                <Image
                  src={DelassusGroup}
                  className="w-16 object-cover px-2 brightness-0 dark:invert place-self-center mx-10"
                  alt="Delassus Group"
                />
              </div>
            ))}
        </div>
      </div>
      {/* <p className='text-right text-gray-300 uppercase text-sm'>And more</p> */}
    </div>
  );
};