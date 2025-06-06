import { useContext, useState } from 'react';
import { BsTelephone } from 'react-icons/bs';
import * as Ci from 'react-icons/ci';
import ModalWindowV2 from '../components/ModalWindowV2';
import SignupForm from '../features/auth/SignupForm';
import LoginForm from '../features/auth/LoginForm';
import { GlobalContext } from '../context/GlobalContext';
import { RiAdminLine } from 'react-icons/ri';
import { MdOutlineLogout } from 'react-icons/md';

const Header = () => {
  const [signUp, setSignUp] = useState(false);
  const globalContext = useContext(GlobalContext);
  const loginModal = globalContext?.loginModal;
  const setloginmodal = globalContext?.setLoginModal;
  const currentUser = globalContext?.currentUser;

  return (
    <>
      <div className="h-12 bg-cyan-600 text-white text-sm p-2 flex flex-row justify-between items-center md:px-20">
        <div className="hidden sm:flex flex-row justify-start gap-4">
          <div className="flex flex-row items-center gap-1">
            <BsTelephone />
            <span>+254750391304</span>
          </div>

          <div className="flex flex-row items-center gap-1">
            <Ci.CiMail />
            <span>contact@twende.co.ke</span>
          </div>
        </div>

        {currentUser ? (
          <div className="flex flex-row w-full justify-end items-center gap-3 ">
            <h1>{currentUser}</h1>
            <div onClick={() => window.location.reload()} className="flex flex-row items-center gap-1 cursor-pointer">
              <MdOutlineLogout />
              <span>Log Out</span>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="flex flex-row w-full justify-end items-center gap-3">
              <div
                onClick={() => setloginmodal && setloginmodal(true)}
                className="flex flex-row items-center gap-1 cursor-pointer"
              >
                <Ci.CiLock />
                <span>Log in</span>
              </div>

              <div onClick={() => setSignUp(true)} className="flex flex-row items-center gap-1 cursor-pointer">
                <Ci.CiUser />
                <span>Sign Up</span>
              </div>

              <div
                onClick={() => setloginmodal && setloginmodal(true)}
                className="flex flex-row items-center gap-1 cursor-pointer"
              >
                <RiAdminLine />
                <span>Admin</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {
        <>
          <ModalWindowV2 isOpen={loginModal ?? false} onClose={() => setloginmodal && setloginmodal(false)}>
            {
              <LoginForm
                ifSuccesfull={() => {
                  setloginmodal && setloginmodal(false);
                }}
              />
            }
          </ModalWindowV2>

          <ModalWindowV2 isOpen={signUp} onClose={() => setSignUp(false)}>
            {
              <SignupForm
                ifSuccesfull={() => {
                  setSignUp(false);
                  setloginmodal && setloginmodal(true);
                }}
              />
            }
          </ModalWindowV2>
        </>
      }
    </>
  );
};

export default Header;
