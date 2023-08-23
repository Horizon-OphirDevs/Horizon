import React from "react";

// react icons
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";

const Settings = () => {
  return (
    <div className="">
      <div className="grid gap-6 md:grid-cols-3 rounded-lg md:min-h-[calc(100vh-70px)] p-5 ">
        <div className="p-6 bg-[#1f1f1f] rounded-lg md:col-span-2">
          <div className="flex flex-col  text-white justify-center w-full text-sm">
            <p className="p-5 text-sm">Connect with us on social media</p>
            <div className="grid gap-5 md:grid-cols-3 align-center ">
              <div className="p-5 bg-[#141414] rounded-md flex justify-center">
                <BsTwitter className="text-xl text-blue-500 mx-3" />
                twitter
              </div>
              <div className="p-5 bg-[#141414] rounded-md flex  justify-center">
                <AiFillInstagram className="text-[25px] text-red-400 mx-3 " />
                instagram
              </div>
              <div className="p-5 bg-[#141414] rounded-md flex justify-center">
                <BiLogoFacebookCircle className="text-[25px] text-blue-600 mx-3" />
                facebook
              </div>
            </div>
          </div>
        </div>
        <div className="p-0 bg-[#1f1f1f] rounded-lg md:row-span-2">
          <div className="flex flex-col justify-between gap-5 text-white">
            <p>Mobile Apps</p>
            <div className="set_bg">
              <p className="text-gray-300 text-xl flex align-center m-auto p-8">
                COMING SOON
              </p>
            </div>
            <div className="p-5 text-white">
              <p>Partners</p>
              <div className="rounded bg-[#141414] p-4 text-white justify-center items-center w-auto flex">
                <p>Alchemy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 bg-[#141414] rounded-lg md:col-span-2">
          <form>
            <div className="flex flex-col text-white">
              <p className="text-sm p-5">
                Promote your business on our website
              </p>

              <div className="grid gap-4 md:grid-cols-3 grid-cols-1 text-xs">
                <div className="md:col-span-3 ">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded bg-[#1f1f1f] p-5 ">
                      <input
                        type="name"
                        name="business"
                        required
                        className="bg-transparent"
                        placeholder="Business name"
                      />
                    </div>
                    <div className="rounded bg-[#1f1f1f] p-5 ">
                      <input
                        type="name"
                        name="business"
                        required
                        placeholder="Business type/category"
                        className="bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded bg-[#1f1f1f] p-5 ">
                  <input
                    type="name"
                    name="business"
                    required
                    className="bg-transparent"
                    placeholder="Instagram link"
                  />
                </div>
                <div className="rounded bg-[#1f1f1f] p-5 ">
                  <input
                    type="name"
                    name="business"
                    required
                    className="bg-transparent"
                    placeholder="Twitter link"
                  />
                </div>
                <div className="rounded bg-[#1f1f1f] p-5 ">
                  <input
                    type="name"
                    name="business"
                    required
                    className="bg-transparent"
                    placeholder="Website link"
                  />
                </div>
                <div className="rounded bg-[#1f1f1f] p-5 md:col-span-3">
                  <input
                    type="text"
                    name="business"
                    required
                    placeholder="Business description "
                    className="bg-transparent"
                  />
                </div>
              </div>
              <button className="bg-[#0baab5] text-white py-3 px-2 rounded-lg mt-5">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="p-8 bg-[#1f1f1f] rounded-lg md:col-span-3">
          <div className="grid md:grid-cols-4 gap-4 text-white">
            <div className="p-5 bg-[#1f1f1f] border rounded-md">Full name</div>
            <div className="p-5 bg-[#1f1f1f] border rounded-md">Email</div>

            <textarea
              id="textarea"
              className="w-full p-2 rounded focus:ring focus:ring-blue-200  bg-[#1f1f1f] border rounded-md md:col-span-2"
              rows="5"
              placeholder="complaint..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

Settings.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
