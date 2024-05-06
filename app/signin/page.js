import SigninForm from "@/components/signin-form";
import Link from "next/link";


const SingInPage = () => {
  return (
    <div>
      <div className="flex justify-center lg:mt-20">
        <SigninForm />
      </div>
      <div className="text-center">
        একাউন্ট নেই? ‍<Link className="underline underline-offset-2 text-green-500" href="/signup">রেজিস্টার করুন</Link>
      </div>
    </div>
  );
};

export default SingInPage;
