import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
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

  const password = watch("password");

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        console.log("User arrived from reset link");
      }
    });
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus("");
    try {
      const { error } = await supabase.auth.updateUser({
        password: data.password,
      });
      if (error) throw error;
      setStatus("Password successfully updated!");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setStatus(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300">
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl w-[425px] p-8 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <AiOutlineLock className="text-purple-600" size={22} />
          Set a New Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Password */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "At least 8 characters" },
                })}
                className={`w-full border ${
                  errors.password ? "border-red-400" : "border-gray-300"
                } rounded-md pl-3 pr-10 py-2 focus:ring-2 focus:ring-purple-400 outline-none`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-purple-600"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative mt-1">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter new password"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className={`w-full border ${
                  errors.confirmPassword ? "border-red-400" : "border-gray-300"
                } rounded-md pl-3 pr-10 py-2 focus:ring-2 focus:ring-purple-400 outline-none`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((p) => !p)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-purple-600"
              >
                {showConfirm ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-red-500 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-300" : "bg-purple-600 hover:bg-purple-700"
            } text-white font-medium py-2 rounded-md mt-6 transition-all flex items-center justify-center gap-2`}
          >
            {loading ? "Updating..." : "Update Password"}
          </button>

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
