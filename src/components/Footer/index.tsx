import { FOOTER_DATA, SOCIAL_MEDIA } from "@/constants/data";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-grey-3 pt-6 px-8 lg:px-[7rem] 2xl:px-[10.71rem] pb-[9rem] flex gap-20">
      <div className="flex flex-col flex-1">
        <Image src={"/logos/logo-2.png"} alt="" height={85} width={272} />
        <p className="text-grey-2 mt-2 mb-6">
          Unlocking the power of AI precision, we revolutionize the way
          businesses operate. Our innovative solution automates repetitive
          tasks, saving valuable time and boosting productivity.{" "}
        </p>
        <div className="flex items-center gap-4">
          {SOCIAL_MEDIA.map((item) => {
            return (
              <Link target="_blank" key={item?.link} href={item?.link}>
                <Image src={item?.icon} alt="" height={24} width={24} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="lg:flex flex-1 justify-end gap-8 mt-6 hidden">
        {FOOTER_DATA?.map((item) => {
          return (
            <div className="flex flex-col flex-1" key={item?.label}>
              <p className="font-bold text-lg mb-[2.71rem]">{item?.label}</p>
              <div className="flex flex-col gap-4">
                {item?.data.map((item2) => {
                  if (item2?.icon) {
                    return (
                      <div
                        className={clsx(
                          "flex items-center gap-2",
                          item2?.icon ? "" : "py-0.5"
                        )}
                        key={item2?.label}
                      >
                        {item2?.icon && (
                          <Image
                            src={item2?.icon}
                            alt=""
                            height={24}
                            width={24}
                          />
                        )}
                        <p>{item2?.label}</p>
                      </div>
                    );
                  } else {
                    return (
                      <Link
                        href={"/"}
                        className={clsx(
                          "flex items-center gap-2",
                          item2?.icon ? "" : "py-0.5"
                        )}
                        key={item2?.label}
                      >
                        {item2?.icon && (
                          <Image
                            src={item2?.icon}
                            alt=""
                            height={24}
                            width={24}
                          />
                        )}
                        <p>{item2?.label}</p>
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
