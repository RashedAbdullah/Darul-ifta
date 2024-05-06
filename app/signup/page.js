import SignUpForm from "@/components/signup-form";
import Link from "next/link";

const SingUpPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <SignUpForm />
      </div>
      <div className="text-center">
        একাউন্ট আছে? ‍
        <Link
          className="underline underline-offset-2 text-green-500"
          href="/signin"
        >
          সাইনইন করুন
        </Link>
      </div>
    </div>
  );
};

export default SingUpPage;
