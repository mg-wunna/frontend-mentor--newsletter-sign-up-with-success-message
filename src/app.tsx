import illustrationSignUpMobileImage from "../assets/images/illustration-sign-up-mobile.svg";
import iconList from "../assets/images/icon-list.svg";
import iconSuccess from "../assets/images/icon-success.svg";
import { useCallback, useState } from "react";

const App = () => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const submitEmailHandler = useCallback(() => {
    if (email) {
      const isValid = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
      if (isValid) setIsSuccess(true);
      else setIsError(true);
    }
  }, [email]);

  if (isSuccess) {
    return (
      <div className="font-roboto-regular text-neutral-dark-slate-grey flex h-screen flex-col justify-between p-6">
        <div className="flex flex-1 flex-col justify-center">
          <div>
            <img src={iconSuccess} />
          </div>
          <h1 className="font-roboto-bold my-7 text-4xl">
            Thanks for subscribing!
          </h1>
          <p className="text-neutral-charcoal-grey">
            A confirmation email has been sent to{" "}
            <span className="text-neutral-dark-slate-grey font-roboto-bold">
              {email}
            </span>
            . Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <div>
          <button
            className="hover:from-primary-pink bg-neutral-dark-slate-grey hover:to-primary-tomato group relative mt-7 w-full rounded-lg py-3 text-white shadow-2xl transition-all hover:bg-gradient-to-r"
            onClick={() => {
              window.location.reload();
            }}
          >
            <div className="from-primary-pink to-primary-tomato absolute -inset-1 -z-10 hidden rounded-lg bg-gradient-to-r opacity-50 blur group-hover:block"></div>
            Dismiss message
          </button>
          <div className="my-4 whitespace-nowrap text-center text-xs lg:fixed lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              className="text-blue-800 hover:text-blue-500"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://mg-wunna.github.io/mg-wunna"
              className="text-blue-800 hover:text-blue-500"
            >
              Mg Wunna
            </a>
            .
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="font-roboto-regular">
      <img src={illustrationSignUpMobileImage} />
      <div className="p-6">
        <h1 className="font-roboto-bold text-neutral-dark-slate-grey text-3xl">
          Stay updated!
        </h1>
        <p className="text-neutral-charcoal-grey my-7">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="text-neutral-charcoal-grey space-y-4">
          <li className="flex items-start gap-x-4">
            <img src={iconList} />
            <p className="-mt-0.5">
              Product discovery and building what matters
            </p>
          </li>
          <li className="flex items-start gap-x-4">
            <img src={iconList} />
            <p className="-mt-0.5">Measuring to ensure updates are a success</p>
          </li>
          <li className="flex items-start gap-x-4">
            <img src={iconList} />
            <p className="-mt-0.5">And much more!</p>
          </li>
        </ul>
        <div className="mt-10 flex flex-col gap-y-2">
          <div className="flex justify-between">
            <label htmlFor="email" className="font-roboto-bold text-sm">
              Email address
            </label>
            {isError && (
              <p className="text-primary-tomato font-roboto-bold text-xs">
                Valid email required
              </p>
            )}
          </div>
          <input
            className={`rounded-xl border border-solid p-6 py-4 outline-none ${isError ? "border-primary-tomato bg-primary-tomato/20 text-primary-tomato" : "border-neutral-grey"}`}
            type="text"
            placeholder="email@company.com"
            value={email}
            onClick={() => setIsError(false)}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="hover:from-primary-pink bg-neutral-dark-slate-grey hover:to-primary-tomato group relative mt-7 w-full rounded-lg py-3 text-white shadow-2xl transition-all hover:bg-gradient-to-r"
          onClick={submitEmailHandler}
        >
          <div className="from-primary-pink to-primary-tomato absolute -inset-1 -z-10 hidden rounded-lg bg-gradient-to-r opacity-50 blur group-hover:block"></div>
          Subscribe to monthly newsletter
        </button>
        <div className="my-4 whitespace-nowrap text-center text-xs lg:fixed lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-blue-800 hover:text-blue-500"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://mg-wunna.github.io/mg-wunna"
            className="text-blue-800 hover:text-blue-500"
          >
            Mg Wunna
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default App;
