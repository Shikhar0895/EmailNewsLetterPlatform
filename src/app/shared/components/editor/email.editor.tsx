"use client";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import { useEffect, useState, useRef } from "react";
import { DefaultJsonData } from "@/assets/mails/default";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "@nextui-org/react";
import { saveEmail } from "@/actions/save.email";
import { GetEmailDetails } from "@/actions/get.email-details";
import { sendEmail } from "../../utils/email.sender";
import useSubscribersData from "../../hooks/useSubscribersData";

const Emaileditor = ({ subjectTitle }: { subjectTitle: string }) => {
  const [loading, setLoading] = useState(true);
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);
  const { user } = useClerk();

  const emailEditorRef = useRef<EditorRef>(null);
  const history = useRouter();
  const { data } = useSubscribersData();
  const userEmails = data.length > 0 ? data.map((sub: any) => sub.email) : null;

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      try {
        const { design, html } = data;
        console.log(data);
        setJsonData(design);
        await sendEmail({
          adminMail: user?.emailAddresses[0].emailAddress!,
          userEmail: userEmails,
          subject: subjectTitle,
          content: html,
        }).then((res) => {
          toast.success("Email sent successfully");
          history.push("/dashboard/write");
        });
      } catch (error) {
        console.log(`Error from exportHtml: ${error}`);
      }
    });
  };

  useEffect(() => {
    getEmailDetails();
  }, [user]);

  const onReady: EmailEditorProps["onReady"] = () => {
    const unlayer: any = emailEditorRef.current?.editor;
    unlayer.loadDesign(jsonData);
  };

  const saveDraft = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      const { design } = data;
      await saveEmail({
        title: subjectTitle,
        content: JSON.stringify(design),
        newsLetterOwnerId: user?.id!,
      }).then((res: any) => {
        toast.success(res.message);
        history.push("/dashboard/write");
      });
    });
  };

  const getEmailDetails = async () => {
    await GetEmailDetails({
      title: subjectTitle,
      newsLetterOwnerId: user?.id!,
    }).then((res: any) => {
      if (res) {
        setJsonData(JSON.parse(res?.content));
      }
      setLoading(false);
    });
  };

  return (
    <div>
      {!loading && (
        <div className="w-full h-[90vh] relative">
          <EmailEditor
            minHeight={"80vh"}
            ref={emailEditorRef}
            onReady={onReady}
          />
          <div className="absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3">
            <Button
              className="bg-transparent cursor-pointer flex items-center gap-1 text-black border border-[#00000048] text-lg rounded-lg"
              onClick={saveDraft}
            >
              <span className="opacity-[.7]">Save Draft</span>
            </Button>
            <Button
              className="bg-[#000] text-white cursor-pointer flex items-center gap-1 border text-lg rounded-lg"
              onClick={exportHtml}
            >
              <span>Send</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Emaileditor;
