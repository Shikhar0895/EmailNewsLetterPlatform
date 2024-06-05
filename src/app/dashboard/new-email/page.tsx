"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ICONS } from "../../shared/utils/icons";
import Emaileditor from "../../shared/components/editor/email.editor";

const Page = () => {
  const searchParams = useSearchParams();
  const subject: string | null = searchParams.get("subject");
  const subjectTitle = subject?.replace(/-/, " ");
  return (
    <div className="w-full flex bg-[#f7f7f7]">
      <div className="w-full p-5 bg-white rounded-r-xl">
        {/* back arrow */}
        <Link
          href={"/dashboard/write"}
          className="opacity-[.7] w-min flex text-xl items-center"
        >
          <span>{ICONS.backArrow}</span>
          <span>Exit</span>
        </Link>
        {/* email editor  */}
        <div className="my-5">
          {subjectTitle && <Emaileditor subjectTitle={subjectTitle} />}{" "}
        </div>
      </div>
    </div>
  );
};

export default Page;
