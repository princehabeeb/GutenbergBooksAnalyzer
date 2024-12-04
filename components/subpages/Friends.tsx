import Image from "next/image";
import OptionsVertical from "../shared/OptionsVertical";
const users = [
  {
    id: 1,
    name: "Kristin Watson",
    img: "/images/user-big-2.png",
    designation: "UI/UX Designer",
  },
  {
    id: 2,
    name: "John Doe",
    img: "/images/user-big-3.png",
    designation: "Software Engineer",
  },
  {
    id: 3,
    name: "Alice Johnson",
    img: "/images/user-big-4.png",
    designation: "Data Scientist",
  },
  {
    id: 4,
    name: "Bob Smith",
    img: "/images/user-big-5.png",
    designation: "Product Manager",
  },
  {
    id: 5,
    name: "Eva Green",
    img: "/images/user-big-6.png",
    designation: "Marketing Specialist",
  },
  {
    id: 6,
    name: "Daniel White",
    img: "/images/user-big-7.png",
    designation: "Frontend Developer",
  },
  {
    id: 7,
    name: "Olivia Turner",
    img: "/images/user-big-8.png",
    designation: "Backend Developer",
  },
  {
    id: 8,
    name: "Michael Brown",
    img: "/images/user-big-9.png",
    designation: "Graphic Designer",
  },
  {
    id: 9,
    name: "Sophia Davis",
    img: "/images/user-big-10.png",
    designation: "Project Manager",
  },
];
const Friends = () => {
  return (
    <div className="box p-3 mb-4 xxxl:mb-6">
      <div className="bg-primary/5 dark:bg-bg3 box">
        <div className="flex justify-between items-center bb-dashed mb-6 pb-6">
          <p className="font-medium">Friends</p>
          <OptionsVertical />
        </div>
        <div className="flex flex-col gap-4 md:gap-5 xl:gap-7">
          {users.map(({ id, designation, img, name }) => (
            <div key={id} className="flex gap-3 xl:gap-5 items-center">
              <Image
                src={img}
                width={60}
                height={60}
                className="rounded-full"
                alt="img"
              />
              <div>
                <p className="text-lg md:text-xl font-medium mb-2">{name}</p>
                <span className="text-sm">{designation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
