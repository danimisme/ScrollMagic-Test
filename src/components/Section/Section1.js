import SosmedButton from "../Elements/SosmedButton";

export default function Section1() {
  return (
    <div className="min-h-screen bg-[#fcf944] flex flex-col justify-center">
      <div className="flex gap-5 items-center max-w-xl mx-auto">
        <div>
          <img src="/logo/logo-cat.svg" alt="cat" className="w-48 m-8 " />
        </div>
        <div>
          <h1 className="text-6xl font-bold leading-[110%]">
            Innovative <br />
            Solution <br /> for <br /> Animals
          </h1>
        </div>
      </div>
      <h2 className="mt-10 text-4xl text-center">charity organization</h2>
      <div className="flex justify-center gap-5 mt-5">
        <SosmedButton
          icon="/logo/youtube.svg"
          link="https://www.youtube.com/"
        />
        <SosmedButton
          icon="/logo/instagram.svg"
          link="https://www.instagram.com/"
        />
        <SosmedButton
          icon="/logo/facebook.svg"
          link="https://www.facebook.com/"
        />
        <SosmedButton
          icon="/logo/patreon.svg"
          link="https://www.patreon.com/"
        />
        <SosmedButton
          icon="/logo/telegram.svg"
          link="https://www.telegram.com/"
        />
      </div>
    </div>
  );
}
