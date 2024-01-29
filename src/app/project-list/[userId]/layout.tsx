"use client";

import { CiMail } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const ProjectListLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 shadow-md mb-3 sticky top-0 z-50 bg-white">
        <div className="flex items-center">
          <a href="https://stg.castit.biz/dashboard.asp">
            <img
              className="h-12"
              src="https://stg.castit.biz/images/castit-main-logo.gif"
              alt="Logo"
            />
          </a>
          <a
            href="https://stg.castit.biz/dashboard.asp"
            className="ml-4 font-semibold text-black underline"
          >
            Project List
          </a>
        </div>

        <div className="flex items-center gap-3">
          <ul className="flex gap-3">
            <li title="Inbox">
              <a href="../inbox.asp" className="">
                <CiMail size="1.9rem" className="ml-auto mr-auto my-2" />
                Inbox
              </a>
            </li>
            <li title="Help">
              <a href="#">
                <IoIosHelpCircleOutline
                  size="1.9rem"
                  className="ml-auto mr-auto my-2"
                />
                Help
              </a>
            </li>
          </ul>

          <div className="relative group mt-2 border-2 rounded">
            <button className="relative z-10 middle none center rounded-lg bg-white py-3 px-6 font-sans text-xs text-black active:opacity-[0.85] disabled:pointer-events-none">
              <div className="flex flex-row gap-7">
                <div className="logo-section-1000000">
                  <img
                    src="https://stg.castit.biz/media/cis/logo/1000000-logo.gif"
                    alt="Logo"
                    className="h-10"
                  />
                </div>
                <div className="user-fullname my-auto">
                  <h3 className="font-semibold">Pratham Thakkar</h3>
                  <h4>Cast It Admin</h4>
                </div>
              </div>
            </button>
            <div className="absolute  bottom-48 group-hover:-bottom-[11.3rem] transition-all ease-in-out duration-500">
              <div className="z-0 w-max whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                <h3 className="font-sans font-normal text-sm py-2 px-5 hover:cursor-pointer  hover:bg-slate-300">
                  Admin
                </h3>
                <h3 className="font-sans font-normal text-sm py-2 px-5 hover:cursor-pointer  hover:bg-slate-300">
                  Message
                </h3>
                <h3 className="font-sans font-normal text-sm py-2 px-5 hover:cursor-pointer  hover:bg-slate-300">
                  Talent
                </h3>
                <h3 className="font-sans font-normal text-sm py-2 px-5 hover:cursor-pointer  hover:bg-slate-300">
                  Account
                </h3>
                <h3
                  className="font-sans font-normal text-sm py-2 px-5 hover:cursor-pointer  hover:bg-slate-300"
                  onClick={() => {
                    Cookies.remove("token");
                    router.replace(`${process.env.NEXT_PUBLIC_BASE_URL_2!}`);
                  }}
                >
                  Log out
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default ProjectListLayout;
