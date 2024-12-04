import Image from "next/image";
import Link from "next/link";

const twoFactorItems = [
  {
    title: "With Email",
    desc: "We will send you a confirmation code to your email address",
    icon: "/images/email.png",
  },
  {
    title: "With SMS",
    desc: " We will send you an SMS with the code on your mobile phone",
    icon: "/images/sms.png",
  },
  {
    title: "With App",
    desc: "We will send you the code in your authenticator app",
    icon: "/images/app.png",
  },
  {
    title: "With Community",
    desc: "We'll send you the code to your community",
    icon: "/images/community.png",
  },
];
const TwoFactor = () => {
  return (
    <div className="py-8 md:py-12 xxl:py-20">
      <div className="text-center mb-10 xl:mb-[60px]">
        <h2 className="h2 mb-6">👋 Welcome to DashBoi </h2>
        <p>Select an option to enable 2 factor authentication</p>
      </div>
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6 mb-7 lg:mb-10">
        {twoFactorItems.map(({ title, desc, icon }) => (
          <div
            key={title}
            className={`col-span-12 cursor-pointer duration-300 sm:col-span-6 border-2 lg:col-span-4 xl:col-span-3 xxl:col-span-4 xxxl:col-span-3 rounded-2xl p-3 bg-n0 dark:bg-bg4 hover:border-primary border-n30 dark:border-n500 dark:hover:border-primary`}>
            <div className="box border-none xl:p-8 bg-primary/5 dark:bg-bg3 flex flex-col items-center justify-center text-center">
              <div className="bg-n0 dark:bg-bg4 rounded-2xl p-4 mb-6">
                <Image src={icon} width={88} height={88} alt="icon" />
              </div>
              <h4 className="h4 mb-3 md:mb-4">{title}</h4>
              <p className="text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-sm flex justify-center gap-4 items-center">
        <button className="btn">Continue</button>
        <p>
          No thanks, I want to{" "}
          <Link href="#" className="text-primary">
            skip
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TwoFactor;
