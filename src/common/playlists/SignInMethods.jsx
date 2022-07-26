import { Typography, Box, Stack, Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignInMethods = ({ loginHandler }) => {
  return (
    <Stack direction='column' alignItems='center' spacing={2}>
      <Typography variant='h6'>Sign In</Typography>
      <Stack flexDirection='column' spacing={2.5}>
        <ButtonBuilder
          onClick={loginHandler.bind(null, "google")}
          Icon={FcGoogle}
          text='Sign in with Google'
        />
        <ButtonBuilder
          onClick={loginHandler.bind(null, "github")}
          Icon={FaGithub}
          text='Sign in with Github'
        />
      </Stack>
    </Stack>
  );
};

const ButtonBuilder = ({ Icon, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='flex justify-center items-center gap-x-2 border border-slate-50 shadow-md w-[300px] py-2.5 cursor-pointer'
    >
      <Icon size='25' /> <span>{text}</span>
    </div>
  );
};

export default SignInMethods;
