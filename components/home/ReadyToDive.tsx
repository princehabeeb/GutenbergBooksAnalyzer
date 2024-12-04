import ReadyToDiveImg from "@/public/images/home/readytodive.png";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const ReadyToDive = () => {
  return (
    <section className="bg-n0 dark:bg-bg4">
      <div className="rounded-2xl bg-[url(/images/home/smartui-bg.png)] max-w-[1600px] mx-auto bg-cover bg-no-repeat pt-10 lg:pt-14 bg-primary/5 dark:bg-bg3">
        <div className="container grid grid-cols-2 gap-4 xl:gap-6 items-center">
          <div className="col-span-2 lg:col-span-1">
            <h5 className="h5 text-primary font-semibold mb-2 lg:mb-4">
              Ready to Dive
            </h5>
            <h2 className="h2 mb-4 lg:mb-6">
              Ready to dive in? Explore all available ingredients.
            </h2>
            <p className="mb-10 lg:mb-14 text-sm md:text-base">
              We built a great documentation to help you get started. Each
              component has a demo page and code snippets showing how to use
              them.
            </p>
            <Link href="/dashboards/personal-1" className="btn-outline">
              Browse Pages <IconArrowUpRight />
            </Link>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Image
              src={ReadyToDiveImg}
              alt="img"
              className="xxl:translate-x-10 xxxl:translate-x-20 4xl:translate-x-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToDive;
