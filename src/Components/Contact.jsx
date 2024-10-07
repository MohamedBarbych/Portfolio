import { CONTACT } from "../assets/constants";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import close icon

const Contact = () => {
  const form = useRef();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dec4gxq", "template_r9xd39h", form.current, {
        publicKey: "twfC2liVTRxTUIveI",
      })
      .then(
        (result) => {
          console.log(result.text);
          setSnackbarMessage("Email sent successfully!");
          setSnackbarSeverity("success");
          setOpenSnackbar(true);
          form.current.reset(); // Clear inputs after success
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSnackbarMessage("Failed to send email. Please try again.");
          setSnackbarSeverity("error");
          setOpenSnackbar(true);
        }
      );
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-neutral-400"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 text-neutral-400"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-lg mx-auto p-8 bg-transparent border border-neutral-700 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="mr-2 rounded bg-transparent px-2 py-1 font-medium text-purple-400"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="w-full mt-1 px-4 py-2 bg-transparent border border-neutral-600 rounded-lg text-neutral-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="mr-2 rounded bg-transparent px-2 py-1 font-medium text-purple-400"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="w-full mt-1 px-4 py-2 bg-transparent border border-neutral-600 rounded-lg text-neutral-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="mr-2 rounded bg-transparent px-2 py-1 font-medium text-purple-400"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="w-full mt-1 px-4 py-2 bg-transparent border border-neutral-600 rounded-lg text-neutral-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 via-slate-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            Send
          </button>
        </form>
      </div>

      {/*----------------- Snackbar Alert --------------------- */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
