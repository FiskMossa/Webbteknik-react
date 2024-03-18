import ReCAPTCHA from "react-google-recaptcha";

function Captcha() {
  const handleCaptchaVerify = (token) => {
    console.log("CAPTCHA verified, token:", token);
    // Send the token to your server for verification
  };

  return (
    <div>
      {/* Other form fields */}
      <ReCAPTCHA
        sitekey="YOUR_SITE_KEY"
        onChange={handleCaptchaVerify}
      />
    </div>
  );
}

export default Captcha;
