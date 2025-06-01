import React from "react";
import { Button, Grid } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import AuthModal from "./AuthModal";

const Authentication = () => {
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const handleOpenAuthModal = () => setOpenAuthModal(true);
  const handleCloseAuthModal = () => setOpenAuthModal(false);
  return (
    <div>
      <Grid className="overflow-y-hidden" container>
        <Grid className="hidden lg:block" item lg={7}>
          {/* <div
            style={{
              background:
                "black url(https://static.designboom.com/wp-content/uploads/2023/07/twitter-logo-change-x-elon-musk-designboom-01.jpg) no-repeat center center / cover",
            }}></div> */}
          <img
            className="w-full h-screen object-cover"
            src="https://static.designboom.com/wp-content/uploads/2023/07/twitter-logo-change-x-elon-musk-designboom-01.jpg"
            alt="X"
          />
        </Grid>
        <Grid
          className="px-10 flex items-center justify-center"
          item
          lg={5}
          xs={12}>
          <div>
            <h1 className="font-bold text-7xl">Happening Now</h1>
            <h1 className="font-bold text-3xl py-16">Join Twitter Today</h1>
            <div className="w-[60%]">
              <div className="w-full">
                <GoogleLogin width={330} />
                <p className="py-5 text-center">OR</p>

                <Button
                  onClick={handleOpenAuthModal}
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: "29px",
                    py: "7px",
                  }}>
                  Create Account
                </Button>
                <p className="text-sm mt-2">
                  By signing up, you agree to the Terms of Service and Privacy
                  Policy, including Cookie Use.
                </p>
              </div>
              <div className="mt-1">
                <h1 className="font-bold text-xl mb-5">
                  Already Have Account?
                </h1>
                <Button
                  onClick={handleOpenAuthModal}
                  fullWidth
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: "29px",
                    py: "7px",
                  }}>
                  Login
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal} />
    </div>
  );
};

export default Authentication;
