import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
  AiOutlineClose,
} from "react-icons/ai";
import { supabase } from "../../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password") || "";
  const confirmPassword = watch("confirmPassword") || "";

  // Password validation
  const validations = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const isFormValid =
    Object.values(validations).every(Boolean) && password === confirmPassword;

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus("");

    try {
      const { error } = await supabase.auth.updateUser({
        password: data.password,
      });

      if (error) throw error;

      setStatus("Password successfully updated!");
      setTimeout(() => navigate("/auth"), 2000);
    } catch (err) {
      setStatus(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300">
      <div className="relative bg-white/90 backdrop-blur-md shadow-xl rounded-2xl w-[450px] p-8 border border-gray-200">
        {/* CLOSE BUTTON (React Icons) */}
        <button
          type="button"
          onClick={() => navigate("/auth")}
          className="absolute right-4 top-4 p-2 rounded-full border border-purple-300 text-purple-600 hover:bg-purple-100 transition"
        >
          <AiOutlineClose size={18} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <AiOutlineLock className="text-purple-600" size={22} />
          Set a Password
        </h2>

        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          Your previous password has been reset. Please set a new password for
          your account.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* New Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                {...register("password", { required: true })}
                className="w-full border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-purple-600"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative mt-1">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm password"
                {...register("confirmPassword", { required: true })}
                className="w-full border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowConfirm((prev) => !prev)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-purple-600"
              >
                {showConfirm ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>

            {confirmPassword && password !== confirmPassword && (
              <p className="text-xs text-red-500 mt-1">
                Passwords do not match
              </p>
            )}
          </div>

          {/* Password Requirements */}
          <div className="mt-3 text-gray-400 text-xs italic select-none">
            Password must contain at least
            <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-gray-500">
              <li className={validations.length ? "text-green-600" : ""}>
                • 8 Characters
              </li>
              <li className={validations.uppercase ? "text-green-600" : ""}>
                • One uppercase
              </li>
              <li className={validations.special ? "text-green-600" : ""}>
                • One special case character
              </li>
              <li className={validations.lowercase ? "text-green-600" : ""}>
                • One lowercase
              </li>
              <li className={validations.number ? "text-green-600" : ""}>
                • One number
              </li>
            </ul>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full rounded-md py-2 text-white font-medium mt-6 transition-all ${
              isFormValid && !loading
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {loading ? "Updating..." : "Verify"}
          </button>

          {/* Status Message */}
          {status && (
            <p
              className={`text-sm mt-3 text-center ${
                status.includes("successfully")
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
