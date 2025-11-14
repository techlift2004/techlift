import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";

// 🔹 Raw helper to check if a user exists in profiles table
async function checkExistingUser(email) {
  try {
    const { data: existingUser, error } = await supabase
      .from("profiles")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (error) {
      console.error("Error checking user:", error);
      return false; // fallback, allow signup, Supabase will handle duplicates
    }

    return !!existingUser; // true if user exists
  } catch (err) {
    console.error("Unexpected error checking user:", err);
    return false;
  }
}

export default function AuthForm() {
  const [mode, setMode] = useState("signin"); // signin | signup
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // 🔹 Google Sign-in
  const handleGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;
    } catch (err) {
      toast.error(err.message || "Google sign-in failed");
    }
  };

  // 🔹 Email/Password Auth
  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      if (mode === "signin") {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInError) throw signInError;

        toast.success("Signed in successfully!");
        navigate("/");
        return;
      }

      if (mode === "signup") {
        // 1️⃣ Pre-check profiles table
        const exists = await checkExistingUser(email);
        if (exists) {
          toast.error("An account with this email already exists.");
          return;
        }

        // 2️⃣ Proceed with Supabase signup
        const { data: signUpData, error: signUpError } =
          await supabase.auth.signUp({
            email,
            password,
          });

        if (signUpError) {
          toast.error(signUpError.message);
          return;
        }

        // 3️⃣ Success
        toast.success(
          "Account created! Check your email to verify your account."
        );
        reset();
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-200">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {mode === "signin" ? "Sign In" : "Sign Up"}
        </h2>

        {/* Google Auth */}
        <button
          onClick={handleGoogle}
          className="w-full border rounded-md py-2 flex items-center justify-center gap-2 mb-5 hover:bg-gray-50"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <input
                {...register("password", { required: "Password is required" })}
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none pr-10"
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
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember / Forgot Password */}
          {mode === "signin" && (
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="accent-purple-600" />
                Remember me
              </label>
              <button
                type="button"
                onClick={() => navigate("/reset-password")}
                className="text-purple-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition"
          >
            {mode === "signin" ? "Sign In" : "Create Account"}
          </button>
        </form>

        {/* Switch Between Modes */}
        <div className="text-center text-sm mt-4">
          {mode === "signin" ? (
            <p>
              Don’t have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-purple-600 hover:underline"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setMode("signin")}
                className="text-purple-600 hover:underline"
              >
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
