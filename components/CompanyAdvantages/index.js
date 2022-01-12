import { v4 as uuid } from 'uuid';
import { BsCheckLg } from 'react-icons/bs';
import home from 'data/home';
import Image from 'next/image';

export default function CompanyAdvantages() {
  const {
    companyAdvantages: { heading, highlightsList },
  } = home;

  return (
    <section className="flex flex-col w-full leading-8 text-justify lg:flex-row lg:items-center lg:justify-between font-redHat">
      <div className="flex flex-col justify-center lg:p-14 lg:w-1/2 min-h-[calc(100vh-80px)] tallMobile:min-h-[80vh]">
        <h3 className="pb-8 text-4xl font-semibold text-left">{heading}</h3>
        {highlightsList.map((highlight) => {
          return (
            <div key={uuid()} className="flex mb-8">
              <div className="w-12">
                <BsCheckLg className="my-2 text-green-400" />
              </div>
              <p className="w-full">{highlight}</p>
            </div>
          );
        })}
      </div>
      <div className="relative flex mx-auto w-4/5 mb-16 lg:w-2/6 h-[30vh] lg:h-[50vh] justify-center w-1/2 lg:h-[calc(100vh-160px)]">
        <Image
          src={home.homeAdvantagesUrl}
          priority
          layout="fill"
          width={300}
          objectFit="contain"
          alt="pociągnięcie czarną farbą"
        />
      </div>
    </section>
  );
}
